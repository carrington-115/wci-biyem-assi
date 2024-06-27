"use client";

import { useRouter } from "next/navigation";

export default function TestimoniesComponent() {
  const router = useRouter();
  return (
    <section className="box-border w-screen flex justify-between items-center">
      <div className="w-2/5 box-border">
        <img
          className="w-full"
          src="/images/testimonies-image.svg"
          alt="testimonies image"
        />
      </div>
      <div className="w-7/12 box-border flex flex-col gap-4 pr-20 pl-6 items-start">
        <h1 className="font-bold text-5xl">Testimonies</h1>
        <p className="text-justify text-2xl text-light">
          Testimonies are spiritual arrows that have the ability to multiply
          your multiply and establish your testimonies. Testimonies are one of
          the learning foundations for winners. We have heard so many winners
          say "I heard the testimony that .......... and when I applied it to my
          life, the same testimony replicated. So testimonies do not only
          establish your success, they have the power to replicate in the life
          of another person. <br /> <br />
          You can share your testimonies with use by visiting clicking on the
          button below and filling the testimony form.
        </p>
        <button
          onClick={() => router.push("/testimonies")}
          className="bg-white text-black text-lg py-2 px-10 rounded-full font-medium"
        >
          Share your testimony
        </button>
      </div>
    </section>
  );
}
