import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "@mui/material/styles";
import { styled } from "styled-components";
import React from "react";

import { Navbar, Footer } from "./ui";
import { colors } from "./ui/design-tokens";
import { theme } from "./theme";
import ContactUs from "./components/ContactUs";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  color-scheme: light dark;
  color: ${colors.textPrimary};
  min-height: 100vh;
`;


function App() {
	const [showContactDialog, setShowContactDialog] = React.useState(false);

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
							setShowContactDialog(true);
						}
					}}
				/>
				<Outlet />
				<TanStackRouterDevtools />
				<Footer 
					companyName="Reach Management"
					orgNumber="559214-4520"
					email="info@reachmanagement.se"
				/>
				{/* ContactUs dialog */}
				{showContactDialog && (
					<ContactUs 
						triggerOpen={true}
						onClose={() => setShowContactDialog(false)}
					/>
				)}
			</AppWrapper>
		</ThemeProvider>
	);
}

export default App;
