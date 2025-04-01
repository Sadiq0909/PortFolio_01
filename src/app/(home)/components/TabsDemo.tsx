"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import Link from "next/link";

export function TabsDemo() {
  const tabs = [
    {
      title: "School Management App",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-cyan-600 to-cyan-800">
          <p>School Management App</p>
          <ImageContainer 
          src="/images/projects/School.jpg"
          href="www.google.com"
          />
        </div>
      ),
    },
    {
      title: "Learning Management App",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-lime-600 to-lime-800">
          <p>Learning Management App</p>
          <ImageContainer 
          src="/images/projects/LMS.jpg"
          href="www.google.com"
          />
        </div>
      ),
    },
    {
      title: "ZenFlow",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-pink-700 to-pink-900">
          <p>ZenFlow</p>
          <ImageContainer 
          src="/images/projects/ZenFlow.jpg"
          href="www.google.com"
          />
        </div>
      ),
    },
    {
      title: "ReelsPro",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-600 to-orange-800">
          <p>ReelsPro</p>
          <ImageContainer 
          src="/images/projects/ReelsPro.jpg"
          href="www.google.com"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start ">
      <Tabs tabs={tabs} />
    </div>
  );
}

function ImageContainer({ src, href }: { src: string; href: string }) {
    return (
      <Link href={href ?? ""} target="_blank">
        <Image
          src={src}
          alt="dummy image"
          width={1000}
          height={1000}
          className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto "
        />
      </Link>
    );
  }
