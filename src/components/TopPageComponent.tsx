import React from "react";

export default function TopPageComponent({
  image,
  children,
}: {
  image: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative w-screen box-border overflow-hidden">
      <div className="box-border w-full h-auto">
        <img
          src={image}
          alt="top page component"
          className="box-border w-full"
        />
      </div>
      <div>
        <div className="absolute z-1 top-0 bottom-0 box-border w-screen h-full bg-gray-900 opacity-50"></div>
        <div className="absolute top-0 w-screen h-full z-2 bg-gradient-to-b from-gray-950 from-10% via-transparent to-gray-950"></div>
      </div>
      <div className="absolute w-full flex justify-center bottom-20 z-10">
        {children}
      </div>
    </section>
  );
}
