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

export const bodyOverflowHidden = style({
  overflowY: "scroll",
  position: "fixed",
  width: "100%",
  height: "100%",
});
