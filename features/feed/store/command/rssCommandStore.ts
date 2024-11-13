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

type removeBookmarkProps =
  | removeBookmarkWithIdProps
  | removeBookmarkWithSiteProps;

type removeBookmarkWithIdProps = {
  id: string;
};
type removeBookmarkWithSiteProps = {
  siteId: string;
  link: string;
};

const hasId = (
  props: removeBookmarkProps,
): props is removeBookmarkWithIdProps => "id" in props;

export const removeBookmarkFeed = async (
  props: removeBookmarkProps,
): Promise<boolean> => {
  if (hasId(props)) {
    try {
      await prisma.feed.delete({
        where: {
          id: props.id,
        },
      });

      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  } else {
  }

  const { siteId, link } = props;
  try {
    await prisma.feed.delete({
      where: {
        siteId_link: {
          siteId,
          link,
        },
      },
    });

    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};
