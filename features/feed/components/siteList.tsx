import { SiteListAction } from "~/features/feed/components/siteListAction";
import { getSites } from "~/features/feed/store/query/rssQueryStore";

export const SiteList = async (): Promise<JSX.Element> => {
  const sites = await getSites();

  // todo: validation
  // todo: save

  return <SiteListAction initialSites={sites} />;
};
