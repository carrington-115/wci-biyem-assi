import React from "react";
import AboutArticle from "./AboutArticle";
import ArticleContentsTable from "./ArticleContentsTable";
import { aboutPageArticles } from "../data/data";

function ArticlesSection() {
  return (
    <section className="w-screen flex justify-center gap-8 box-border bg-black py-20">
      <div className="w-3/5">
        {aboutPageArticles.map(({ id, images, title, bodyContent }) => (
          <AboutArticle
            key={id}
            id={id}
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
