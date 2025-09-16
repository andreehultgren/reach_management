import { createTheme } from "@mui/material/styles";
import { COLORS } from "./constants";

export const theme = createTheme({
	typography: {
		fontFamily: "Inter, Helvetica Neue, Helvetica, Arial, sans-serif",
		h1: {
			fontSize: "3.052rem",
			fontWeight: 700,
			marginBottom: "1.5rem",
			lineHeight: 1.2,
			color: COLORS.textPrimary,
		},
		h2: {
			fontSize: "2.441rem",
			fontWeight: 600,
			marginBottom: "1.2rem",
			color: COLORS.textPrimary,
		},
		h3: {
			fontSize: "1.953rem",
			fontWeight: 500,
			marginBottom: "0.8rem",
			color: COLORS.textPrimary,
		},
		h4: {
			fontSize: "1.563rem",
			fontWeight: 500,
			marginBottom: "0.7rem",
			color: COLORS.textPrimary,
		},
		h5: {
			fontSize: "1.25rem",
			fontWeight: 400,
			marginBottom: "0.6rem",
			color: COLORS.textPrimary,
		},
		body1: {
			fontSize: "1rem",
			fontWeight: 400,
			marginBottom: "0.5rem",
			lineHeight: 1.5,
			color: COLORS.textSecondary,
		},
		body2: {
			fontSize: "0.9rem",
			fontWeight: 400,
			marginBottom: "0.3rem",
			color: COLORS.textSecondary,
			lineHeight: 1.5,
		},
	},
});
