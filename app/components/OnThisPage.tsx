"use client";

import { useEffect, useId, useRef, useState } from "react";

export type PageSection = readonly [id: string, label: string];

const NAVBAR_HEIGHT = 80;
const BAR_HEIGHT = 48;
const ACTIVATION_LINE = NAVBAR_HEIGHT + BAR_HEIGHT + 12;

export function OnThisPage({
  sections,
  ariaLabel,
  className,
}: {
  sections: readonly PageSection[];
  ariaLabel: string;
  className: string;
}) {
  const menuRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const [menuVisible, setMenuVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(sections[0][0]);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const observer = new IntersectionObserver(([entry]) => {
      setMenuVisible(entry.isIntersecting);
      if (entry.isIntersecting) setOpen(false);
    });
    observer.observe(menu);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const headings = sections
      .map(([id]) => document.getElementById(id))
      .filter((heading): heading is HTMLElement => heading !== null);
    if (headings.length === 0) return;

    let observer: IntersectionObserver | null = null;

    function updateActiveSection() {
      let current = sections[0][0];
      for (const [id] of sections) {
        const heading = document.getElementById(id);
        if (heading && heading.getBoundingClientRect().top <= ACTIVATION_LINE) current = id;
      }
      setActiveId(current);
    }

    function observe() {
      observer?.disconnect();
      const bottomInset = Math.max(0, window.innerHeight - ACTIVATION_LINE - 2);
      observer = new IntersectionObserver(updateActiveSection, {
        rootMargin: `-${ACTIVATION_LINE}px 0px -${bottomInset}px 0px`,
        threshold: 0,
      });
      headings.forEach((heading) => observer?.observe(heading));
    }

    observe();
    window.addEventListener("resize", observe);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", observe);
    };
  }, [sections]);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!barRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function selectSection(id: string) {
    setActiveId(id);
    setOpen(false);
    const heading = document.getElementById(id);
    if (!heading) return;
    const top = heading.getBoundingClientRect().top + window.scrollY - ACTIVATION_LINE;
    window.scrollTo({ top: Math.max(0, top) });
    history.pushState(null, "", `#${id}`);
  }

  const activeLabel = sections.find(([id]) => id === activeId)?.[1] ?? sections[0][1];

  return (
    <>
      <aside ref={menuRef} className={className} aria-label={ariaLabel}>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.08em]">On this page</p>
        <nav>
          {sections.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </aside>

      {!menuVisible && (
        <div ref={barRef} className="fixed inset-x-0 top-20 z-40 border-b border-fg/14 bg-bg text-fg shadow-sm lg:hidden">
          <button
            type="button"
            className="flex w-full items-center gap-3 px-4 py-2.5 text-left"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((current) => !current)}
          >
            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.08em]">On this page</span>
            <span className="min-w-0 flex-1 truncate text-sm">{activeLabel}</span>
            <Chevron open={open} />
          </button>
          {open && (
            <nav id={panelId} className="max-h-[calc(100dvh-8.5rem)] overflow-y-auto border-t border-fg/14 px-2 py-2">
              {sections.map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-current={id === activeId ? "true" : undefined}
                  className={`block rounded-md px-2 py-1.5 text-sm text-fg no-underline hover:bg-bg-hl focus-visible:bg-bg-hl focus-visible:outline-none ${id === activeId ? "bg-bg-hl" : ""}`}
                  onClick={(event) => {
                    event.preventDefault();
                    selectSection(id);
                  }}
                >
                  {label}
                </a>
              ))}
            </nav>
          )}
        </div>
      )}
    </>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
