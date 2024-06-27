export default function SubscribeSection() {
  return (
    <section className="w-screen box-border text-white flex justify-center py-24 gap-24">
      <div className="flex flex-col items-start gap-7 w-2/5">
        <h2 className="text-4xl font-bold">Join our Newsletter</h2>
        <p className="text-xl">
          Fill the form to subscribe to our newsletter to get weekly reminder of
          our programs, announcements, and fellow sessions.
        </p>
      </div>
      <form
        action=""
        onSubmit={(e) => e.preventDefault}
        className="flex flex-col gap-7 w-1/3 items-center"
      >
        <input
          className="w-full box-border border bg-transparent text-white placeholder:text-white px-4 py-2 rounded-md"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="w-full box-border border bg-transparent text-white placeholder:text-white px-4 py-2 rounded-md"
          type="email"
          name="email"
          placeholder="Email"
        />
        <button
          type="submit"
          className="bg-white text-black font-semibold px-10 py-2 rounded-full"
        >
          Subscribe to our Newsletter
        </button>
      </form>
    </section>
  );
}
