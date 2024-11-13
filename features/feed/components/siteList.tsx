import { Item } from "~/components/Item/item";
import {
  input,
  item,
  list,
  siteList,
} from "~/features/feed/components/siteList.css";
import { getSites } from "~/features/feed/store/query/rssQueryStore";

export const SiteList = async (): Promise<JSX.Element> => {
  const sites = await getSites();

  // todo: validation
  // todo: save

  return (
    <div className={siteList}>
      <Item>
        <Item.Title>RSSサイト一覧</Item.Title>
        <Item.Body>
          <ul className={list}>
            {sites.map((site) => {
              return (
                <li className={item} key={site.id}>
                  <input
                    className={input}
                    type="text"
                    defaultValue={site.url}
                  />
                </li>
              );
            })}
          </ul>
        </Item.Body>
      </Item>
    </div>
  );
};
