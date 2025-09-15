import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "@mui/material/styles";
import { styled } from "styled-components";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { COLORS } from "./constants";
import { theme } from "./theme";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${COLORS.background};
  color-scheme: light dark;
  color: ${COLORS.textPrimary};
`;


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
