"use client";

import { useRouter } from "next/navigation";
import { eventsType } from "../types/types";
import EventsCard from "./EventsCard";

const eventsList: eventsType[] = [
  {
    image: "/images/events-image.svg",
    title: "Shiloh Events",
    link: "/programs",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: "/images/events-image.svg",
    title: "Shiloh Events",
    link: "/programs",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: "/images/events-image.svg",
    title: "Shiloh Events",
    link: "/programs",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function EventsComponent() {
  const router = useRouter();
  return (
    <section className="w-screen box-border bg-zinc-100 flex flex-col items-center text-black py-10 gap-7">
      <h1 className="font-extrabold text-4xl">Our Annual Large Events</h1>
      <div className="w-4/5 grid grid-cols-3 gap-5">
        {eventsList.map((items) => (
          <EventsCard {...items} />
        ))}
      </div>
      <button
        className="bg-black text-white px-20 py-2 text-lg font-medium rounded-full"
        onClick={() => router.push("/programs")}
      >
        All upcoming events
      </button>
    </section>
  );
}
