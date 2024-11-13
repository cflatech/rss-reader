import { createTheme } from "@vanilla-extract/css";

export const [theme, vars] = createTheme({
  space: {
    small: "4px",
    medium: "8px",
    large: "12px",
  },
  color: {
    main: "#b0c4de",
    base: "#708090",
    accent: "#00B5AD",
    text: "black",
  },
  layer: {
    base: "0",
    menu: "10",
    modal: "100",
  },
  fontSize: {
    small: "0.75rem",
    medium: "16px",
    large: "1.5rem",
  },
});
