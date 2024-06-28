"use client";
import { useEffect, useState } from "react";
import { aboutArticleType } from "../types/types";

export default function AboutArticle({
  images,
  title,
  bodyContent,
  id,
}: aboutArticleType) {
  const [learnMore, setLearnMore] = useState<boolean>(false);
  const [temporaryArticle, setTemporaryArticle] = useState<string[]>([]);

  function handleLearnMoreAction() {
    setLearnMore(true);
  }

  useEffect(() => {
    if (!learnMore) {
      for (let i = 0; i < bodyContent.length - 1; i++) {
        setTemporaryArticle((prev) => {
          return [...prev, bodyContent[i]];
        });
      }
    } else {
      for (let i = 0; i < bodyContent.length - 1; i++) {
        setTemporaryArticle((prev) => {
          return [...prev, bodyContent[i]];
        });
      }
    }
  }, []);

  return (
    <section className="w-full flex justify-between mb-10">
      <div className="w-1/3 flex flex-col gap-5">
        {images.map((image) => (
          <div>
            <img src={image} alt="article image" />
          </div>
        ))}
      </div>
      <div className="w-3/5 relative" id={id}>
        {!learnMore && (
          <div className="absolute z-10 h-full w-full top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent flex justify-center items-end box-border pb-7">
            <button
              onClick={handleLearnMoreAction}
              className="flex box-border bg-white text-black font-semibold px-6 py-1 rounded-full gap-2 justify-center items-center"
            >
              <p>Learn more</p>
              <span>
                <img src="/images/icons/learn-more.svg" alt="learn more icon" />
              </span>
            </button>
          </div>
        )}
        <h1 className="mb-10 font-bold text-2xl">{title}</h1>
        {learnMore
          ? bodyContent.map((content) => (
              <p className="text-justify font-medium mb-5">
                &nbsp;&nbsp;&nbsp;&nbsp;{content}
              </p>
            ))
          : temporaryArticle.map((content) => (
              <p className="text-justify font-medium mb-5">
                &nbsp;&nbsp;&nbsp;&nbsp;{content}
              </p>
            ))}
      </div>
    </section>
  );
}
