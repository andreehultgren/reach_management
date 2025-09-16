import { createFileRoute } from "@tanstack/react-router";

import { 
	Typography, 
	Button, 
	Accordion, 
	Tabs, 
	PageSection, 
	HeroSection,
	ProjectCard,
	ProjectScroller,
	ImageText
} from "../ui";
import { colors, spacing } from "../ui/design-tokens";
import { ArrowForward } from "@mui/icons-material";

import Email from "../components/ContactUs/Email";
import Calendly from "../components/ContactUs/Calendly";
import Social from "../components/ContactUs/Social";


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


export default function LandingPage() {

	return (
		<div>
			{/* Hero Section */}
			<HeroSection
				title="Vi når längre tillsammans"
				subtitle="För framgångsrika bygg- och fastighetsprojekt"
				backgroundImage="/stockholm.jpg"
				actions={[
					{
						text: "Läs mer om våra tjänster",
						variant: "primary",
						size: "large",
						onClick: () => console.log("Navigate to services")
					}
				]}
			/>

			{/* About Section */}
			<PageSection variant="feature" align="center">
				<ImageText
					image={{
						src: "/assets/reach_hand_desktop.jpg",
						alt: "Reach Management"
					}}
					title="Om Reach Management"
					content={[
						"Reach Management är ett konsultföretag inom bygg- och fastighetsbranschen. Vi är din partner genom hela byggprocessen - från idé till färdigställd produkt. Med engagemang, struktur och innovation driver vi projekt som skapar långsiktigt värde.",
						"Vårt namn symboliserar vår filosofi: <strong>Reach</strong> står för att sträcka sig bortom det förväntade, och <strong>Management</strong> representerar vår expertis inom projektledning och samordning. Tillsammans når vi längre."
					]}
					orientation="left"
				/>
			</PageSection>

			{/* Services Section */}
			<PageSection variant="testimonial" align="center">
				<div style={{ textAlign: 'center', marginBottom: spacing[8] }}>
					<Typography variant="h2" color="primary" style={{ marginBottom: spacing[4] }}>
						Våra tjänster
					</Typography>
					<div style={{ 
						width: 80, 
						height: 2, 
						backgroundColor: colors.primary,
						borderRadius: "1px",
						margin: '0 auto',
						marginBottom: spacing[6]
					}} />
					<Typography variant="h5" color="secondary" style={{ maxWidth: 600, margin: '0 auto' }}>
						Vi erbjuder kompletta lösningar för alla delar av byggprocessen
					</Typography>
				</div>
					
					<div style={{ maxWidth: 900, margin: '0 auto' }}>
						{SERVICES.map((service) => (
							<div key={service.title} style={{ marginBottom: spacing[3] }}>
								<Accordion title={service.title}>
									<Typography variant="body1" color="secondary" style={{ lineHeight: 1.7 }}>
										{service.description}
									</Typography>
								</Accordion>
							</div>
						))}
					</div>
					
					{/* Call to Action */}
					<div style={{ textAlign: 'center', marginTop: spacing[8] }}>
						<Button
							variant="primary"
							size="large"
							style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}
						>
							Se alla våra tjänster
							<ArrowForward />
						</Button>
				</div>
			</PageSection>

			{/* Why Choose Us Section */}
			<PageSection variant="feature" align="center">
				<ImageText
					image={{
						src: "/titanic.jpg",
						alt: "Titanic"
					}}
					title="Därför Reach Management"
					content={[
						"Hos oss får du en partner som tar ansvar för helheten. Vi utmanar, inspirerar och driver projekt med ärlighet, struktur och innovation. Vår styrka ligger i att förstå din vision och omsätta den i verklighet.",
						"Vi tror på att bygga långsiktiga relationer med våra kunder och leverantörer. Genom att förstå dina behov och mål kan vi skapa lösningar som verkligen gör skillnad."
					]}
					orientation="right"
				/>
			</PageSection>

			{/* Certifications Section */}
			<PageSection variant="testimonial" align="center">
				<div style={{ textAlign: 'center', marginBottom: spacing[8] }}>
					<Typography variant="h2" color="primary" style={{ marginBottom: spacing[4] }}>
						Certifieringar
					</Typography>
					<div style={{ 
						width: 80, 
						height: 2, 
						backgroundColor: colors.primary,
						borderRadius: "1px",
						margin: '0 auto',
						marginBottom: spacing[6]
					}} />
					<Typography variant="h5" color="secondary" style={{ maxWidth: 600, margin: '0 auto' }}>
						Vi arbetar enligt branschstandarder och lagkrav
					</Typography>
				</div>
				
				<ImageText
					image={{
						src: "/rise.png",
						alt: "Rise Certification"
					}}
					title="Kontrollansvarig enligt PBL"
					content="Vi är certifierade enligt Plan- och bygglagen (PBL) och säkerställer att ditt projekt uppfyller alla lagkrav. Vår certifiering garanterar att vi följer de senaste reglerna och standarderna inom byggbranschen."
					orientation="center"
				/>
			</PageSection>

			{/* Consultants Section */}
			<PageSection variant="feature" align="center">
				<div style={{ textAlign: 'center', marginBottom: spacing[8] }}>
					<Typography variant="h2" color="primary" style={{ marginBottom: spacing[4] }}>
						Våra konsulter
					</Typography>
					<div style={{ 
						width: 80, 
						height: 2, 
						backgroundColor: colors.primary,
						borderRadius: "1px",
						margin: '0 auto',
						marginBottom: spacing[6]
					}} />
					<Typography variant="h5" color="secondary" style={{ maxWidth: 600, margin: '0 auto' }}>
						Erfarna experter som driver dina projekt framåt
					</Typography>
				</div>
				<ProjectScroller variant="showcase">
					<ProjectCard
						title="Michael Hultgren"
						description="Byggprojektledare med över 10 års erfarenhet inom byggbranschen. Specialiserad på hållbara bygglösningar och effektiv projektledning."
						image="/michael.jpg"
						variant="featured"
						status="completed"
						category="Projektledare"
						year="2024"
					/>
				</ProjectScroller>
			</PageSection>

			{/* Call to Action Section */}
			<PageSection variant="cta" align="center">
				<div style={{ textAlign: 'center', marginBottom: spacing[8] }}>
					<Typography variant="h2" color="textOnDark" style={{ 
						fontWeight: 700,
						marginBottom: spacing[4],
						fontSize: 'clamp(2.5rem, 5vw, 3.5rem)'
					}}>
						Redo att starta ditt nästa projekt?
					</Typography>
					<Typography variant="h5" color="textOnDark" style={{ 
						maxWidth: 700,
						opacity: 0.95,
						fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
						lineHeight: 1.6,
						margin: '0 auto'
					}}>
						Låt oss diskutera hur vi kan hjälpa dig att nå dina mål med vår expertis inom projektledning och byggledning.
					</Typography>
				</div>
				<div style={{ 
					display: 'flex', 
					flexDirection: 'column', 
					gap: spacing[4],
					alignItems: 'center'
				}}>
					<Button
						variant="primary"
						size="large"
						style={{ 
							backgroundColor: colors.white,
							color: colors.primary,
							fontSize: "1.2rem",
							fontWeight: 600,
							padding: `${spacing[4]} ${spacing[8]}`,
							borderRadius: "1rem",
							boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
						}}
					>
						Kontakta oss
					</Button>
					<Button
						variant="outline"
						size="large"
						style={{ 
							borderColor: colors.white,
							color: colors.white,
							fontSize: "1.2rem",
							fontWeight: 600,
							padding: `${spacing[4]} ${spacing[8]}`,
							borderRadius: "1rem",
							borderWidth: 2,
							display: 'flex',
							alignItems: 'center',
							gap: spacing[2]
						}}
					>
						Se våra tjänster
						<ArrowForward />
					</Button>
				</div>
			</PageSection>

			{/* Contact Section */}
			<PageSection variant="testimonial" align="center">
				<div style={{ textAlign: 'center', marginBottom: spacing[8] }}>
					<Typography variant="h2" color="primary" style={{ marginBottom: spacing[4] }}>
						Kontakta oss
					</Typography>
					<div style={{ 
						width: 80, 
						height: 2, 
						backgroundColor: colors.primary,
						borderRadius: "1px",
						margin: '0 auto',
						marginBottom: spacing[6]
					}} />
					<Typography variant="h5" color="secondary" style={{ 
						maxWidth: 700, 
						margin: '0 auto',
						lineHeight: 1.6
					}}>
						Har du frågor eller vill diskutera ditt nästa projekt? Vi finns här
						för att hjälpa dig vidare. Välj hur du vill nå oss!
					</Typography>
				</div>
				
				<div style={{ 
					backgroundColor: colors.white, 
					borderRadius: '1.5rem',
					boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.06)',
					border: `1px solid ${colors.gray200}`,
					overflow: "hidden",
					maxWidth: 900,
					margin: '0 auto'
				}}>
					<Tabs 
						tabs={[
							{ id: 'email', label: 'E-post', content: <Email /> },
							{ id: 'meeting', label: 'Boka möte', content: <Calendly /> },
							{ id: 'social', label: 'Sociala medier', content: <Social /> }
						]}
						variant="default"
						defaultActiveTab="email"
						onChange={(tabId) => {
							console.log('Tab changed:', tabId);
						}}
					/>
				</div>
			</PageSection>
		</div>
	);
}
