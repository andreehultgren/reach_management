import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
	Container,
	Typography,
	Stack,
	Box,
	Tabs,
	Tab,
	Paper,
} from "@mui/material";

import Email from "../components/ContactUs/Email";
import Calendly from "../components/ContactUs/Calendly";
import Social from "../components/ContactUs/Social";
import ProjectScroller from "../components/ProjectScroller";
import Project from "../components/Project";
import { COLORS } from "../constants";

const ACTIVATE_ISO = false;

const SERVICES = [
	{
		title: "Projektledning",
		description: "Vi leder projekt med fokus på struktur, kommunikation och resultat. Från planering till uppföljning säkerställer vi att ditt projekt levereras i tid och inom budget."
	},
	{
		title: "Projekteringsledning", 
		description: "Vi samordnar projekteringsarbetet för att säkerställa kvalitet och effektivitet, från koncept till byggstart, med kunden i centrum."
	},
	{
		title: "Byggledning",
		description: "På plats leder vi entreprenörerna och övervakar tidplan, ekonomi och säkerhet för att säkerställa ett framgångsrikt projekt."
	},
	{
		title: "Kontrollansvarig (KA)",
		description: "Som certifierade kontrollansvariga enligt PBL säkerställer vi att lagkrav följs och att projektet godkänns av byggnadsnämnden."
	}
] as const;

export const Route = createFileRoute("/")({
	component: LandingPage,
});

function TabPanel(props: { children?: React.ReactNode; index: number; value: number }) {
	const { children, value, index, ...other } = props;
	return (
		<Paper
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
			sx={{ p: 3 }}
		>
			{value === index && <Box>{children}</Box>}
		</Paper>
	);
}

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

