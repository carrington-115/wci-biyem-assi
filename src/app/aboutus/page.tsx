import TopPageComponent from "@/components/TopPageComponent";

export default function Page() {
  return (
    <>
      <TopPageComponent
        image="/images/aboutus/top-image.svg"
        children={
          <div className="flex flex-col items-center text-white w-4/5">
            <div className="flex items-end gap-5">
              <span className="w-24 h-2 bg-white" />
              <h1 className="font-bold text-5xl">The Mandate</h1>
              <span className="w-24 h-2 bg-white" />
            </div>
            <blockquote className="text-2xl mt-3 font-semibold text-center">
              "And now the Hour has come to liberate mankind from every
              operation of the devil and I am sending you to undertake this task
              through the preaching of the word of Faith."
            </blockquote>
          </div>
        }
      />
      <div>
        <h1>Hello world</h1>
      </div>
    </>
  );
}
