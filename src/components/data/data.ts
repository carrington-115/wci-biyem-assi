import {
  aboutArticleType,
  contentLinkTypes,
  linkListType,
} from "../types/types";

const tabLinks: linkListType[] = [
  { name: "Home", link: "/" },
  { name: "About us", link: "/aboutus" },
  { name: "Programs", link: "/programs" },
  { name: "Kingdom service", link: "/kingdom-service" },
  { name: "Spiritual resources", link: "spiritual-resources" },
  { name: "Testimonies", link: "/testimonies" },
  { name: "Contact us", link: "/contact-us" },
];

const booksList: string[] = [
  "/images/home-books/books-1.svg",
  "/images/home-books/books-2.svg",
  "/images/home-books/books-3.svg",
  "/images/home-books/books-4.svg",
];

const aboutPageArticles: aboutArticleType[] = [
  {
    id: "article-1",
    images: [
      "/images/aboutus/article01/image-1.svg",
      "/images/aboutus/article01/image-2.svg",
      "/images/aboutus/article01/image-3.svg",
    ],
    title: "About LFC, Winners' Chapel Worldwide, and David Oyedepo Ministries",
    bodyContent: [
      `The beginning of the church manifested on May 2, 1981, when David Oyedepo (aged 26) had a spiritual encounter while lodging in one of the rooms within the International Hotel located in the Omi-Asoro Quarters of Ilesa city, in the present day Osun State of Nigeria where he had an 18-hour vision, and God spoke to him saying,  "Now the hour has come to liberate the world from all oppressions of the devil, through the preaching of the Word of faith; and I am sending you to undertake this task". In 1983, the church began operating with four members on December 11.`,
      `On 1998, David Oyedepo set forth to build a new building to accommodate the increasing number of worshippers. This resulted in the Ministry’s acquisition of the initial 530-acre (2.1 km2) facility, known as Canaanland, which serves as the headquarters of the Ministry. It is the home of the 50,000-seat capacity auditorium, the ‘Faith Tabernacle’, which is reputed to be the largest Church auditorium in the world; a feat also recorded in the Guinness Book of Records.`,
      `The speed of the construction of Faith Tabernacle was breath taking, considering the size of the building. Construction of this gigantic project was completed within 12 months, which experts claim could only have been a miracle, because such a project should normally take a minimum of three years to complete. To the glory of God, this building was built debt-free. This 50,000-seat edifice was dedicated on September 18, 1999.`,
      `Canaanland is in Ota, a suburb of Lagos and is a 10,500-acre (42 km2) campus that houses the 50,000-seat church building, the church secretariat, the church’s youth chapel, a primary school called Kingdom Heritage Model School, a full boarding mission secondary school called Faith Academy with over 1,500 students, and Covenant University which accommodates over 7,000 students, fully resident in ultra-modern hostel facilities, with fully equipped faculty buildings and numerous staff housing facilities.  Canaanland also houses the Canaancity estate, other establishments operated by the church such as a bakery, a bottled water processing plant, petrol stations, various restaurants and shopping stores, several residential houses that provide for the over 2,000 church employees, and guest houses. Four banks are also located in this estate, three of which are branches of external commercial banks and one which is a community and micro-finance bank operated by the Church.`,
    ],
  },
  {
    id: "article-2",
    images: [
      "/images/aboutus/article02/image-1.svg",
      "/images/aboutus/article02/image-2.svg",
      "/images/aboutus/article02/image-3.svg",
      "/images/aboutus/article02/image-4.svg",
    ],
    title: "About David O. Oyedepo",
    bodyContent: [
      `On September 27, 1954, Bishop David Olaniyi Oyedepo, a native of Omu-Aran, Kwara State, Nigeria, was born in Osogbo into a religiously mixed family. His father, Ibrahim, was a Muslim healer, while his mother, Dorcas, was a member of the Eternal Order of the Cherubim and Seraphim Movement (C&S), a branch of the Aladura Movement in Nigeria. He was raised by his grandmother in Osogbo, who inculcated in him the virtues of Christian life through the early morning prayers which he attended with her. She also taught him the importance of tithing and other basic Christian virtues.`,
      `David Oyedepo was “born again” in 1969 through the influence of his former teacher, Ms. Betty Lasher, who took special interest in him during his high school days. He studied Architecture at Kwara State Polytechnic, Ilorin and worked briefly with the Federal Ministry of Housing in Ilorin before resigning to concentrate on missionary work.  David Oyedepo also earned a Ph.D. in Human Development from Honolulu University, Hawaii, United States of America.`,
      `Bishop David O. Oyedepo received a call into the ministry through a heavenly vision, where he saw a lineup of battered, beaten, tattered, deformed, groaning for escape, he began sobbing with the. In response to his question, ‘but why Lord?’ God answered, “But from the beginning it was not so, and now the hour has come to liberate the whole world from all oppression of the devil through the preaching of the world of faith and I AM sending you to undertake this task.”`,
      `Today, he stands as an Apostle of Faith to the nations, the impact of whose ministry has continued to spread across many nations of the world. As an accomplished author, he has written over 100 titles, which circulates both in hard and online stores around the world. A number of these titles have been translated to other major languages of the world including French, Chinese, Spanish and others He is the Founder and President of Living Faith Church worldwide, aka Winners’ Chapel International and presently oversees over 21,000 churches across Nigeria and several thousand across six major continents of the world.`,
      `He is the founding and Senior Pastor of the Faith Tabernacle, Canaanland Ota, Nigeria, the international Headquarter of the Church, which is reputed to be the largest single congregation in the world As a leader of renown, he has redefined leadership as an evolution of values. Today, he is spearheading a revolution in education across the nation, through his network of primary and secondary across the nation and the establishment of two thriving universities, namely, Covenant university, Ota, Lagos and Landmark University Omuaran, Kwara State, both in Nigeria. David Oyedepo is an acclaimed author and publisher who has written over 70 titles apart from periodicals.  He is also Chairman/Publisher of Dominion Publishing House (DPH), a publishing arm of his ministry.  DPH has over 4 million prints in circulation to date. Through God’s grace upon him, Covenant University, Landmark University, Faith Academy and Kingdom Heritage Model Schools have been established to equip the youth for impact.`,
    ],
  },
  {
    id: "article-3",
    images: [
      "/images/aboutus/article03/image-1.svg",
      "/images/aboutus/article03/image-2.svg",
      "/images/aboutus/article03/image-3.svg",
    ],
    title: "About Winners Chapel International, Biyem-Assi",
    bodyContent: [
      `The beginning of the church manifested on May 2, 1981, when David Oyedepo (aged 26) had a spiritual encounter while lodging in one of the rooms within the International Hotel located in the Omi-Asoro Quarters of Ilesa city, in the present day Osun State of Nigeria where he had an 18-hour vision, and God spoke to him saying,  "Now the hour has come to liberate the world from all oppressions of the devil, through the preaching of the Word of faith; and I am sending you to undertake this task". In 1983, the church began operating with four members on December 11.`,
      `On 1998, David Oyedepo set forth to build a new building to accommodate the increasing number of worshippers. This resulted in the Ministry’s acquisition of the initial 530-acre (2.1 km2) facility, known as Canaanland, which serves as the headquarters of the Ministry. It is the home of the 50,000-seat capacity auditorium, the ‘Faith Tabernacle’, which is reputed to be the largest Church auditorium in the world; a feat also recorded in the Guinness Book of Records.`,
      `The speed of the construction of Faith Tabernacle was breath taking, considering the size of the building. Construction of this gigantic project was completed within 12 months, which experts claim could only have been a miracle, because such a project should normally take a minimum of three years to complete. To the glory of God, this building was built debt-free. This 50,000-seat edifice was dedicated on September 18, 1999.`,
      `Canaanland is in Ota, a suburb of Lagos and is a 10,500-acre (42 km2) campus that houses the 50,000-seat church building, the church secretariat, the church’s youth chapel, a primary school called Kingdom Heritage Model School, a full boarding mission secondary school called Faith Academy with over 1,500 students, and Covenant University which accommodates over 7,000 students, fully resident in ultra-modern hostel facilities, with fully equipped faculty buildings and numerous staff housing facilities.  Canaanland also houses the Canaancity estate, other establishments operated by the church such as a bakery, a bottled water processing plant, petrol stations, various restaurants and shopping stores, several residential houses that provide for the over 2,000 church employees, and guest houses. Four banks are also located in this estate, three of which are branches of external commercial banks and one which is a community and micro-finance bank operated by the Church.`,
    ],
  },
];

const contentsLink: contentLinkTypes[] = [
  { id: "article-1", name: "About WCI and LFC" },
  { id: "article-2", name: "About David O. Oyedepo" },
  { id: "article-3", name: "About WCI Biyem-Assi" },
];

export { tabLinks, booksList, aboutPageArticles, contentsLink };
