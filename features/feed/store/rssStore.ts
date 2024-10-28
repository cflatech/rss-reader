import type { Site } from "@prisma/client";
import { prisma } from "~/libs/prisma";
import { parser } from "~/libs/rssParser";

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

export const fetchRss = async (url: string): Promise<Rss> => {
	const data = await fetch(url, {
		cache: "no-store",
	});
	const text = await data.text();

	const feeds = await parser.parseString(text);

	return {
		title: feeds.title ?? "",
		url: feeds.link ?? "",
		feeds: feeds.items.slice(0, 10).map((item) => {
			return {
				title: item.title ?? "",
				url: item.link ?? "",
				summary: item.summary ?? "",
			};
		}),
	};
};

export const getSites = async (): Promise<Omit<Site, "createdAt">[]> => {
	// const sites = await prisma.site.findMany();
	const sites = [
		{
			id: "1",
			url: "https://news.google.com/rss",
		},
		{
			id: "2",
			url: "https://news.yahoo.co.jp/rss/categories/it.xml",
		},
	];

	return sites;
};
