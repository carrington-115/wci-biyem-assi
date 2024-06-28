"use client";
import Link from "next/link";
import { contentsLink } from "../data/data";
import { usePathname } from "next/navigation";

export default function ArticleContentsTable() {
  const pathname = usePathname();
  return (
    <section className="w-1/5 sticky top-32 flex flex-col gap-4 bg-zinc-900 text-white items-start justify-start box-border py-10 px-5 rounded-xl h-fit">
      <h2 className="text-2xl font-semibold">Table of Content</h2>
      <ul className="flex flex-col items-start leading-relaxed list-disc list-inside">
        {contentsLink.map(({ id, name }) => (
          <li>
            <Link href={`/aboutus#${id}`} className={`hover:underline`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
