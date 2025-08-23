import React from "react";
import Herosection from "./_components/Herosection";
import Partners from "./_components/Partners";
import Events from "./_components/Events";
import Numbers from "./_components/Numbers";
// import Members from "./_components/CommunityMembers";
import Goals from "./_components/Goals";
import InfoBanner from "@/components/InfoBanner";

export default function Home() {
  return (
    <div className="flex flex-col space-y-section overflow-x-hidden ">
      <Herosection />
      <Goals />
      <Numbers />
      <Events />
      {/* <Members /> */}
      <Partners />
      <InfoBanner
        leftContent={
          <p className="max-w-[600px]">
            Collaboration is one of the most powerfull thing, one must take part
            with one another to better this world and to preserve kindness in
            humanity.
          </p>
        }
        cta={{
          text: "Lets Collaborate",
          link: "https://forms.gle/nKwtAMG2Q4rL57QW7",
        }}
      />
    </div>
  );
}
