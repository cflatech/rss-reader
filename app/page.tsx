import type { Metadata } from "next";
import { Header } from "~/components/Header/header";
import { FeedList } from "~/features/feed/components/feedList";

export const metadata: Metadata = {
	title: "RSS Reader",
	description: "cflatech RSS Reader",
};

export default function Home() {
	return (
		<div>
			<main>
				<Header title="RSS Reader" />
				<FeedList />
			</main>
			<footer />
		</div>
	);
}
