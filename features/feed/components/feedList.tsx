import { ListItem } from "~/components/ListItem/listItem";
import {
	feedItem,
	feedList,
	feeds,
	headerAccent,
	title,
	ul,
} from "~/features/feed/components/featureList.css";
import { fetchRss, getSites } from "~/features/feed/store/rssStore";

const Feeds = async ({ url }: { url: string }): Promise<JSX.Element> => {
	const rss = await fetchRss(url);

	return (
		<ListItem>
			<h2 className={title}>
				<div className={headerAccent} />
				<a href={rss.url}>{rss.title.trim()}</a>
			</h2>
			<ul className={ul}>
				{rss.feeds.map((feed) => {
					return (
						<li className={feedItem} key={feed.title}>
							<a href={feed.url} target="_blank" rel="noreferrer">
								{feed.title}
							</a>
							{/* TODO: bookmarkButton */}
						</li>
					);
				})}
			</ul>
		</ListItem>
	);
};

export const FeedList = async (): Promise<JSX.Element> => {
	const sites = await getSites();

	return (
		<div className={feedList}>
			{sites.map((site) => {
				return (
					<div key={site.id}>
						<Feeds url={site.url} />
					</div>
				);
			})}
		</div>
	);
};
