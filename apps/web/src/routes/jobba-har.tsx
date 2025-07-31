import { createFileRoute } from "@tanstack/react-router";
import FullPageImageWithText from "../components/FullPageImageWithText";
import Section from "../components/Section";
import { Container } from "@mui/material";
import Email from "../components/ContactUs/Email";
import { Typography, Stack } from "@mui/material";

export const Route = createFileRoute("/jobba-har")({
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
						Jobba här
					</Typography>
					<Typography textAlign="center" variant="h5" mt={0}>
						Vill du jobba med oss? Utmärkt val!
					</Typography>
				</Container>
			</FullPageImageWithText>
			<Section $backgroundColor="#ffffff">
				<Container>
					<Stack marginLeft={{ xs: 0, sm: 1 }}>
						<Typography variant="h2">Spontanansökan</Typography>
						<Typography variant="body1">
							Vi finns här om du har några frågor! Kontakta oss gärna om du vill
							veta mer om våra tjänster eller har funderingar kring ditt
							projekt. Vi svarar snabbt och hjälper dig gärna vidare!
						</Typography>
						<Email ignoreTitle />
					</Stack>
				</Container>
			</Section>
		</div>
	);
}
