"use client";
export default function CommunitySection() {
  return (
    <section className="w-screen bg-red-100 flex justify-center gap-14 text-black py-20">
      <div className="w-2/5 flex flex-col gap-7 items-start">
        <h1 className="font-bold text-5xl text-red-950 leading-tight">
          Join the Community of Winners
        </h1>
        <ol className="flex flex-col items-start gap-5 list-decimal list-outside text-lg font-medium ml-7">
          <li>
            <h2>
              <strong>Visit us every Sunday</strong>
            </h2>
            <ul>
              <li>First Service: 7:00 am - 9:15 am </li>
              <li>Second Service: 9:15 am - 11:15 am </li>
              <li>Third Service: 11:15 am - 1:00 am </li>
            </ul>
          </li>
          <li>
            <strong>Join us every Wednesday</strong> (5:00 pm - 7:00 pm)
          </li>
          <li>
            Join us every morning for our{" "}
            <strong>Covenant Hour of Prayers</strong> (6:00 am - 7:00 am)
          </li>
        </ol>
        <button className="bg-red-950 text-white px-6 py-2 rounded-full">
          Check our weekly programs
        </button>
      </div>
      <div className="w-2/5">
        <img src="/images/community-image.svg" alt="community image" />
      </div>
    </section>
  );
}
