import { aboutArticleType } from "../types/types";

export default function AboutArticle({
  images,
  title,
  bodyContent,
}: aboutArticleType) {
  return (
    <section className="w-full flex justify-between mb-10">
      <div className="w-1/3 flex flex-col gap-5">
        {images.map((image) => (
          <div>
            <img src={image} alt="article image" />
          </div>
        ))}
      </div>
      <div className="w-3/5">
        <h1 className="mb-10 font-bold text-2xl">{title}</h1>
        {bodyContent.map((content) => (
          <p className="text-justify font-medium mb-5">
            &nbsp;&nbsp;&nbsp;&nbsp;{content}
          </p>
        ))}
      </div>
    </section>
  );
}
