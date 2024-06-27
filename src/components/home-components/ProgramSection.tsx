"use client";
import { useRouter } from "next/navigation";
import ProgramsCard from "../ProgramsCard";
import { programsCardTypes } from "../types/types";

const programsList: programsCardTypes[] = [
  {
    image: "/images/home-service.svg",
    title: "kingdom Advancement Prayers",
    message:
      "Kingdom advancement prayers are the one of the foundations of Kingdom service according to Matthew 6:33. At winners chapel int'l we engage is continuous prayers 24/7 to keep the fire burning both in our lives and in the church to combat every satanic force.",
    link: "/kingdom-service",
  },
  {
    image: "/images/home-service.svg",
    title: "Soul Winning",
    message:
      "Kingdom advancement prayers are the one of the foundations of Kingdom service according to Matthew 6:33. At winners chapel int'l we engage is continuous prayers 24/7 to keep the fire burning both in our lives and in the church to combat every satanic force.",
    link: "/kingdom-service",
  },
  {
    image: "/images/home-service.svg",
    title: "Service Unit",
    message:
      "Kingdom advancement prayers are the one of the foundations of Kingdom service according to Matthew 6:33. At winners chapel int'l we engage is continuous prayers 24/7 to keep the fire burning both in our lives and in the church to combat every satanic force.",
    link: "/kingdom-service",
  },
];

export default function ProgramSection() {
  const router = useRouter();
  return (
    <section className="w-screen box-border flex flex-col items-center bg-black px-16 pt-16 pb-10 gap-12">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-3">
          Kingdom Advancement Endeavours
        </h1>
        <p className="text-base text-gray-200 font-light">
          The life wire of every winner
        </p>
      </div>
      <div className="w-11/12 grid grid-cols-3 gap-6">
        {programsList.map(
          ({ image, title, message, link }: programsCardTypes) => (
            <ProgramsCard
              image={image}
              title={title}
              message={message}
              link={link}
            />
          )
        )}
      </div>
      <button
        onClick={() => router.push("/kingdom-service")}
        className="bg-white text-black text-lg font-medium hover:font-bold box-border px-24 py-2 rounded-full"
      >
        Join a Service unit
      </button>
    </section>
  );
}
