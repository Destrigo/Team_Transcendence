import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  return (
    <header className="flex items-center justify-end gap-3 border-b border-border bg-card px-6 py-3">
      <LanguageSwitcher />
    </header>
  );
}
