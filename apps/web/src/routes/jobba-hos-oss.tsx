import { createFileRoute } from "@tanstack/react-router";
import FullPageImageWithText from "../components/FullPageImageWithText";
import Section from "../components/Section";
import { Container } from "@mui/material";
import Email from "../components/ContactUs/Email";
import { Typography, Stack } from "@mui/material";
import Phone from "../components/ContactUs/Phone";

export const Route = createFileRoute("/jobba-hos-oss")({
	component: LandingPage,
});

export default function LandingPage() {
	return (
		<div>
			<FullPageImageWithText imageUrl="/stockholm.jpg" height={600}>
				<Container
					sx={{
						alignSelf: "flex-end",
						pb: {
							xs: 0,
							sm: 5,
						},
					}}
				>
					<Typography
						textAlign="center"
						variant="h1"
						ml={{ xs: 2, sm: 1 }}
						mb={1}
					>
						Jobba hos oss
					</Typography>
				</Container>
			</FullPageImageWithText>
			<Section $backgroundColor="#ffffff">
				<Container>
					<Stack marginLeft={{ xs: 0, sm: 1 }} spacing={2}>
						<Typography variant="body1">
							Vi bygger ett bolag som växer långsiktigt och söker alltid efter
							människor som delar våra värderingar - ärlighet, struktur,
							innovation och kundfokus.
						</Typography>
						<Typography variant="body1">
							Hos oss får du mer än bara ett uppdrag. Du får en miljö där vi når
							längre tillsammans - som team, med våra kunder och i projekten vi
							driver.
						</Typography>
						<Typography variant="body1">
							Är du intresserad av att arbeta med oss? Hör av dig och berätta
							mer om dig själv - vi är alltid öppna för nya samarbeten.
						</Typography>

						<Email ignoreTitle />
						<Phone ignoreTitle />
					</Stack>
				</Container>
			</Section>
		</div>
	);
}
