export default function PrayerFormComponent() {
  return (
    <section className="w-screen flex justify-center bg-zinc-900 text-white py-20 gap-24 box-border">
      <div className="flex flex-col items-start gap-10 w-1/3 text-lg">
        <h2 className="text-4xl font-bold">Submit a Prayer Request</h2>
        <div className="flex w-fit justify-between items-start gap-10 text-lg">
          <span className="w-6 h-6">
            <img
              className="w-full h-full"
              src="/images/icons/location.svg"
              alt="location"
            />
          </span>
          <p className="w-full pr-5 box-border">
            Yaounde, Centre Biyem-assi, Acacia Beside Somatel Hotel entrance,
            Before Carrefour Biyem-Assi
          </p>
        </div>
        <div className="flex w-fit justify-between items-start gap-10 text-lg">
          <span className="w-6 h-6">
            <img
              className="w-full h-full"
              src="/images/icons/call.svg"
              alt="call"
            />
          </span>
          <p className="leading-relaxed">
            (237) 678 998 893 <br /> (237) 678 998 893 <br />
            (237) 678 998 893
          </p>
        </div>
        <button className="flex gap-3 items-center px-4 py-2 bg-white text-black rounded-full">
          <span className="w-6 h-6">
            <img
              src="/images/icons/google-maps-location.svg"
              alt="location"
              className="w-full h-full"
            />
          </span>
          <p className="font-medium">Open location on Google Maps</p>
        </button>
      </div>
      <form
        action=""
        onSubmit={(e) => e.preventDefault}
        className="w-2/5 flex flex-col items-center justify-center box-border h-fit px-10 py-16 gap-5 rounded-2xl border text-white"
      >
        <input
          className="w-full bg-transparent border rounded-md box-border px-4 py-3 placeholder:text-white"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="w-full bg-transparent border rounded-md box-border px-4 py-3 placeholder:text-white"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          className="w-full bg-transparent border rounded-md box-border px-4 py-3 placeholder:text-white"
          type="tel"
          placeholder="Phone"
          name="phone"
        />
        <textarea
          className="w-full bg-transparent border rounded-md box-border px-4 py-3 placeholder:text-white"
          name="message"
          placeholder="Message"
          rows={8}
        ></textarea>
        <button
          className="bg-white text-black px-10 py-2 rounded-full font-bold"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
