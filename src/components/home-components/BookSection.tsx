"use client";

import { useRouter } from "next/navigation";
import { booksList } from "../data/data";

export default function BookSection() {
  const router = useRouter();
  return (
    <section className="w-screen box-border gap-8 flex flex-col items-center bg-zinc-100 text-blue-900 py-12">
      <h1 className="text-4xl font-bold">Get Empowered from Books</h1>
      <div className="w-4/5 grid grid-cols-4 gap-16">
        {booksList.map((url) => (
          <img src={url} alt="image book" />
        ))}
      </div>
      <button
        onClick={() => router.push("/spiritual-resources")}
        className="bg-blue-950 text-white text-base py-3 px-12 rounded-full"
      >
        Visit our bookstore
      </button>
    </section>
  );
}
