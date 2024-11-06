import { Item } from "~/components/Item/item";
import { siteList } from "~/features/feed/components/siteList.css";
import { getSites } from "~/features/feed/store/query/rssQueryStore";

export const SiteList = async (): Promise<JSX.Element> => {
	const sites = await getSites();

	return (
		<div className={siteList}>
			<Item>
				<Item.Body>
					<ul>
						{sites.map((site) => {
							return <li key={site.id}>{site.url}</li>;
						})}
					</ul>
				</Item.Body>
			</Item>
		</div>
	);
};
