import { style } from "@vanilla-extract/css";
import { vars } from "~/app/theme.css";

export const item = style({
	padding: vars.space.large,
	backgroundColor: "white",
	borderRadius: vars.space.medium,
});

export const title = style({
	fontSize: vars.fontSize.large,
	marginTop: vars.space.medium,
	marginBottom: vars.space.medium,
});

export const headerAccent = style({
	width: 16,
	height: vars.fontSize.large,
	backgroundColor: "rgb(0, 181, 173)",
	display: "inline-block",
	marginRight: vars.space.medium,
	verticalAlign: -4,
	whiteSpace: "nowrap",
});
