"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function HoverBorderGradientDemo() {
  return (
    <div className="flex justify-center text-center">
      <button>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span className="font-semibold text-neutral-400 text-lg">Contact Me</span>
      </HoverBorderGradient>
      </button>
    </div>
  );
}

