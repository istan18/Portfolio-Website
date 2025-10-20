import React from "react";

type Props = { children: string };

export default function SectionTitle({ children }: Props) {
  return (
    <h2 className="bg-gradient-to-r from-primary to-peach bg-clip-text text-transparent text-center text-4xl md:text-5xl font-extrabold mb-12 font-fredoka">
      {children}
    </h2>
  );
}
