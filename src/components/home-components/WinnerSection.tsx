"use client";
import { useRouter } from "next/navigation";

export default function WinnerSection() {
  const router = useRouter();
  return (
    <section className="w-screen box-border flex justify-between items-center bg-red-100">
      <div className="flex flex-col pl-16 items-start text-red-950 w-1/2 gap-5 border">
        <h1 className="font-bold text-3xl">Who is a Winner?</h1>
        <p className="font-medium text-xl text-justify">
          A winner is an embodiment and representative of Jesus on the earth
          with the purpose to rule and have dominion over everything, both
          physical and spiritually. At Winners' Chapel world wide, being a
          winner means you start excelling in every area that you have been
          failing. From countless testimonies to life changing encounters you
          will experience how following divine direction has changed the lives
          of every member at winners' chapel Biyem-assi. If you are reading this
          and you are not yet a part of winners' chapel, take this opportunty
          and join us for our upcoming services
        </p>
        <button
          className="bg-red-950 text-white px-8 py-3 rounded-md"
          onClick={() => router.push("/programs")}
        >
          Check our upcoming Services
        </button>
      </div>
      <div className="w-2/5 border">
        <img
          src="/images/home-winner-image.svg"
          alt="hoome winner image"
          className="w-full"
        />
      </div>
    </section>
  );
}
