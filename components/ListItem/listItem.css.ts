import { style } from "@vanilla-extract/css";
import { vars } from "~/app/theme.css";

export const listItem = style({
	padding: vars.space.large,
	backgroundColor: "white",
	borderRadius: vars.space.medium,
	margin: vars.space.medium,
});
