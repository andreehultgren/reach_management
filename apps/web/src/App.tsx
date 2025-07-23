import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { styled } from "styled-components";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import { COLORS } from "./constants";
import Footer from "./components/Footer";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${COLORS.background};
  color-scheme: light dark;
  color: #333333;
`;

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		fontFamily: "Inter, Helvetica Neue, Helvetica, Arial, sans-serif",
		h1: {
			fontSize: "3.052rem",
			fontWeight: 700,
			marginBottom: "1.5rem",
			lineHeight: 1.2,
		},
		h2: {
			fontSize: "2.441rem",
			fontWeight: 600,
			marginBottom: "1.2rem",
		},
		h3: {
			fontSize: "1.953rem",
			fontWeight: 500,
			marginBottom: "0.8rem",
		},
		h4: {
			fontSize: "1.563rem",
			fontWeight: 500,
			marginBottom: "0.7rem",
		},
		h5: {
			fontSize: "1.25rem",
			fontWeight: 400,
			marginBottom: "0.6rem",
		},
		body1: {
			fontSize: "1rem",
			fontWeight: 400,
			marginBottom: "0.5rem",
			lineHeight: 1.5,
		},
		body2: {
			fontSize: "0.9rem",
			fontWeight: 400,
			marginBottom: "0.3rem",
			color: "white",
			lineHeight: 1.5,
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<AppWrapper>
				<Navbar />
				<Outlet />
				<TanStackRouterDevtools />
				<Footer />
			</AppWrapper>
		</ThemeProvider>
	);
}

export default App;
