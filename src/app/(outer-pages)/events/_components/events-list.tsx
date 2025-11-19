"use clients";
import { EventData } from "@/helpers/get-all-events";
import { EventCard } from "./event-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  events: EventData[];
};

const EventsList = ({ events }: Props) => {
  const tabs = [
    {
      value: "all",
      name: "All Events",
    },
    {
      value: "aces",
      name: "By ACES",
    },
    {
      value: "excess",
      name: "By EXCESS",
    },
  ];
  return (
    <>
      <Tabs defaultValue="all" className="gap-4 ">
        <TabsList className="bg-background rounded-none border-b p-0">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="bg-background data-[state=active]:border-primary dark:data-[state=active]:border-primary h-full rounded-none border-0 border-b-2 border-transparent data-[state=active]:shadow-none"
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="space-y-6">
            {(() => {
              let filteredEvents = events;
              if (tab.value === "aces") {
                filteredEvents = events.filter(
                  (event) => event.by.toLowerCase() === "aces"
                );
              } else if (tab.value === "excess") {
                filteredEvents = events.filter(
                  (event) => event.by.toLowerCase() === "excess"
                );
              }
              return filteredEvents.map((event, i) => (
                <EventCard key={i} event={event} index={i} />
              ));
            })()}
          </TabsContent>
        ))}
      </Tabs>

      <div className="text-center text-sm text-muted-foreground">
        Taranga isn&apos;t just about tech events—it&apos;s a celebration of
        creativity and innovation in every form! Join us for an unforgettable
        experience!
      </div>
    </>
  );
};

export { EventsList };
