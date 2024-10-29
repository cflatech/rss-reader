import { style } from "@vanilla-extract/css";
import { vars } from "~/app/theme.css";

export const ul = style({});

export const feedItem = style({
	padding: vars.space.small,
	border: `1px solid ${vars.color.main}`,
	borderRadius: vars.space.medium,
	margin: vars.space.small,
});

export const feedList = style({
	margin: vars.space.large,
});
