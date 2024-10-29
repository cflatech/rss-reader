import { style } from "@vanilla-extract/css";
import { vars } from "~/app/theme.css";

export const item = style({
	padding: vars.space.large,
	backgroundColor: "white",
	borderRadius: vars.space.medium,
	margin: vars.space.medium,
});

export const title = style({
	fontSize: "2rem",
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
