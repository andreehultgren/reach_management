import { createFileRoute } from "@tanstack/react-router";
import FullPageImageWithText from "../components/FullPageImageWithText";
import Section from "../components/Section";
import { Container } from "@mui/material";
import { Typography, Stack } from "@mui/material";
import ContactUs from "../components/ContactUs";

export const Route = createFileRoute("/tjanster")({
	component: Tjanster,
});

export default function Tjanster() {
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
						Tjänster
					</Typography>
				</Container>
			</FullPageImageWithText>
			<Section $backgroundColor="#ffffff">
				<Container>
					<Stack marginLeft={{ xs: 0, sm: 1 }}>
						<Typography variant="h3">Projektledning</Typography>
						<Typography variant="body1">
							Vi driver projekt från idé till färdig produkt med fokus på
							struktur, kommunikation och resultat. Som projektledare tar vi
							ansvar för planering, styrning och uppföljning - alltid med
							kundens mål i centrum.
						</Typography>
						<Typography variant="body1">
							Vår roll är att skapa ordning och tydlighet i komplexa processer
							och att vara länken mellan alla aktörer. Med ett helhetsperspektiv
							säkerställer vi att projektet levereras i tid, inom budget och med
							rätt kvalitet.
						</Typography>
					</Stack>
				</Container>
			</Section>
			<Section $backgroundColor="#ededed">
				<Container>
					<Stack marginLeft={{ xs: 0, sm: 1 }}>
						<Typography variant="h3">Projekteringsledning</Typography>
						<Typography variant="body1">
							En lyckad projektering är grunden för ett bra genomförande. Vi
							leder och samordnar projekteringsarbetet så att arkitekter,
							konstruktörer och specialister arbetar mot samma mål.
						</Typography>
						<Typography variant="body1">
							Med fokus på kvalitetssäkring, kostnadskontroll och smarta
							lösningar skapar vi förutsättningar för en effektiv byggstart. Vi
							ser till att alla delar i projekteringen hänger ihop och att
							kundens vision omsätts i praktiska handlingar.
						</Typography>
					</Stack>
				</Container>
			</Section>
			<Section $backgroundColor="#ffffff">
				<Container>
					<Stack marginLeft={{ xs: 0, sm: 1 }}>
						<Typography variant="h3">Byggledning</Typography>
						<Typography variant="body1">
							I byggskedet krävs närvaro, kontroll och tydlig styrning. Som
							byggledare representerar vi beställaren på plats och leder
							entreprenörernas arbete så att projektet utförs enligt plan,
							lagkrav och avtal.
						</Typography>

						<Typography variant="body1">
							Vi följer upp tidplan, ekonomi och kvalitet, samtidigt som vi
							bevakar arbetsmiljö och säkerhet. Vårt mål är alltid ett väl
							genomfört projekt - färdigt på rätt sätt och med långsiktig
							hållbarhet.
						</Typography>
					</Stack>
				</Container>
			</Section>

			<Section $backgroundColor="#ededed">
				<Container>
					<Stack marginLeft={{ xs: 0, sm: 1 }}>
						<Typography variant="h3">
							Kontrollansvarig (KA) enligt PBL
						</Typography>
						<Typography variant="body1">
							Som certifierade kontrollansvariga enligt Plan- och bygglagen
							(PBL) ser vi till att lagar och regler följs genom hela
							byggprocessen.
						</Typography>
						<Typography variant="body1">
							Vi upprättar kontrollplaner, följer upp att de genomförs och
							säkerställer att rätt dokumentation finns för att projektet ska
							kunna godkännas av byggnadsnämnden. Rollen som KA är en garanti
							för att projektet inte bara blir bra - utan också lagenligt och
							korrekt genomfört.
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
