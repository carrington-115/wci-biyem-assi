interface linkListType {
  name: string;
  link: string;
}

interface programsCardTypes {
  image: string;
  title: string;
  message: string;
  link: string;
}

interface eventsType {
  link: string;
  image: string;
  title: string;
  message: string;
}

interface aboutArticleType {
  images: string[];
  title: string;
  bodyContent: string[];
}

export type { linkListType, programsCardTypes, eventsType, aboutArticleType };
