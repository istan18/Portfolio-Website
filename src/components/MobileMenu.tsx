import React from "react";

type Props = { open: boolean; onNavigate?: () => void };

export default function MobileMenu({ open, onNavigate }: Props) {
  return (
    <div
      className={`md:hidden fixed top-16 left-0 w-full bg-white/95 backdrop-blur z-[900] border-b-2 border-primary shadow ${
        open ? "" : "hidden"
      }`}
    >
      <ul className="flex flex-col items-center gap-4 py-6">
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
              onClick={onNavigate}
              className="no-underline text-cute-brown font-semibold hover:text-primary"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
