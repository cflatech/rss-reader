import { style } from "@vanilla-extract/css";
import { vars } from "~/app/theme.css";

export const feedList = style({
	margin: vars.space.large,
});

export const ul = style({
	listStyleType: "none",
	paddingInlineStart: 0,
});

export const cardElement = style({
	display: "grid",
	gridTemplateColumns: "1fr 2rem",
});

export const link = style({
	color: vars.color.text,
	textDecoration: "none",
});
