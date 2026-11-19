"use client";

import React, { useState } from "react";
import { NavLink } from "react-router";
import { applyTheme, readAppliedTheme, type Theme } from "../theme";

const navLinkClassName =
  "rounded-md px-2 py-1 text-lg text-white hover:bg-white/10 transition-colors inline-flex items-center justify-center font-medium text-center leading-tight";

const links = [
  { to: "/", label: "HOME" },
  { to: "/mechanics", label: "MECHANICS" },
  { to: "/mechanic-examples", label: "MECHANIC EXAMPLES" },
  { to: "/character-creation", label: "CHARACTER CREATION" },
  { to: "/resources", label: "RESOURCES" },
] as const;

function StackedLabel({ label }: { label: string }) {
  const words = label.split(" ");
  if (words.length === 1) return <>{label}</>;

  return (
    <span className="inline-flex flex-col items-center">
      {words.map((word) => (
        <span key={word}>{word}</span>
      ))}
    </span>
  );
}

function ThemeToggle() {
  function toggleTheme() {
    const next: Theme = readAppliedTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
  }

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      className="rounded-lg border border-white/20 p-2 text-white hover:bg-white/10 transition-colors"
      onClick={toggleTheme}
    >
      <span className="hidden dark:block">
        <SunIcon />
      </span>
      <span className="dark:hidden">
        <MoonIcon />
      </span>
    </button>
  );
}

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 3v1.5M12 19.5V21M4.9 4.9l1.1 1.1M18 18l1.1 1.1M3 12h1.5M19.5 12H21M4.9 19.1l1.1-1.1M18 6l1.1-1.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 14.5A7.5 7.5 0 0 1 9.5 4 7 7 0 1 0 20 14.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black font-josefin-slab shadow-sm">
      <div className="relative flex w-full items-center justify-center px-4 py-2 md:justify-between">
        <h1>
          <NavLink to="/" aria-label="Go to home" onClick={() => setOpen(false)}>
            <img src="/BAD6_logo.png" alt="Bizarre Adventures D6" className="h-16 w-auto" />
          </NavLink>
        </h1>

        <div className="hidden items-center gap-1 md:flex">
          <nav className="flex items-center gap-1">
            {links.map((link, index) => (
              <React.Fragment key={link.to}>
                {index > 0 && (
                  <span className="select-none px-1 text-lg text-white/55" aria-hidden="true">
                    /
                  </span>
                )}
                <NavLink
                  to={link.to}
                  className={navLinkClassName}
                  onClick={() => setOpen(false)}
                >
                  <StackedLabel label={link.label} />
                </NavLink>
              </React.Fragment>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            className="rounded-lg border border-white/20 p-2 text-white"
            onClick={() => setOpen((s) => !s)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {open && (
            <nav className="absolute right-0 top-full border border-white/10 bg-black">
              <div className="flex w-max flex-col items-stretch p-4">
                {links.map((link, index) => (
                  <React.Fragment key={link.to}>
                    {index > 0 && (
                      <span
                        className="select-none py-1 text-center text-lg text-white/55"
                        aria-hidden="true"
                      >
                        /
                      </span>
                    )}
                    <NavLink
                      to={link.to}
                      className={`block ${navLinkClassName}`}
                      onClick={() => setOpen(false)}
                    >
                      <StackedLabel label={link.label} />
                    </NavLink>
                  </React.Fragment>
                ))}
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
