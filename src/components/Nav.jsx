import { useState } from "react";
import Logo from "./Logo.jsx";

const LINKS = [
  ["Product", "#features"],
  ["Use cases", "#use-cases"],
  ["Results", "#results"],
  ["Security", "#security"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line/50 bg-page/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <div className="hidden items-center gap-10 text-sm text-sub md:flex">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-ink">{label}</a>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <a href="https://nexgpt.nexerp.io/login" className="btn text-ink">Login</a>
          <a href="#cta" className="btn-light">Book a demo</a>
          <a href="https://nexgpt.nexerp.io" className="btn-dark">Try for free</a>
        </div>
        <button className="md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
        </button>
      </nav>
      {open && (
        <div className="flex flex-col gap-4 border-t border-line/50 px-6 py-4 text-sub md:hidden">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="https://nexgpt.nexerp.io" className="btn-dark">Try for free</a>
        </div>
      )}
    </header>
  );
}
