import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";
import { HoverBorderGradientDemo } from "./HoverBorderGradientDemo";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div>
      <div className="max-w-2xl mx-auto p-10">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  py-5 text-center font-sans font-bold">
          Contact Me </h1>
        <p></p>
        <p className="text-neutral-500 pb-5 max-w-lg mx-auto text-md text-center">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p>
        <HoverBorderGradientDemo />
      </div>
      <div>
      <AnimatedTooltipPreview />
      </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
