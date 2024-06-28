import React from "react";
import AboutArticle from "./AboutArticle";
import ArticleContentsTable from "./ArticleContentsTable";
import { aboutPageArticles } from "../data/data";

function ArticlesSection() {
  return (
    <section className="">
      <div>
        {aboutPageArticles.map(({ images, title, bodyContent }) => (
          <AboutArticle
            images={images}
            title={title}
            bodyContent={bodyContent}
          />
        ))}
      </div>
      <ArticleContentsTable />
    </section>
  );
}

export default ArticlesSection;
