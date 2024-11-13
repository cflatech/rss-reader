type Rss = {
  title: string;
  url: string;
  feeds: Feed[];
};

type Feed = {
  title: string;
  url: string;
  summary: string;
};

type Bookmark = {
  id: string;
  title: string;
  url: string;
  summary: string;
};

type Site = {
  id: string;
  url: string;
};
