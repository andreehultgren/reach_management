import { createFileRoute } from "@tanstack/react-router";
import FullPageImageWithText from "../components/FullPageImageWithText";
import Section from "../components/Section";
import { Container } from "@mui/material";
import { Typography, Stack } from "@mui/material";
import ContactUs from "../components/ContactUs";

export const Route = createFileRoute("/om-oss")({
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
						Om oss
					</Typography>
				</Container>
			</FullPageImageWithText>
			<Section $backgroundColor="#ffffff">
				<Container>
					<Stack marginLeft={{ xs: 0, sm: 1 }}>
						<Typography variant="h3">Vi når längre tillsammans</Typography>
						<Typography variant="body1">
							Reach Management föddes ur en övertygelse: att framgångsrika
							projekt skapas genom samarbete, engagemang och modet att sträcka
							sig längre än det självklara. Vi ser oss inte bara som konsulter -
							vi är en partner som går vid din sida genom hela resan. Vår roll
							är att ge struktur och trygghet, men också att utmana, inspirera
							och driva utveckling.
						</Typography>
						<Typography variant="body1">
							För oss handlar projektledning inte bara om att leverera i tid och
							inom budget. Det handlar om att nå längre tillsammans - att skapa
							resultat som ger värde både här och nu och på lång sikt.
						</Typography>
					</Stack>
				</Container>
			</Section>
			<Section $backgroundColor="#ededed">
				<Container>
					<Stack marginLeft={{ xs: 0, sm: 1 }}>
						<Typography variant="h3">Vad betyder Reach Management</Typography>
						<Typography variant="body1">
							Namnet Reach Management symboliserar vårt sätt att arbeta:
						</Typography>
						<ul>
							<li>
								<Typography>
									<b>Reach</b> symboliserar vårt fokus på att sträcka oss bortom
									det förväntade och skapa lösningar som håller över tid.
								</Typography>
							</li>
							<li>
								<Typography>
									<b>Management</b> representerar vårt kärnområde - att leda,
									samordna och driva projekt framåt.
								</Typography>
							</li>
						</ul>
						<Typography variant="body1">
							Tillsammans blir det mer än bara ett namn och mer en riktning:{" "}
							<br />
							<b>Reach Management - Vi når längre tillsammans.</b>
						</Typography>
					</Stack>
				</Container>
			</Section>
			<Section $backgroundColor="#ffffff">
				<Container>
					<Stack marginLeft={{ xs: 0, sm: 1 }}>
						<Typography variant="h3">Vilka vi är</Typography>
						<Typography variant="body1">
							Reach Management är ett konsultföretag inom bygg- och
							fastighetsbranschen. Vi erbjuder tjänster inom:
						</Typography>
						<ul>
							<li>
								<Typography>
									<b>Projektledning</b> - struktur och tydlighet i hela
									processen.
								</Typography>
							</li>
							<li>
								<Typography>
									<b>Projekteringsledning</b> - samordning och kvalitetssäkring
									från start till mål.
								</Typography>
							</li>
							<li>
								<Typography>
									<b>Byggledning</b> - närvaro i produktionen och ledning med
									fokus på säkerhet och resultat.
								</Typography>
							</li>
							<li>
								<Typography>
									<b>Kontrollansvarig (KA) enligt PBL</b> - ansvar för att
									lagkrav följs och att projektet uppfyller bygglagstiftningens
									krav.
								</Typography>
							</li>
						</ul>
						<Typography variant="body1">
							Vi stöttar beställare och fastighetsägare genom hela byggprocessen
							- från idé till färdigställd produkt.
						</Typography>
						<Typography variant="body1">
							Vi fungerar som en förlängning av din organisation - med
							engagemanget hos en partner och precisionen hos en specialist.
						</Typography>
					</Stack>
				</Container>
			</Section>

			<Section $backgroundColor="#ededed">
				<Container>
					<Stack marginLeft={{ xs: 0, sm: 1 }}>
						<Typography variant="h3">Vårt erbjudande</Typography>
						<Typography variant="body1">
							Vi erbjuder flexibla och kundanpassade konsulttjänster. Oavsett om
							det gäller kortare uppdrag eller långsiktiga samarbeten bidrar vi
							med det som gör skillnad: struktur, innovation och förmågan att
							driva projekt framåt på ett tryggt och effektivt sätt.
						</Typography>
						<Typography variant="body1">
							Vår styrka är att alltid se helheten – att förstå visionen bakom
							projektet och omsätta den i verklighet. När vi arbetar tillsammans
							kan vi nå längre än vad någon av oss kan ensam.
						</Typography>
					</Stack>
				</Container>
			</Section>

			<Section $backgroundColor="#ffffff">
				<Container>
					<Stack marginLeft={{ xs: 0, sm: 1 }}>
						<Typography variant="h3">Därför Reach Management</Typography>
						<Typography variant="body1">
							Hos oss får du mer än en konsult. Du får en partner som tar ansvar
							för helheten, som ser längre än bara tidplan och budget. Vi vågar
							utmana och tänka nytt, men vi står alltid på en grund av ärlighet
							och struktur.
						</Typography>
						<Typography variant="body1">
							Vi skiljer oss genom vårt engagemang och vår vilja att gå den
							extra milen. För oss handlar det om mer än att leverera – det
							handlar om att skapa värde som består.
						</Typography>
					</Stack>
				</Container>
			</Section>

			<Section $backgroundColor="#ededed">
				<Container>
					<Stack marginLeft={{ xs: 0, sm: 1 }}>
						<Typography variant="h3">Våra principer</Typography>
						<Typography variant="body1">
							<b>Ärlighet</b> - Vi döljer aldrig problem. Vi löser dem.
						</Typography>
						<Typography variant="body1">
							<b>Struktur</b> - Vi håller vad vi lovar - varje gång.
						</Typography>
						<Typography variant="body1">
							<b>Innovation</b> - Vi hittar nya vägar där andra ser hinder.
						</Typography>
						<Typography variant="body1">
							<b>Kundfokus</b> - Din framgång är vårt uppdrag.
						</Typography>
					</Stack>
				</Container>
			</Section>

			<Section $backgroundColor="#ffffff">
				<Container>
					<Stack marginLeft={{ xs: 0, sm: 1 }}>
						<Typography variant="h3">
							Hör av dig så når vi längre tillsammans
						</Typography>
						<Typography variant="body1" mb={4}>
							Har du ett projekt på gång eller vill du veta mer om hur vi kan
							hjälpa dig? Tveka inte att höra av dig.
						</Typography>
						<ContactUs />
					</Stack>
				</Container>
			</Section>
		</div>
	);
}
