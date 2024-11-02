import Head from "next/head";
import { FeedList } from "~/features/feed/components/feedList";

export default function Home() {
	return (
		<div>
			<Head>
				<title>RSS Reader</title>
				<meta name="description" content="cflatech RSS Reader" />
			</Head>
			<main>
				<FeedList />
			</main>
			<footer />
		</div>
	);
}
