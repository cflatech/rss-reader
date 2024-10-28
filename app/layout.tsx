import type { Metadata } from "next";
import "./globals.css";
import { theme } from "~/app/theme.css";
import { body } from "~/app/layout.css";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja" className={theme}>
			<body className={body}>{children}</body>
		</html>
	);
}
