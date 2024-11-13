import { style } from "@vanilla-extract/css";
import { vars } from "~/app/theme.css";

export const siteList = style({
  margin: vars.space.large,
});

export const list = style({
  padding: 0,
});

export const item = style({
  margin: vars.space.small,
  listStyle: "none",
  padding: 0,
});

export const input = style({
  width: "100%",
});
