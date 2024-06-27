"use client";

import { useRouter } from "next/navigation";
import { programsCardTypes } from "./types/types";
import { useState } from "react";

export default function ProgramsCard({
  image,
  title,
  message,
  link,
}: programsCardTypes) {
  const router = useRouter();
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <section
      className="border border-gray-200 rounded-2xl p-6 box-border relative flex flex-col gap-3 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        <img src={image} alt={title} />
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-sm text-justify">{message}</p>
      <div
        className={`${
          hovered ? "flex" : "hidden"
        } absolute rounded-b-2xl top-0 bottom-0 right-0 left-0 h-full w-full box-border z-20 items-end justify-center pb-10 bg-gradient-to-t from-black to-transparent`}
      >
        <button
          onClick={() => router.push(link)}
          className="bg-gray-100 text-black text-sm font-medium rounded-full px-5 py-1"
        >
          Learn more
        </button>
      </div>
    </section>
  );
}
