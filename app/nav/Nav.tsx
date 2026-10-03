"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Nav() {
  const [open, setOpen] = useState(false);
  // color variables are controlled via `app/app.css` (CSS variables)

  return (
    <header className="site-nav shadow-sm">
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
            <Link to="/" className="nav-link" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/mechanics" className="nav-link" onClick={() => setOpen(false)}>
              Mechanics
            </Link>
            <Link to="/character-creation" className="nav-link" onClick={() => setOpen(false)}>
              Character Creation
            </Link>
            <Link to="/resources" className="nav-link" onClick={() => setOpen(false)}>
              Resources
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3" />
      </div>

      {open && (
        <nav className="md:hidden bg-transparent border-t">
          <div className="px-4 pb-4 space-y-2">
            <Link to="/" className="block nav-link" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/mechanics" className="block nav-link" onClick={() => setOpen(false)}>
              Mechanics
            </Link>
            <Link to="/character-creation" className="block nav-link" onClick={() => setOpen(false)}>
              Character Creation
            </Link>
            <Link to="/resources" className="block nav-link" onClick={() => setOpen(false)}>
              Resources
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
