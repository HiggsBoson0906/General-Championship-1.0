// src/components/navbar/Navbar.tsx
import { NavLink } from "react-router-dom";
import PopUp from "./popUp/popUp";
import { useState } from "react";

export default function Navbar() {
  const handleDownloadRulebook = () => {
    const link = document.createElement("a");
    link.href = "/pdfs/rulebook.pdf"; // actual PDF path
    link.download = "GC_Rulebook.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className="
    sticky top-0 z-50 flex items-center justify-between px-2 pt-2 
    backdrop-blur-md
    bg-gradient-to-b from-[#4b2718]/80 
    border-b border-white/5
  "
    >
      {/* left: logo */}
      <div>
        <NavLink
          to="/"
          className="
        group relative flex items-center gap-3
      transition
      hover:scale-[1.07]
	  
    "
        >
          <img
            src="/assets/gclogo.png"
            alt="GC Logo"
            className="w-18 h-18 object-contain"
          />

          <div>
            <h1 className="m-0 text-amber-400 ext-3xl font-bold tracking-wide ">
              SHAURYA
            </h1>
            <span className="text-s text-white/70">The Sports Committee</span>
          </div>
        </NavLink>
      </div>

      {/* center: nav links (absolutely centered so it remains center) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
        <div className="pointer-events-auto">
          <NavCenter onDownloadRulebook={handleDownloadRulebook} />
        </div>
      </div>

      {/* right: actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleDownloadRulebook}
          className="cursor-target hidden rounded-md border border-amber-400/25 bg-amber-400/8 px-3 py-1.5 text-sm font-semibold text-amber-300 hover:bg-amber-400/12 md:inline-flex"
        >
          📘 Rulebook
        </button>

        <MobileMenu onDownloadRulebook={handleDownloadRulebook} />
      </div>
    </nav>
  );
}

/* ---------- center nav component ---------- */

function NavCenter({ onDownloadRulebook }: { onDownloadRulebook: () => void }) {
  const links: { to: string; label: string }[] = [
    { to: "/", label: "Home" },
    { to: "/sports", label: "Sports" },
    { to: "/rank", label: "Overall Rank" },
    { to: "/players", label: "Best Players" },
  ];

  return (
    <div className="flex items-center gap-6 rounded-lg">
      {links.map((l) => (
        <NavLink key={l.to} to={l.to} end>
          {({ isActive }) => (
            <div className="relative inline-flex items-center">
              {/* electric halo (only rendered when active) */}
              {isActive && (
                <span
                  aria-hidden
                  className="absolute -inset-[6px] -z-10 rounded-lg blur-[10px] opacity-95
                             bg-[conic-gradient(from_0deg,_#06b6d4,_#60a5fa,_#8b5cf6,_#f472b6,_#06b6d4)]
                             animate-[spin_4s_linear_infinite]"
                />
              )}

              {/* inner subtle border when active */}
              {isActive && (
                <span className="absolute -inset-[2px] -z-5 rounded-md bg-black/60" />
              )}

              {/* actual link label */}
              <span
                className={
                  "cursor-target rounded-md px-3 py-1 text-sm font-semibold transition-colors " +
                  (isActive ? "text-white" : "text-white/85 hover:text-white")
                }
              >
                {l.label}
              </span>
            </div>
          )}
        </NavLink>
      ))}
    </div>
  );
}

/* ---------- mobile menu / hamburger ---------- */
function MobileMenu({
  onDownloadRulebook,
}: {
  onDownloadRulebook: () => void;
}) {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/sports", label: "Sports" },
    { to: "/rank", label: "Overall Rank" },
    { to: "/players", label: "Best Players" },
  ];

  return (
    <>
      {/* hamburger trigger (mobile only) */}
      <button
        className="md:hidden inline-flex items-center justify-center rounded-md bg-white/5 p-2 text-black/90 cursor-target"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="text-black/90"
        >
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <PopUp open={open} onClose={() => setOpen(false)} className="!p-0">
        {/* Full viewport content — covers the display area */}
        <div className="fixed inset-0 z-50 flex flex-col bg-amber-500 text-black">
          {/* top bar */}
          <div className="flex items-center justify-between px-6 py-5">
            <div className="flex items-center gap-3">
              <img
                src="/assets/gclogo.png"
                className="h-10 w-10 object-contain"
                alt="GC Logo"
              />
              <div>
                <h3 className="text-black text-lg font-bold">SHAURYA</h3>
                <span className="text-sm text-black/70">
                  The Sports Committee
                </span>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-black/80 text-2xl cursor-target"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* centered menu items */}
          <div className="flex flex-1 flex-col items-center justify-center px-6">
            <nav className="flex w-full max-w-md flex-col items-center gap-6 text-center">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    (isActive
                      ? "text-black/900 font-semibold"
                      : "text-black/900") +
                    " cursor-target block w-full rounded-md px-4 py-3 text-2xl font-semibold text-center"
                  }
                >
                  {l.label}
                </NavLink>
              ))}

              <button
                onClick={() => {
                  onDownloadRulebook();
                  setOpen(false);
                }}
                className="mt-8 w-full max-w-md cursor-target rounded-md bg-black/5 px-6 py-3 text-lg font-semibold text-black hover:bg-black/10"
              >
                📘 Rulebook
              </button>
            </nav>
          </div>

          {/* footer */}
          <div className="py-5 text-center text-xs text-black/70">
            © {new Date().getFullYear()} SHAURYA — The Sports Committee
          </div>
        </div>
      </PopUp>
    </>
  );
}

