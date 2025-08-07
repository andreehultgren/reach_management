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
					<Typography textAlign="center" variant="h5" mt={0}>
						Vill du veta mer om oss? Be och du skall få!
					</Typography>
				</Container>
			</FullPageImageWithText>
			<Section $backgroundColor="#ffffff">
				<Container>
					<Stack marginLeft={{ xs: 0, sm: 1 }}>
						<Typography variant="h3">Kungliga Tekniska Högskolan</Typography>
						<Typography variant="body1">
							Ett bra bygge börjar med en bra grund - detsamma gäller våra
							konsulter. En stark grund är en bra utbildning. Vi har starka krav
							på kompetens och utbildning.
						</Typography>
						<Typography variant="body1">
							Våra konsulter är utbildade vid Kungliga Tekniska Högskolan (KTH)
							i Stockholm, en av de mest prestigefyllda tekniska högskolorna i
							Sverige. KTH erbjuder en gedigen utbildning inom teknik och
							ingenjörsvetenskap, vilket säkerställer att våra konsulter har den
							kunskap och kompetens som krävs för att leverera högkvalitativa
							tjänster.
						</Typography>
					</Stack>
				</Container>
			</Section>
			<Section $backgroundColor="#ededed">
				<Container>
					<Stack marginLeft={{ xs: 0, sm: 1 }}>
						<Typography variant="h3">Arbetslivserfarenhet</Typography>
						<Typography variant="body1">
							Vi tror på att kombinera teori med praktik. Våra konsulter har
							inte bara en stark akademisk bakgrund, utan också värdefull
							arbetslivserfarenhet. Detta gör att de kan tillämpa sina kunskaper
							på ett praktiskt och effektivt sätt, vilket resulterar i
							högkvalitativa lösningar för våra kunder.
						</Typography>
						<Typography variant="body1">
							Vi har arbetat med en mängd olika projekt och branscher, vilket
							gör att vi har en bred erfarenhet och förståelse för olika
							utmaningar och behov. Detta gör att vi kan anpassa våra tjänster
							efter kundens specifika krav och leverera skräddarsydda lösningar.
						</Typography>
					</Stack>
				</Container>
			</Section>
			<Section $backgroundColor="#ffffff">
				<Container>
					<Stack marginLeft={{ xs: 0, sm: 1 }}>
						<Typography variant="h3">Samarbete</Typography>
						<Typography variant="body1">
							Ingen kan vara expert på allt. Därför samarbetar vi med andra
							företag och organisationer för att kunna erbjuda våra kunder de
							bästa lösningarna. Genom att kombinera vår kompetens med andras
							kan vi skapa mervärde och leverera ännu bättre resultat.
						</Typography>
						<Typography variant="body1">
							Vi tror på att samarbeta med andra för att skapa synergier och
							utbyta kunskap. Detta gör att vi kan hålla oss uppdaterade med de
							senaste trenderna och teknologierna, vilket i sin tur gynnar våra
							kunder.
						</Typography>
					</Stack>
				</Container>
			</Section>
			<Section $backgroundColor="#ededed">
				<Container>
					<Stack marginLeft={{ xs: 0, sm: 1 }}>
						<Typography variant="h3">Bygg med oss</Typography>
						<Typography variant="body1">
							Delar du våra värderingar - kontakta oss så kan vi bygga
							tillsammans!
						</Typography>
						<ContactUs />
					</Stack>
				</Container>
			</Section>
		</div>
	);
}
