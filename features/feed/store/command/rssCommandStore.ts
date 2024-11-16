"use server";
import { z } from "zod";
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

export const updateSites = async ({
  urls,
}: { urls: string[] }): Promise<Site[]> => {
  const parsedUrls = z.array(z.string().url()).parse(urls);

  return await prisma.$transaction(async (tx) => {
    await tx.site.deleteMany();
    const sites = await tx.site.createManyAndReturn({
      data: [
        ...parsedUrls.map((url) => ({
          url,
        })),
      ],
    });

    return sites.map((site) => ({
      id: site.id,
      url: site.url,
    }));
  });
};
