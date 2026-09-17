import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private readonly transporter: nodemailer.Transporter | null;

  constructor() {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS) {
      this.transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: Number(SMTP_PORT) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });
    } else {
      // Same pattern as the OAuth strategies / Finnhub key: missing
      // credentials degrade the feature instead of crashing the app.
      this.transporter = null;
      this.logger.warn('SMTP not configured — emails will be logged instead of sent.');
    }
  }

  async send(to: string, subject: string, text: string): Promise<void> {
    if (!this.transporter) {
      this.logger.log(`[email not sent, SMTP unconfigured] to=${to} subject="${subject}"`);
      return;
    }

    try {
      await this.transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to,
        subject,
        text,
      });
    } catch (err) {
      this.logger.warn(`Failed to send email to ${to}: ${err}`);
    }
  }
}
