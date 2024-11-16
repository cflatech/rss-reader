"use client";

import { createId } from "@paralleldrive/cuid2";
import {
  ChangeEvent,
  useActionState,
  useCallback,
  useState,
  useTransition,
} from "react";
import { z } from "zod";
import { Item } from "~/components/Item/item";
import {
  input,
  item,
  list,
  siteList,
} from "~/features/feed/components/siteList.css";
import { updateSites } from "~/features/feed/store/command/rssCommandStore";

type SiteListActionProps = {
  initialSites: { id: string; url: string }[];
};

export const SiteListAction = ({
  initialSites,
}: SiteListActionProps): JSX.Element => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(sites);
    const parsedUrls = z
      .array(z.string().url())
      .safeParse(sites.map((site) => site.url));

    console.log(parsedUrls);
    if (!parsedUrls.success) {
      return sites;
    }
    await updateSites({ urls: parsedUrls.data });
  };

  const [sites, setSites] = useState<Site[]>(initialSites);
  const addSite = () => {
    setSites([...sites, { id: createId(), url: "" }]);
  };

  const removeSite = () => {
    setSites(sites.slice(0, sites.length - 1));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    setSites(
      sites.map((site) => {
        if (site.id === id) {
          return { ...site, url: e.target.value };
        }
        return site;
      }),
    );
  };

  return (
    <div className={siteList}>
      <Item>
        <Item.Title>RSSサイト一覧</Item.Title>
        <Item.Body>
          <form onSubmit={handleSubmit}>
            <ul className={list}>
              {sites.map((site) => {
                return (
                  <li className={item} key={site.id}>
                    <input
                      name="url"
                      className={input}
                      type="text"
                      defaultValue={site.url}
                      onChange={(e) => handleChange(e, site.id)}
                    />
                  </li>
                );
              })}
              <li className={item}>
                <button type="button" onClick={addSite}>
                  追加
                </button>
                <button type="button" onClick={removeSite}>
                  削除
                </button>
                <button type="submit">保存</button>
              </li>
            </ul>
          </form>
        </Item.Body>
      </Item>
    </div>
  );
};
