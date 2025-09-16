import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "@mui/material/styles";
import { styled } from "styled-components";

import { Navbar, Footer } from "./ui";
import { colors } from "./ui/design-tokens";
import { theme } from "./theme";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  color-scheme: light dark;
  color: ${colors.textPrimary};
  min-height: 100vh;
`;


function App() {
	return (
		<ThemeProvider theme={theme}>
			<AppWrapper>
				<Navbar 
					logo={{
						text: "Reach Management",
						href: "/"
					}}
					links={[
						{ label: "Hem", href: "/" },
						{ label: "Tjänster", href: "/tjanster" },
						{ label: "Om oss", href: "/om-oss" },
						{ label: "Jobba hos oss", href: "/jobba-hos-oss" }
					]}
					ctaButton={{
						text: "Kontakta oss",
						onClick: () => {
							const contactSection = document.getElementById('contact');
							if (contactSection) {
								contactSection.scrollIntoView({ behavior: 'smooth' });
							}
						}
					}}
				/>
				<Outlet />
				<TanStackRouterDevtools />
				<Footer 
					companyName="Reach Management"
					orgNumber="123456-7890"
					email="info@reachmanagement.se"
					links={[
						{ text: "Integritetspolicy", href: "/privacy" },
						{ text: "Användarvillkor", href: "/terms" },
						{ text: "Cookies", href: "/cookies" }
					]}
				/>
			</AppWrapper>
		</ThemeProvider>
	);
}

export default App;
