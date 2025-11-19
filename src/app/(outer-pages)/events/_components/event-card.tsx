import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/helpers/cn";
import { EventData } from "@/helpers/get-all-events";
import Image from "next/image";
import React from "react";

type Props = {
  event: EventData;
  index: number;
};

const EventCard = ({ event, index: i }: Props) => {
  return (
    <Card
      className="p-6 grid grid-cols-1 lg:grid-cols-7 bg-card/30 gap-9 scroll-m-32"
      id={event.id}
    >
      <div
        className={cn(
          "space-y-4 lg:col-span-4",
          i % 2 == 0 ? "lg:order-1" : "lg:order-2"
        )}
      >
        <h2
          className={
            "text-2xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight"
          }
        >
          {i + 1}. {event.title}
        </h2>

        {event.category && event.category.length !== 0 && (
          <div className="flex flex-wrap gap-2">
            <Badge className=" text-xs lg:text-sm font-normal">
              {event.by}
            </Badge>
            {event.category?.map((category, index) => (
              <Badge
                key={index}
                variant="secondary"
                className=" text-xs lg:text-sm font-normal"
              >
                {category}
              </Badge>
            ))}
          </div>
        )}
        <div>{event.content}</div>
      </div>
      <Image
        src={event.image}
        alt={event.title}
        width={800}
        height={800}
        className={cn(
          "w-full h-full object-cover object-center lg:col-span-3 rounded-lg",
          i % 2 == 0 ? "order-2" : "order-1"
        )}
        quality={100}
      />
    </Card>
  );
};

export { EventCard };
