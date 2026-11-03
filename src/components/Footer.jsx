import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 text-sm text-sub md:flex-row md:items-center md:justify-between">
        <Logo />
        <div className="flex gap-8">
          <a href="#features" className="hover:text-ink">Product</a>
          <a href="#use-cases" className="hover:text-ink">Use cases</a>
          <a href="#security" className="hover:text-ink">Security</a>
          <a href="mailto:hello@nexerp.io" className="hover:text-ink">Contact</a>
        </div>
        <p className="text-muted">© 2026 NEXengage</p>
      </div>
    </footer>
  );
}
