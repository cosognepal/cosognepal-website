"use client";

import Event from "./Event";
import type { Tevent } from "../type";
import { useEffect, useRef, useState } from "react";

type EventsPageClientProps = {
  events: Tevent[];
};

export default function EventsPageClient({ events }: EventsPageClientProps) {
  const dates: string[] = events.map((event) => event.date);
  const [currentDate, setCurrentDate] = useState<string>("");
  const [activeBarHeight, setActiveBarHeight] = useState<number>(0);
  const previousScrollY = useRef(0);
  const events_container = useRef<HTMLDivElement | null>(null);
  const activeBarHeightPerEvent = events.length > 0 ? 100 / events.length : 0;

  useEffect(() => {
    const scrollAction = () => {
      const currentScrollY = window.scrollY;
      if (!events_container.current) return;
      const totalScrollHeight = (
        events_container.current.childNodes[0] as HTMLDivElement
      ).getBoundingClientRect().height;
      const onePercent =
        ((activeBarHeightPerEvent / totalScrollHeight) * events.length) / 2;

      if (currentScrollY > previousScrollY.current) {
        setActiveBarHeight((currentActiveBarHeight) => {
          if (currentActiveBarHeight > 90) return currentActiveBarHeight;
          return currentActiveBarHeight + onePercent;
        });
      } else {
        setActiveBarHeight((currentActiveBarHeight) => {
          if (currentActiveBarHeight < 5) return currentActiveBarHeight;
          return currentActiveBarHeight - onePercent;
        });
      }
      previousScrollY.current = currentScrollY;
    };
    if (events.length > 0) window.addEventListener("scroll", scrollAction);
    return () => {
      window.removeEventListener("scroll", scrollAction);
    };
  }, [events.length, activeBarHeightPerEvent]);

  return (
    <section
      className={`mt-section px-standard flex min-w-[100vw] w-full m-auto space-x-standard 
                            justify-center items-start`}
    >
      <h1 className="sr-only">Past Events</h1>
      <div className="events space-y-block" ref={events_container}>
        {events.map((event, index) => {
          return (
            <Event
              data={event}
              key={index}
              index={index}
              states={{ setCurrentDate, setActiveBarHeight }}
              activeBarHeightPerEvent={activeBarHeightPerEvent}
            />
          );
        })}
      </div>
      <div className="slider_container p-standard flex-col items-baseline text-sub-para font-normal text-black-mid hidden sticky lg:flex space-y-standard top-section h-[90vh] w-[200px]">
        <div className="start_time ">{dates[0]}</div>
        <div className="slider relative h-[90%] top-0 w-full left-1/2">
          <div className="line h-full w-[2px] bg-gray-dark"></div>
          <div className="active_container h-max w-full">
            <div
              className="line_active w-[10px] bg-primary absolute top-0 left-[-3px] rounded-[4px]"
              style={{ height: `${activeBarHeight}%` }}
            ></div>
            <div
              className="flex w-max space-x-small absolute left-[-7.95px]"
              style={{ top: `${activeBarHeight - 0.5}%` }}
            >
              <div className="ball w-[20px] h-[20px] rounded-[10px] bg-primary"></div>
              <div className="current_date font-bold h-min">{currentDate}</div>
            </div>
          </div>
        </div>
        <div className="end_time">{dates[dates.length - 1]}</div>
      </div>
    </section>
  );
}
