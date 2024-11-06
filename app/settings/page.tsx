import type { Metadata } from "next";
import { Header } from "~/components/Header/header";
import { BookmarkButtonAction } from "~/features/feed/components/bookmarkButtonAction";
import { SiteList } from "~/features/feed/components/siteList";

export const metadata: Metadata = {
	title: "RSS Reader Settings",
	description: "cflatech RSS Reader Settings",
};

export default function Home() {
	return (
		<div>
			<main>
				<Header title="RSS Reader" />
				<SiteList />
			</main>
			<footer />
		</div>
	);
}
