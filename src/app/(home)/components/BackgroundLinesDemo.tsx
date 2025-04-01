import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { NavbarDemo } from "./NavbarDemo";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-black sm:pt-0 pt-10">
      <NavbarDemo/>
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-3xl md:text-4xl lg:text-7xl font-sans py-2 md:py-7 relative z-20 font-bold tracking-tight">
        Sadiq Ali <br /> Full Stack Developer.
      </h2>
      <p className="max-w-xl mx-auto text-lg text-neutral-400 text-center md:">
        Skilled in MERN stack , tailwind ,UI libraries like Acternity , Mantine , Magic, Shadcn  and Backend  apps like appwrite and cloudinary .
      </p>
    </BackgroundLines>
  );
}
