"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Github",
    designation: "",
    image:
      "/images/Links/github.jpg",
    link : "https://github.com/Sadiq0909"
  },
  {
    id: 2,
    name: "LinkedIn",
    designation: "",
    image:
      "/images/Links/linkedin.png",
      link : "https://www.linkedin.com/in/sadiq-ali-aa4b00285/"
  },
  {
    id: 4,
    name: "Leetcode",
    designation: "",
    image:
      "/images/Links/leetcode.png",
      link : "https://leetcode.com/u/8604sadiq/"
  },
  {
    id: 5,
    name: "Instagram",
    designation: "",
    image:
      "/images/Links/insta.jpg",
      link : "https://www.instagram.com/_ali_sadiq_9014/?hl=en"
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