export default function LandingPage() {
	const [value, setValue] = useState(0);

	const handleChange = (_: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<div>
			{/* Hero Section */}
			<Box
				sx={{
					height: "100vh",
					background: `linear-gradient(${COLORS.LandingOverlay}, ${COLORS.LandingOverlay}), url(/stockholm.jpg) no-repeat center/cover`,
					display: "flex",
					alignItems: "flex-end",
					justifyContent: "center",
					textAlign: "center",
					paddingBottom: "4rem",
					boxSizing: "border-box",
					"@media (max-width: 900px)": {
						height: "calc(100vh - 6rem)",
						paddingBottom: "3rem",
					},
				}}
			>
				<Container sx={{ display: "flex", justifyContent: "center" }}>
					<Stack sx={{ maxWidth: "100%", width: "100%" }}>
						<Typography
							variant="h1"
							sx={{ mb: 2, fontWeight: 700, color: COLORS.landingColor }}
						>
							Vi når längre tillsammans
						</Typography>
						<Typography
							variant="h5"
							sx={{ maxWidth: 600, mx: "auto", color: COLORS.landingColor }}
						>
							För framgångsrika bygg- och fastighetsprojekt
						</Typography>
					</Stack>
				</Container>
			</Box>

			{/* About Section */}
			<Box sx={{ py: 8, backgroundColor: COLORS.white }}>
				<Container>
					<Stack
						direction={{ xs: "column", md: "row" }}
						spacing={4}
						alignItems="center"
					>
						<Box
							sx={{
								flex: 1,
								maxWidth: 600,
								borderRadius: "1rem",
								overflow: "hidden",
								boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
							}}
						>
							<img
								src="/wip.jpg"
								alt="Work in Progress"
								style={{ width: "100%", height: "auto", objectFit: "cover" }}
							/>
						</Box>
						<Stack flex={1} spacing={2}>
							<Typography variant="h2">Om Reach Management</Typography>
							<Typography variant="body1">
								Reach Management är ett konsultföretag inom bygg- och
								fastighetsbranschen. Vi är din partner genom hela byggprocessen
								– från idé till färdigställd produkt. Med engagemang, struktur
								och innovation driver vi projekt som skapar långsiktigt värde.
							</Typography>
							<Typography variant="body1">
								Vårt namn symboliserar vår filosofi: <strong>Reach</strong> står
								för att sträcka sig bortom det förväntade, och{" "}
								<strong>Management</strong> representerar vår expertis inom
								projektledning och samordning. Tillsammans når vi längre.
							</Typography>
						</Stack>
					</Stack>
				</Container>
			</Box>

			{/* Services Section */}
			<Box sx={{ py: 8, backgroundColor: COLORS.gray50 }}>
				<Container>
					<Typography variant="h2" textAlign="center" sx={{ mb: 4 }}>
						Våra tjänster
					</Typography>
					<Stack direction={{ xs: "column", md: "row" }} spacing={4}>
						{SERVICES.map((service) => (
							<Box key={service.title} sx={{ flex: 1, p: 2 }}>
								<Typography variant="h4">{service.title}</Typography>
								<Typography variant="body1">{service.description}</Typography>
							</Box>
						))}
					</Stack>
				</Container>
			</Box>

			{/* Why Choose Us Section */}
			<Box sx={{ py: 8, backgroundColor: COLORS.white }}>
				<Container>
					<Stack
						direction={{ xs: "column", md: "row" }}
						spacing={4}
						alignItems="center"
					>
						<Stack flex={1} spacing={2}>
							<Typography variant="h2">Därför Reach Management</Typography>
							<Typography variant="body1">
								Hos oss får du en partner som tar ansvar för helheten. Vi
								utmanar, inspirerar och driver projekt med ärlighet, struktur
								och innovation. Vår styrka ligger i att förstå din vision och
								omsätta den i verklighet.
							</Typography>
							<Typography variant="body1">
								<strong>Våra principer:</strong>
								<br />• Ärlighet – Vi löser problem, vi döljer dem inte.
								<br />• Struktur – Vi håller vad vi lovar.
								<br />• Innovation – Vi hittar lösningar där andra ser hinder.
								<br />• Kundfokus – Din framgång är vårt mål.
							</Typography>
						</Stack>
						<Box
							sx={{
								flex: 1,
								maxWidth: 600,
								borderRadius: "1rem",
								overflow: "hidden",
								boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
							}}
						>
							<img
								src="/titanic.jpg"
								alt="Titanic"
								style={{ width: "100%", height: "auto", objectFit: "cover" }}
							/>
						</Box>
					</Stack>
				</Container>
			</Box>

			{/* Certifications Section */}
			<Box sx={{ py: 8, backgroundColor: COLORS.gray50 }}>
				<Container>
					<Typography variant="h2" textAlign="center" sx={{ mb: 4 }}>
						Certifieringar
					</Typography>
					<Stack
						direction={{ xs: "column", md: "row" }}
						spacing={4}
						justifyContent="center"
					>
						<Stack direction="row" spacing={2} maxWidth={600}>
							<Box
								sx={{
									flex: 1,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<img
									src="/rise.png"
									alt="Rise"
									style={{ maxHeight: 100, objectFit: "contain" }}
								/>
							</Box>
							<Stack flex={1}>
								<Typography variant="h4">
									Kontrollansvarig enligt PBL
								</Typography>
								<Typography variant="body1">
									Vi är certifierade enligt Plan- och bygglagen (PBL) och
									säkerställer att ditt projekt uppfyller alla lagkrav.
								</Typography>
							</Stack>
						</Stack>
						{ACTIVATE_ISO && (
							<Stack direction="row" spacing={2} maxWidth={600}>
								<Stack flex={1}>
									<Typography variant="h4">ISO 9001</Typography>
									<Typography variant="body1">
										Vår ISO 9001-certifiering garanterar kvalitetsledning och
										ständiga förbättringar i alla våra processer.
									</Typography>
								</Stack>
								<Box
									sx={{
										flex: 1,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<img
										src="/ISO9001.png"
										alt="ISO 9001"
										style={{ maxHeight: 100, objectFit: "contain" }}
									/>
								</Box>
							</Stack>
						)}
					</Stack>
				</Container>
			</Box>

			{/* Consultants Section */}
			<Box sx={{ py: 8, backgroundColor: COLORS.white }}>
				<Container>
					<Typography variant="h2" textAlign="center" sx={{ mb: 4 }}>
						Våra konsulter
					</Typography>
					<ProjectScroller>
						<Project
							title="Michael Hultgren"
							description="Byggprojektledare med över 10 års erfarenhet inom byggbranschen. Specialiserad på hållbara bygglösningar och effektiv projektledning."
							image="/michael.jpg"
						/>
					</ProjectScroller>
				</Container>
			</Box>

			{/* Contact Section */}
			<Box id="contact" sx={{ py: 8, backgroundColor: COLORS.gray50 }}>
				<Container>
					<Typography variant="h2" textAlign="center" sx={{ mb: 4 }}>
						Kontakta oss
					</Typography>
					<Typography
						variant="body1"
						textAlign="center"
						sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
					>
						Har du frågor eller vill diskutera ditt nästa projekt? Vi finns här
						för att hjälpa dig vidare. Välj hur du vill nå oss!
					</Typography>
					<Tabs value={value} onChange={handleChange} centered>
						<Tab label="E-post" {...a11yProps(0)} />
						<Tab label="Boka möte" {...a11yProps(1)} />
						<Tab label="Sociala medier" {...a11yProps(2)} />
					</Tabs>
					<TabPanel value={value} index={0}>
						<Email />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<Calendly />
					</TabPanel>
					<TabPanel value={value} index={2}>
						<Social />
					</TabPanel>
				</Container>
			</Box>
		</div>
	);
}
