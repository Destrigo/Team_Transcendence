import { createCipheriv, createDecipheriv, createHash, randomBytes } from 'crypto';

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 12;

// TOTP_ENCRYPTION_KEY can be any length/format (a passphrase is fine) — it's
// hashed down to a fixed 32-byte AES-256 key rather than requiring the env
// var to already be exactly-sized key material.
function getKey(): Buffer {
  const raw = process.env.TOTP_ENCRYPTION_KEY;
  if (!raw) {
    throw new Error('TOTP_ENCRYPTION_KEY is not defined');
  }
  return createHash('sha256').update(raw).digest();
}

// Encrypts data at rest (e.g. a user's TOTP secret) so DB read access alone
// isn't enough to clone someone's 2FA. Output packs iv + authTag + ciphertext
// into a single base64 string so it fits the existing String column as-is.
export function encryptSecret(plaintext: string): string {
  const iv = randomBytes(IV_LENGTH);
  const cipher = createCipheriv(ALGORITHM, getKey(), iv);
  const encrypted = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
  const authTag = cipher.getAuthTag();
  return Buffer.concat([iv, authTag, encrypted]).toString('base64');
}

export function decryptSecret(payload: string): string {
  const raw = Buffer.from(payload, 'base64');
  const iv = raw.subarray(0, IV_LENGTH);
  const authTag = raw.subarray(IV_LENGTH, IV_LENGTH + 16);
  const encrypted = raw.subarray(IV_LENGTH + 16);

  const decipher = createDecipheriv(ALGORITHM, getKey(), iv);
  decipher.setAuthTag(authTag);
  return Buffer.concat([decipher.update(encrypted), decipher.final()]).toString('utf8');
}
