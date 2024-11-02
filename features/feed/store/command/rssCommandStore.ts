"use server";
import { prisma } from "~/libs/prisma";

type saveBookmarkProps = {
	siteId: string;
	description: string;
	title: string;
	link: string;
};

export const saveBookmarkFeed = async ({
	title,
	description,
	link,
	siteId,
}: saveBookmarkProps): Promise<Bookmark | null> => {
	try {
		const feed = await prisma.feed.create({
			data: {
				siteId,
				title,
				description,
				link,
			},
		});

		return {
			id: feed.id,
			title: feed.title,
			url: feed.link,
			summary: feed.description,
		};
	} catch (e) {
		console.error(e);
		return null;
	}
};

type removeBookmarkProps = {
	id: string;
};

export const removeBookmarkFeed = async ({
	id,
}: removeBookmarkProps): Promise<boolean> => {
	try {
		await prisma.feed.delete({
			where: {
				id,
			},
		});

		return true;
	} catch (e) {
		console.error(e);
		return false;
	}
};
