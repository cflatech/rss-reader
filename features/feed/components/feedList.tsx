import { fetchFeeds, getSites } from "~/features/feed/store/rssStore";

const Feeds = async ({ url }: { url: string }): Promise<JSX.Element> => {
	const feeds = await fetchFeeds(url);

	return (
		<ul>
			{feeds.map((feed) => {
				return (
					<li key={feed.title}>
						<a href={feed.url} target="_blank" rel="noreferrer">
							{feed.title}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export const FeedList = async (): Promise<JSX.Element> => {
	const sites = await getSites();

	return (
		<div>
			{sites.map((site) => {
				return (
					<div key={site.id}>
						<h2>{site.title}</h2>
						<Feeds url={site.url} />
					</div>
				);
			})}
		</div>
	);
};
