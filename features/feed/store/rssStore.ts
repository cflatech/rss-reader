import type { Site } from "@prisma/client";
import { prisma } from "~/libs/prisma";
import { parser } from "~/libs/rssParser";

type Feed = {
	title: string;
	url: string;
	summary: string;
};

export const fetchFeeds = async (url: string): Promise<Feed[]> => {
	const data = await fetch(url, {
		cache: "no-store",
	});
	const text = await data.text();

	const feeds = await parser.parseString(text);

	return feeds.items.map((item) => {
		return {
			title: item.title ?? "",
			url: item.link ?? "",
			summary: item.summary ?? "",
		};
	});
};

export const getSites = async (): Promise<Omit<Site, "createdAt">[]> => {
	// const sites = await prisma.site.findMany();
	const sites = [
		{
			id: "1",
			title: "Google News",
			url: "https://news.google.com/rss",
		},
		{
			id: "2",
			title: "Yahoo! News",
			url: "https://news.yahoo.co.jp/rss/categories/it.xml",
		},
	];

	return sites;
};
