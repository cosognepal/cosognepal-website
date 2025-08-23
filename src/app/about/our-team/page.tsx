import SectionTitle from "@/components/SectionTitle";
import Member from "@/components/Member";
import getMembers from "../getMembersInfo";
import InfoBanner from "@/components/InfoBanner";

export default async function OurTeam() {
  const members = await getMembers();
  return (
    <>
      <div className="main_container h-max flex flex-col space-y-section w-full py-standard px-standard sm:px-block  max-w-[1400px] m-auto">
        <div className="board_members space-y-block">
          <SectionTitle title="Founding Members" />
          <div className="members grid grid-cols-auto-fit-320 grid-rows-max gap-standard justify-center">
            {members.map((member, index) => {
              if (
                member.name === "Bibek Bhandari" ||
                member.name === "Aashish Panthi"
              ) {
                const post = "Founder/" + member.post;

                return (
                  <Member
                    key={index + member.name}
                    data={{ ...member, post }}
                  />
                );
              }
            })}
          </div>
        </div>

        <div className="board_members space-y-block " id="members">
          <SectionTitle title="Our team members" />
          <div className="members grid grid-cols-auto-fit-320 grid-rows-max gap-standard justify-center">
            {members.map((member, index) => {
              if (member.name != "Bibek Bhandari" && member.name != "Aashish Panthi")
                return <Member key={index + member.name} data={member} />;
            })}
          </div>
        </div>
      </div>

      <InfoBanner
        leftContent={
          <article className="max-w-[800px]">
            <h1 className="font-bold text-mid-title">
              Do you want to shape the situation of Computer Science in Nepal?
            </h1>
            <p>Let&apos;s change it together, Join Cosog Nepal.</p>
          </article>
        }
        cta={{
          text: "Join Now",
          link: "https://forms.gle/euosQkdUW45P8mYc9",
        }}
      />
    </>
  );
}
