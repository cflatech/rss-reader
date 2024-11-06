import { BookmarkButtonAction } from "~/features/feed/components/bookmarkButtonAction";
import { getBookmark } from "~/features/feed/store/query/rssQueryStore";

type BookmarkButtonProps = {
	title: string;
	description: string;
	link: string;
	siteId: string;
};

export const BookmarkButton = async ({
	title,
	description,
	link,
	siteId,
}: BookmarkButtonProps) => {
	const bookmarkId = (await getBookmark({ siteId, link }))?.id ?? null;

	return (
		<BookmarkButtonAction
			title={title}
			description={description}
			link={link}
			siteId={siteId}
			initialBookmarkId={bookmarkId}
		/>
	);
};
