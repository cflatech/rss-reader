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
});
