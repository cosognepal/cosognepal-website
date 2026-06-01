import React from "react";
import Herosection from "./_components/Herosection";
import Belief from "./_components/Belief";
import Partners from "./_components/Partners";
import Events from "./_components/Events";
import Numbers from "./_components/Numbers";
// import FoundersMessage from "./_components/FoundersMessage";
import Goals from "./_components/Goals";
import RecentPosts from "./_components/RecentPosts";
import InfoBanner from "@/components/InfoBanner";

export default function Home() {
  return (
    <div className="flex flex-col space-y-section overflow-x-hidden">
      <div>
        <Herosection />
        <Belief />
      </div>
      <Goals />
      <Events />
      <Numbers />
      {/* <FoundersMessage /> */}
      <RecentPosts />
      <Partners />
      <InfoBanner
        leftContent={
          <p className="max-w-[600px]">
            Collaboration is one of the most powerful things — coming together
            with one another to better this world and to preserve kindness in
            humanity.
          </p>
        }
        cta={{
          text: "Let's Collaborate",
          link: "https://forms.gle/nKwtAMG2Q4rL57QW7",
        }}
      />
    </div>
  );
}
