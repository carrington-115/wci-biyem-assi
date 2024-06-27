export default function FirstTimerSection() {
  return (
    <section className="w-screen box-border flex justify-around bg-zinc-200 text-black pb-10">
      <div className="w-1/2 my-20 flex flex-col gap-5 items-start">
        <h2 className="text-4xl font-bold">Believers' Foundation Class</h2>
        <p className="text-xl font-medium text-justify">
          Are you a first timer or new member? Then this is your opportunity to
          join the Believers' Foundation class every
          <strong> Monday at 5pm</strong>. The Believers' Foundation Class is a
          gathering where you will be introduced to the foundations being a
          winner. You will learn about spiritual foundations like the essence of
          prayer, kingdom advancement endeavours and many other relevant topics.
        </p>
        <a href="" className="px-7 py-2 bg-black text-white rounded-full">
          Join our WhatsApp Community
        </a>
      </div>
      <div className="w-1/3">
        <img src="/images/first-timers.svg" alt="first timers image" />
      </div>
    </section>
  );
}
