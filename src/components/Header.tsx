"use client";
import Link from "next/link";
import { tabLinks } from "./data/data";
import { linkListType } from "./types/types";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <header className="fixed top-0 z-50 w-screen flex justify-around items-center pt-10 pb-5 bg-gradient-to-b from-black to-transparent">
      <span className="cursor-pointer" onClick={() => router.push("/")}>
        <img src="/images/logo.svg" alt="logo" />
      </span>
      <ul className="flex gap-5">
        {tabLinks.map(({ name, link }: linkListType) => (
          <Link
            href={link}
            className={
              pathname === link
                ? "text-white text-base hover:text-white"
                : "text-gray-400 text-base hover:text-white"
            }
          >
            {name}
          </Link>
        ))}
      </ul>
    </header>
  );
}
