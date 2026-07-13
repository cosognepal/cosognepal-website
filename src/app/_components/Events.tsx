import SectionTitle from "@/components/SectionTitle";
import getEvents from "../events/getEvents";

const Events = async () => {
  const EventsData = await getEvents({
    numberOfEvents: 5,
    order: "Des",
  });

  return (
    <main className="px-standard w-full max-w-content mx-auto space-y-block">
      <SectionTitle title="Events" viewall="/events" />
      {/* events listing */}
      <section className="w-full max-w-content mx-auto grid grid-cols-1 sm:grid-cols-2 grid-rows-2-400 gap-small justify-center">
        {EventsData.map((event, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url("${event.images?.[0].src}")` }}
            className={`relative rounded-[5px] overflow-hidden bg-no-repeat bg-cover group`}
          >
            <div className="absolute text-white px-8 pb-2 md:pb-6 bottom-0 h-1/2 w-full bg-gradient-to-t from-[rgba(0,0,0,0.8)] group-hover:from-30% flex justify-end flex-col ">
              <div className="group-hover:-translate-y-[max(60px,100%)] transition-all space-y-v-small">
                <h2 className="font-bold text-sub-title md:text-xl line-clamp-2 leading-tight">
                  {event.title}
                </h2>
                <div className="descriptions space-y-v-small absolute opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100">
                  <p
                    className="text-sub-para font-medium line-clamp-2"
                    key={index}
                  >
                    {event.descriptions[0]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Events;
