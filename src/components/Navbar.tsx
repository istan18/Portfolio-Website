import React from "react";

type Props = { onToggleMenu: () => void };

export default function Navbar({ onToggleMenu }: Props) {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b-[3px] border-primary shadow-[0_2px_20px_rgba(224,159,125,0.15)] z-[1000] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center py-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-peach bg-clip-text text-transparent font-fredoka tracking-wide">
          Christian Tolentino
        </div>
        <ul className="hidden md:flex list-none gap-8">
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Experience", "#experience"],
            ["Projects", "#projects"],
            ["Skills", "#skills"],
            ["Blog", "#blog"],
          ].map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="no-underline text-cute-brown font-semibold text-[0.95rem] transition-all duration-300 relative hover:text-primary hover:after:w-full after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-primary after:to-peach after:rounded-full after:transition-all after:duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          aria-label="Open menu"
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={onToggleMenu}
        >
          <span className="w-[25px] h-[3px] bg-gradient-to-r from-primary to-peach rounded transition-all duration-300" />
          <span className="w-[25px] h-[3px] bg-gradient-to-r from-primary to-peach rounded transition-all duration-300" />
          <span className="w-[25px] h-[3px] bg-gradient-to-r from-primary to-peach rounded transition-all duration-300" />
        </button>
      </div>
    </nav>
  );
}
