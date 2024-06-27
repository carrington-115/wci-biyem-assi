"use client";

import { useRouter } from "next/navigation";
import { programsCardTypes } from "./types/types";

export default function ProgramsCard({
  image,
  title,
  message,
  link,
}: programsCardTypes) {
  const router = useRouter();
  return (
    <section className="border border-gray-200 rounded-2xl p-6 box-border relative flex flex-col gap-3 cursor-pointer">
      <div>
        <img src={image} alt={title} />
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-sm text-justify">{message}</p>
    </section>
  );
}
