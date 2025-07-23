import { createFileRoute } from "@tanstack/react-router";
import FullPageImageWithText from "../components/FullPageImageWithText";
import Section from "../components/Section";
import { Tabs, Tab, Box, Container, Divider, Paper } from "@mui/material";
import { useState } from "react";
import Email from "../components/ContactUs/Email";
import Calendly from "../components/ContactUs/Calendly";
import Social from "../components/ContactUs/Social";
import ProjectScroller from "../components/ProjectScroller";
import Project from "../components/Project";
import { Typography, Stack } from "@mui/material";

export const Route = createFileRoute("/")({
	component: LandingPage,
});

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<Paper
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
			<FullPageImageWithText imageUrl="/stockholm.jpg">
				<Container
					sx={{
						alignSelf: "flex-end",
						pb: {
							xs: 0,
							sm: 5,
						},
					}}
				>
					<Typography textAlign="center" variant="h1" ml={{ xs: 2, sm: 1 }}>
						Tydliga leveranser{" "}
						<span style={{ whiteSpace: "nowrap" }}>utan fluff</span>
					</Typography>
				</Container>
			</FullPageImageWithText>
			<Section $backgroundColor="#ededed" $padding="2rem 0">
				<Container>
					<Stack paddingX={"1rem"} mb={2}>
						<Typography variant="h2">Våra projekt</Typography>
						<Typography variant="body1">
							Kolla gärna in tidigare byggprojekt, renoveringar och
							fastighetsutveckling som Planova har genomfört. Varje projekt är
							unikt och visar vår kompetens inom byggledning, kvalitetskontroll
							och hållbara lösningar.
						</Typography>
					</Stack>
				</Container>
				<ProjectScroller>
					<Project
						title="Projekt kommer snart"
						description="Vi arbetar på att lägga till våra projekt här. Titta gärna tillbaka senare!"
						image="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80"
					/>
					<Project
						title="Projekt kommer snart"
						description="Vi arbetar på att lägga till våra projekt här. Titta gärna tillbaka senare!"
						image="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?auto=format&fit=crop&w=400&q=80"
					/>
					<Project
						title="Projekt kommer snart"
						description="Vi arbetar på att lägga till våra projekt här. Titta gärna tillbaka senare!"
						image="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=400&q=80"
					/>
					<Project
						title="Projekt kommer snart"
						description="Vi arbetar på att lägga till våra projekt här. Titta gärna tillbaka senare!"
						image="https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?auto=format&fit=crop&w=400&q=80"
					/>
					<Project
						title="Projekt kommer snart"
						description="Vi arbetar på att lägga till våra projekt här. Titta gärna tillbaka senare!"
						image="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=400&q=80"
					/>
					<Project
						title="Projekt kommer snart"
						description="Vi arbetar på att lägga till våra projekt här. Titta gärna tillbaka senare!"
						image="https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=400&q=80"
					/>
				</ProjectScroller>
			</Section>
			<Section $backgroundColor="#ffffff">
				<Container>
					<Stack marginLeft={{ xs: 0, sm: 1 }}>
						<Typography variant="h2">Certifieringar</Typography>
						<Typography variant="body1">
							Vi är certifierade kontrollansvariga enligt Plan- och bygglagen
							(PBL) och har ISO 9001-certifiering för kvalitetsledning. Våra
							certifieringar visar att vi uppfyller lagkrav och
							branschstandarder inom bygg och renovering, med fokus på kvalitet,
							säkerhet och resultat.
						</Typography>
					</Stack>
					<Divider sx={{ mt: 2, mb: 4 }} />
					<Stack
						marginLeft={{ xs: 0, sm: 1 }}
						alignItems="center"
						justifyContent="center"
						spacing={3}
					>
						<Stack direction="row" spacing={2} mt={2} maxWidth={800}>
							<Stack flex={1} alignItems="center" justifyContent="center">
								<img src="/rise.png" alt="Rise" height={100} />
							</Stack>
							<Stack flex={1}>
								<Typography variant="h3">
									Kontrollansvarig enligt PGL
								</Typography>
								<Typography variant="body1">
									Vi är certifierade kontrollansvariga enligt Plan- och
									bygglagen (PBL) och kan hjälpa dig med alla aspekter av
									byggprocessen.
								</Typography>
							</Stack>
						</Stack>
						<Stack direction="row" spacing={2} mt={2} maxWidth={800}>
							<Stack flex={1}>
								<Typography variant="h3">ISO 9001</Typography>
								<Typography variant="body1">
									Vi är certifierade enligt ISO 9001, vilket innebär att vi
									följer internationella standarder för kvalitetsledning och
									ständiga förbättringar.
								</Typography>
							</Stack>
							<Stack flex={1} alignItems="center" justifyContent="center">
								<img src="/ISO9001.png" alt="ISO 9001" height={100} />
							</Stack>
						</Stack>
					</Stack>
				</Container>
			</Section>
			<Section $backgroundColor="#ededed">
				<Container>
					<Stack marginLeft={{ xs: 0, sm: 1 }}>
						<Typography variant="h2">Kontakt</Typography>
						<Typography variant="body1">
							Vi finns här om du har några frågor! Kontakta oss gärna om du vill
							veta mer om våra tjänster eller har funderingar kring ditt
							projekt. Vi svarar snabbt och hjälper dig gärna vidare!
						</Typography>
					</Stack>
					<Stack>
						<Tabs value={value} onChange={handleChange}>
							<Tab label="Email" {...a11yProps(0)} />
							<Tab label="Möte" {...a11yProps(1)} />
							<Tab label="Social" {...a11yProps(2)} />
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
					</Stack>
				</Container>
			</Section>
		</div>
	);
}
