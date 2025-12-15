import "./navbar.scss";
import PopUp from "./popUp/popUp";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinkActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? "navlink-active" : "";

  const handleDownloadRulebook = () => {
    const link = document.createElement("a");
    link.href = "/assets/pdfs/GC_Rulebook.pdf";
    link.download = "GC_Rulebook.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  function NavCenter() {
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
                    "russo-one-regular cursor-target rounded-md px-3 py-1 font-bold transition-colors " +
                    (isActive
                      ? "text-amber-400"
                      : "text-white/85 hover:text-amber-300")
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
  return (
    <nav
      className="
    sticky top-0 z-50 flex items-center justify-between px-2 pt-2
    backdrop-blur-md
    bg-gradient-to-b from-[#4b2718]/80 
    border-b border-white/5
  "
    >
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
            <h1 className="m-0 text-amber-400 text-3xl russo-one-regular font-bold tracking-wide ">
              SHAURYA
            </h1>
            <span className="text-s russo-one-regular text-white/70">
              The Sports Committee
            </span>
          </div>
        </NavLink>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
        <div className="pointer-events-auto">
          <NavCenter />
        </div>
      </div>

      {/* right: actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleDownloadRulebook}
          className="cursor-target hidden russo-one-regular rounded-md border border-amber-400/25 bg-amber-400/8 px-3 py-1.5 text-sm font-semibold text-amber-300 hover:bg-amber-400/12 md:inline-flex"
        >
          📘 Rulebook
        </button>
      </div>
      <Hamburger navLinkActive={navLinkActive} />
    </nav>
  );
}

interface NavRightProps {
  navLinkActive: ({ isActive }: { isActive: boolean }) => string;
  className?: string;
  children?: React.ReactNode;
}
const NavRight = ({
  navLinkActive,
  className: cn = "navbar-right ",
}: NavRightProps) => {
  return (
    <div className={cn}>
      <NavLink to="/" className={`${navLinkActive} russo-one-regular `}>
        Home
      </NavLink>
      <NavLink to="/sports" className={`${navLinkActive} russo-one-regular  `}>
        Sports
      </NavLink>
      <NavLink to="/rank" className={`${navLinkActive} russo-one-regular `}>
        Overall Rank
      </NavLink>
      <NavLink to="/players" className={`${navLinkActive} russo-one-regular  `}>
        Best Players
      </NavLink>
    </div>
  );
};

interface HamburgerProps {
  navLinkActive: ({ isActive }: { isActive: boolean }) => string;
}
const Hamburger = ({ navLinkActive }: HamburgerProps) => {
  const [hamState, setHamState] = useState(false);
  const handleHamClick = () => {
    setHamState(!hamState);
  };
  const handleHamClose = () => {
    setHamState(false);
  };
  return (
    <div id="hamburger-menu">
      <button onClick={handleHamClick}>|||</button>
      <PopUp
        open={hamState}
        onClose={handleHamClose}
        className="hamburger-menu-card"
      >
        <button className="close">✕</button>
        <NavRight
          navLinkActive={navLinkActive}
          className="hamburger-menu-content"
        />
      </PopUp>
    </div>
  );
};
