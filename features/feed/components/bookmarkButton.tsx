"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { button } from "~/features/feed/components/bookmarkButton.css";
import {
	removeBookmarkFeed,
	saveBookmarkFeed,
} from "~/features/feed/store/command/rssCommandStore";
import { getBookmark } from "~/features/feed/store/query/rssQueryStore";

type BookmarkButtonProps = {
	siteId: string;
	description: string;
	title: string;
	link: string;
};

export const BookmarkButton = ({
	title,
	description,
	link,
	siteId,
}: BookmarkButtonProps) => {
	const [isBookmarked, setIsBookmarked] = useState(false);

	useEffect(() => {
		const fetchBookmark = async () => {
			try {
				const bookmark = await getBookmark({ siteId, link });
				setIsBookmarked(bookmark !== null);
			} catch (error) {
				console.error("Failed to fetch bookmark:", error);
			}
		};

		fetchBookmark();
	}, [siteId, link]);

	const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

		const bookmark = await getBookmark({ siteId, link });
		const isBookmarked = bookmark !== null;
		if (isBookmarked) {
			await removeBookmarkFeed({ id: bookmark.id });
			setIsBookmarked(false);
			return;
		}

		const newBookmark = await saveBookmarkFeed({
			title,
			description,
			link,
			siteId,
		});
		setIsBookmarked(true);
	};

	return (
		<button type="button" className={button} onClick={handleClick}>
			{isBookmarked ? "★" : "☆"}
		</button>
	);
};
