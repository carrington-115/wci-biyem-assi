"use client";
import Link from "next/link";
import { tabLinks } from "./data/data";
import { linkListType } from "./types/types";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex justify-around items-center pt-10 pb-5 bg-gradient-to-b from-black to-transparent">
      <span>
        <img src="/images/logo.svg" alt="logo" />
      </span>
      <ul className="flex gap-5">
        {tabLinks.map(({ name, link }: linkListType) => (
          <Link
            href={link}
            className={
              pathname === link
                ? "text-white text-base"
                : "text-gray-400 text-base"
            }
          >
            {name}
          </Link>
        ))}
      </ul>
    </header>
  );
}
