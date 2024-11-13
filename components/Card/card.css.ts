import { style } from "@vanilla-extract/css";
import { vars } from "~/app/theme.css";

export const card = style({
  padding: vars.space.medium,
  border: `1px solid ${vars.color.main}`,
  borderRadius: vars.space.medium,
  margin: vars.space.small,
});
