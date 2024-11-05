import { style } from "@vanilla-extract/css";
import { vars } from "~/app/theme.css";

export const header = style({
	backgroundColor: vars.color.main,
	padding: vars.space.large,
	display: "flex",
	alignItems: "center",
	position: "sticky",
	top: 0,
	zIndex: vars.layer.menu,
});

export const button = style({
	cursor: "pointer",
});

export const h1 = style({
	marginRight: vars.space.large,
	marginLeft: vars.space.large,
});

export const menu = style({
	position: "absolute",
	width: "100%",
	height: "100%",
	pointerEvents: "none",
});

export const menuBackground = style({
	position: "absolute",
	width: "100%",
	height: "100%",
	top: 0,
	opacity: 0,
	backgroundColor: "black",
	visibility: "hidden",
	transition: "opacity 0.1s ease-in-out, visibility 0.2s ease-in-out",
});

export const menuBackgroundVisible = style({
	opacity: 0.5,
	visibility: "visible",
	pointerEvents: "auto",
});

export const sideMenu = style({
	marginTop: 0,
	marginBottom: 0,
	top: 0,
	position: "absolute",
	height: "100%",
	width: "30%",
	flexDirection: "column",
	backgroundColor: "white",
	overflowY: "scroll",
	msOverflowStyle: "none",
	scrollbarWidth: "none",
	"::-webkit-scrollbar": {
		display: "none",
	},
	padding: vars.space.large,
	fontSize: "1.5rem",
	pointerEvents: "auto",
	transform: "translateX(0%)",
	transition: "transform 0.1s ease-in-out",
});

export const sideMenuItem = style({
	padding: vars.space.large,
});

export const sideMenuLink = style({
	color: vars.color.text,
	textDecoration: "none",
});

export const sideMenuHidden = style({
	transform: "translateX(-100%)",
});

export const bodyOverflowHidden = style({
	overflowY: "scroll",
	position: "fixed",
	width: "100%",
	height: "100%",
});
