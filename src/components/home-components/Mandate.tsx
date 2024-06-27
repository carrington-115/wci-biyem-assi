"use client";

import { useRouter } from "next/navigation";

export default function Mandate() {
  const router = useRouter();
  return (
    <section className="w-full container box-border flex justify-between items-center">
      <div className="w-2/5 box-border">
        <img
          src="/images/home-mandate-image.svg"
          alt="mandate image"
          className="w-full"
        />
      </div>
      <div className="w-1/2 flex flex-col items-start gap-7">
        <blockquote className="font-medium text-4xl inline-flex flex-col leading-tight gap-7">
          "And now the Hour has come to liberate mankind from every operation of
          the devil and I am sending you to undertake this task through the
          preaching of the word of Faith."
          <strong>
            <em>- Bishop David O. Oyedepo</em>
          </strong>
        </blockquote>
        <button
          onClick={() => router.push("/aboutus")}
          className="bg-white text-blue-800 text-lg font-medium px-8 py-2 rounded-full self-end hover:font-bold"
        >
          About us
        </button>
      </div>
    </section>
  );
}
