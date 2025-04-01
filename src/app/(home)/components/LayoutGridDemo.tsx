"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div className="pb-5">
      <p className="font-bold md:text-4xl text-xl text-white">
        School Management System
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aliquid ratione sunt!
      </p>
      <a href="/www.google.com">Click to see</a>

    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="pb-5">
      <p className="font-bold md:text-4xl text-xl text-white">
        Learning Management System
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate expedita perferendis ducimus totam error!
      </p>
      <a href="www.google.com">Click to see</a>

    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div className="pb-5">
      <p className="font-bold md:text-4xl text-xl text-white">
        ZenFlow
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis incidunt magnam recusandae obcaecati!
      </p>
      <a href="www.google.com">Click to see</a>

    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div className="pb-5">
      <p className="font-bold md:text-4xl text-xl text-white">
        ReelsPro
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        lorem15
      </p>
      <a href="www.google.com">Click to see</a>

    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/images/projects/School.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/images/projects/LMS.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/images/projects/ZenFlow.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/images/projects/ReelsPro.jpg",
  },
];
