import { style } from "@vanilla-extract/css";
import { vars } from "~/app/theme.css";

export const button = style({
	backgroundColor: "transparent",
	border: "none",
	cursor: "pointer",
	fontSize: "2rem",
	padding: "0",
	":hover": {
		color: vars.color.accent,
	},
	color: vars.color.accent,
	userSelect: "none",
});
