import Image from "next/image";
import { SpotlightPreview } from "./components/SpotlightPreview";
import { BackgroundLinesDemo } from "./components/BackgroundLinesDemo";
import { TimelineDemo } from "./components/TimelineDemo";
import { BackgroundBeamsWithCollisionDemo } from "./components/BackgroundBeamsWithCollisionDemo";

export default function Home() {
  return (
    <div >
      <BackgroundLinesDemo />
      <div className="h-1 w-full bg-neutral-600"></div>
      <TimelineDemo />
      <div className="h-1 w-full bg-neutral-600"></div>
      <BackgroundBeamsWithCollisionDemo />
    </div>
  );
}
