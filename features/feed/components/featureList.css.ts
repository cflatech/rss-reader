import { style } from "@vanilla-extract/css";
import { vars } from "~/app/theme.css";

export const ul = style({});

export const feeds = style({
	padding: vars.space.large,
	backgroundColor: "white",
	borderRadius: vars.space.medium,
	margin: vars.space.medium,
});

export const feedItem = style({
	padding: vars.space.small,
	border: `1px solid ${vars.color.main}`,
	borderRadius: vars.space.medium,
	margin: vars.space.small,
});

export const headerAccent = style({
	width: 16,
	height: 32,
	backgroundColor: "rgb(0, 181, 173)",
	display: "inline-block",
	marginRight: vars.space.medium,
	verticalAlign: -6,
	whiteSpace: "nowrap",
});

export const title = style({
	fontSize: "2rem",
});

export const feedList = style({
	margin: vars.space.large,
});
