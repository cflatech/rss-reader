"use client";
import { useActionState } from "react";
import { button } from "~/features/feed/components/bookmarkButtonAction.css";
import {
  removeBookmarkFeed,
  saveBookmarkFeed,
} from "~/features/feed/store/command/rssCommandStore";

type BookmarkButtonProps = {
  title: string;
  description: string;
  link: string;
  siteId: string;
  initialBookmarkId: string | null;
};

export const BookmarkButtonAction = ({
  title,
  description,
  link,
  siteId,
  initialBookmarkId,
}: BookmarkButtonProps) => {
  const [bookmarkId, changeBookmark, isPending] = useActionState(
    async (bookmarkId) => {
      if (bookmarkId) {
        await removeBookmarkFeed({ id: bookmarkId });
        return null;
      }

      const bookmark = await saveBookmarkFeed({
        title,
        description,
        link,
        siteId,
      });

      if (!bookmark) {
        console.error("Failed to save bookmark");
        return null;
      }

      return bookmark.id;
    },
    initialBookmarkId,
  );

  return (
    <form action={changeBookmark}>
      <button type="submit" className={button} disabled={isPending}>
        {isPending ? "☆" : bookmarkId ? "★" : "☆"}
      </button>
    </form>
  );
};
