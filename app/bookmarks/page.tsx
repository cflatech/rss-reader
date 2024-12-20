import type { Metadata } from "next";
import { Header } from "~/components/Header/header";

export const metadata: Metadata = {
  title: "RSS Reader Bookmarks",
  description: "cflatech RSS Reader Bookmarks",
};

export default function Home() {
  return (
    <div>
      <main>
        <Header title="RSS Reader" />
      </main>
      <footer />
    </div>
  );
}
