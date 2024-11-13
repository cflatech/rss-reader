import { Suspense } from "react";
import { Card } from "~/components/Card/card";
import { Item } from "~/components/Item/item";
import { BookmarkButton } from "~/features/feed/components/bookmarkButton";
import { BookmarkButtonAction } from "~/features/feed/components/bookmarkButtonAction";
import {
  link,
  cardElement,
  feedList,
  ul,
  siteList,
} from "~/features/feed/components/featureList.css";
import { fetchRss, getSites } from "~/features/feed/store/query/rssQueryStore";

const Feeds = async ({
  siteId,
  url,
}: { siteId: string; url: string }): Promise<JSX.Element> => {
  const rss = await fetchRss(url);

  return (
    <Item>
      <Item.Title>
        <a className={link} href={rss.url}>
          {rss.title.trim()}
        </a>
      </Item.Title>
      <Item.Body>
        <ul className={ul}>
          {rss.feeds.map((feed) => {
            return (
              <li key={feed.title}>
                <Card>
                  <div className={cardElement}>
                    <a
                      className={link}
                      href={feed.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div>
                        <Card.Body>{feed.title}</Card.Body>
                      </div>
                    </a>
                    <BookmarkButton
                      title={feed.title}
                      description={feed.summary}
                      link={feed.url}
                      siteId={siteId}
                    />
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
      </Item.Body>
    </Item>
  );
};

export const FeedList = async (): Promise<JSX.Element> => {
  const sites = await getSites();

  return (
    <div className={feedList}>
      {sites.map((site) => {
        return (
          <div key={site.id} className={siteList}>
            <Feeds url={site.url} siteId={site.id} />
          </div>
        );
      })}
    </div>
  );
};
