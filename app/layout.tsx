import "./globals.css";
import { theme } from "~/app/theme.css";
import { body } from "~/app/layout.css";
import { Header } from "~/components/Header/header";

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
