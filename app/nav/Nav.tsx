"use client";

import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  `text-fg rounded-md px-2 py-1.5 hover:bg-black/4 md:-my-3 md:inline-flex md:items-center md:py-3${isActive ? " bg-bg-lt" : ""}`;

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-bg-hl shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg border"
            onClick={() => setOpen((s) => !s)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <Link to="/" className="font-semibold text-lg" onClick={() => setOpen(false)}>
            Bizarre Adventure
          </Link>

          <nav className="hidden md:flex items-center gap-4 ml-6">
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
        </div>

        <div className="flex items-center gap-3" />
      </div>

      {open && (
        <nav className="border-t bg-transparent md:hidden">
          <div className="px-4 pb-4 space-y-2">
            <NavLink to="/" className={({ isActive }) => `block ${navLinkClassName({ isActive })}`} onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/mechanics" className={({ isActive }) => `block ${navLinkClassName({ isActive })}`} onClick={() => setOpen(false)}>
              Mechanics
            </NavLink>
            <NavLink to="/character-creation" className={({ isActive }) => `block ${navLinkClassName({ isActive })}`} onClick={() => setOpen(false)}>
              Character Creation
            </NavLink>
            <NavLink to="/resources" className={({ isActive }) => `block ${navLinkClassName({ isActive })}`} onClick={() => setOpen(false)}>
              Resources
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}
