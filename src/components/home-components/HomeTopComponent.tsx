"use client";
import { useRouter } from "next/navigation";
import TopPageComponent from "../TopPageComponent";

export default function HomeTopComponent() {
  const router = useRouter();
  return (
    <>
      <TopPageComponent
        image="/images/image-1.png"
        children={
          <div className="w-1/2 flex flex-col items-center">
            <h1 className="font-sans font-bold text-5xl text-center leading-tight">
              Join us Every Sunday for a Impactful Service
            </h1>
            <p className="underline text-base font-medium mt-2">
              @Winners' Chapel International Biyem Assi
            </p>
            <div className="w-full flex justify-center mt-5 gap-40">
              <button
                className="bg-white text-red-800 font-bold px-6 py-2 rounded-md"
                onClick={() => router.push("/programs")}
              >
                Our programs
              </button>
              <button
                className="bg-white text-blue-800 font-bold px-6 py-2 rounded-md"
                onClick={() => router.push("/aboutus")}
              >
                The liberation mandate
              </button>
            </div>
          </div>
        }
      />
    </>
  );
}
