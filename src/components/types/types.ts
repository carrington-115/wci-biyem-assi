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
  id: string;
  images: string[];
  title: string;
  bodyContent: string[];
}

interface contentLinkTypes {
  id: string;
  name: string;
}

export type {
  linkListType,
  programsCardTypes,
  eventsType,
  aboutArticleType,
  contentLinkTypes,
};
