"use client";

import React, { useState } from "react";
import { NavLink } from "react-router";

const navLinkClassName =
  "text-fg rounded-md px-3 py-2 text-md font-medium hover:bg-white/10 transition-colors md:inline-flex md:items-center";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black shadow-sm">
      <div className="relative flex w-full items-center justify-center px-4 py-2 md:justify-between">
        <h1>
          <NavLink to="/" aria-label="Go to home" onClick={() => setOpen(false)}>
            <img src="/BAD6_logo.png" alt="Bizarre Adventures D6" className="h-16 w-auto" />
          </NavLink>
        </h1>

        <nav className="hidden items-center gap-2 md:flex">
          <NavLink to="/" className={navLinkClassName} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/mechanics" className={navLinkClassName} onClick={() => setOpen(false)}>
            Mechanics
          </NavLink>
          <NavLink to="/character-creation" className={navLinkClassName} onClick={() => setOpen(false)}>
            Character Creation
          </NavLink>
          <NavLink to="/resources" className={navLinkClassName} onClick={() => setOpen(false)}>
            Resources
          </NavLink>
        </nav>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden">
          <button
            aria-label="Toggle menu"
            className="rounded-lg border border-white/20 p-2 text-fg md:hidden"
            onClick={() => setOpen((s) => !s)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {open && (
            <nav className="absolute right-0 top-full border border-fg/10 bg-black">
              <div className="w-max space-y-2 p-4">
                <NavLink to="/" className={`block ${navLinkClassName}`} onClick={() => setOpen(false)}>
                  Home
                </NavLink>
                <NavLink to="/mechanics" className={`block ${navLinkClassName}`} onClick={() => setOpen(false)}>
                  Mechanics
                </NavLink>
                <NavLink to="/character-creation" className={`block ${navLinkClassName}`} onClick={() => setOpen(false)}>
                  Character Creation
                </NavLink>
                <NavLink to="/resources" className={`block ${navLinkClassName}`} onClick={() => setOpen(false)}>
                  Resources
                </NavLink>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}