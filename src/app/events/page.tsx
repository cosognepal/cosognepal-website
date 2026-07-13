import getEvents from "./getEvents";
import EventsPageClient from "./_components/EventsPageClient";

export default async function EventsPage() {
  const events = await getEvents();

  return <EventsPageClient events={events} />;
}
