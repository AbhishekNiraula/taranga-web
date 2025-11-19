import { getAllEvents } from "@/helpers/get-all-events";
import { Metadata } from "next";
import { EventsList } from "./_components/events-list";

const EventsPage = async () => {
  const events = await getAllEvents();
  return (
    <div className="space-y-12 container mx-auto my-16 h-full w-full min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-lg text-muted-foreground/60 text-center mb-2 tracking-wider">
          Get involved!
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 gradient-text">
          Taranga Event Catalog
        </h2>
      </div>
      {events?.length === 0 ? (
        <p>No events found</p>
      ) : (
        <EventsList events={events} />
      )}
    </div>
  );
};
export default EventsPage;

export const metadata: Metadata = {
  title: "Events",
};
