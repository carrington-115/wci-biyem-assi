import { aboutArticleType } from "../types/types";

export default function AboutArticle({
  images,
  title,
  bodyContent,
}: aboutArticleType) {
  return (
    <section>
      <div>
        {images.map((image) => (
          <div>
            <img src={image} alt="article image" />
          </div>
        ))}
      </div>
      <div>
        <h1>{title}</h1>
        {bodyContent.map((content) => (
          <p>{content}</p>
        ))}
      </div>
    </section>
  );
}
