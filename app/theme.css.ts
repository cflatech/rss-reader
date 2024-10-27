import { createTheme } from "@vanilla-extract/css";

export const [theme, vars] = createTheme({
	space: {
		4: "4px",
		8: "8px",
		16: "16px",
	},
});
