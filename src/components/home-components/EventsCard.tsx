import Link from "next/link";
import { eventsType } from "../types/types";

export default function EventsCard({
  link,
  image,
  title,
  message,
}: eventsType) {
  return (
    <Link
      className="box-border flex flex-col gap-2.5 p-6 hover:bg-gray-200 rounded-xl"
      href={link}
    >
      <img src={image} alt={title} />
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-justify text-sm">{message}</p>
    </Link>
  );
}
