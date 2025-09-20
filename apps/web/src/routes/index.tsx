import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { styled } from "styled-components";

import { 
	Typography, 
	Button, 
	PageSection, 
	HeroSection,
	ImageText,
	Accordion
} from "../ui";
import { ConsultantScroller } from "../ui/components/molecules/ConsultantScroller/ConsultantScroller";
import { colors, spacing } from "../ui/design-tokens";
import { ArrowForward } from "@mui/icons-material";
import ContactUs from "../components/ContactUs";
// Removed ContactForm import - using simple email display instead

const ServicesGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: ${spacing[6]};
	max-width: 1000px;
	margin: 0 auto;
	
	@media (max-width: 768px) {
		display: none;
	}
`;

const MobileAccordion = styled.div`
	display: none;
	max-width: 600px;
	margin: 0 auto;
	
	@media (max-width: 768px) {
		display: block;
		
		> div {
			margin-bottom: ${spacing[3]};
			
			&:last-child {
				margin-bottom: 0;
			}
		}
	}
`;



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
	const [showContactDialog, setShowContactDialog] = React.useState(false);

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
					
					{/* Desktop Grid Layout */}
					<ServicesGrid>
						{SERVICES.map((service) => (
							<div key={service.title} style={{
								backgroundColor: colors.white,
								padding: spacing[6],
								borderRadius: '1rem',
								boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
								border: `1px solid ${colors.gray200}`,
								transition: 'all 0.3s ease',
								cursor: 'pointer'
							}}>
								<Typography variant="h6" color="primary" style={{ 
									marginBottom: spacing[3],
									fontWeight: 600,
									fontSize: '1.25rem'
								}}>
									{service.title}
								</Typography>
								<Typography variant="body1" color="secondary" style={{ 
									lineHeight: 1.7,
									fontSize: '1rem'
								}}>
									{service.description}
								</Typography>
							</div>
						))}
					</ServicesGrid>

					{/* Mobile Accordion Layout */}
					<MobileAccordion>
						{SERVICES.map((service) => (
							<Accordion
								key={service.title}
								title={service.title}
								defaultExpanded={false}
							>
								<Typography variant="body1" color="secondary" style={{ 
									lineHeight: 1.6,
									fontSize: '1rem'
								}}>
									{service.description}
								</Typography>
							</Accordion>
						))}
					</MobileAccordion>
					
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

			{/* Consultants Section */}
			<PageSection variant="testimonial" align="center">
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
				<ConsultantScroller 
					variant="showcase"
					consultants={[{
						name: "Michael Hultgren",
						title: "Senior Byggprojektledare",
						image: "/michael.jpg",
						experience: "10+ års erfarenhet",
						skills: [
							"Projektledning",
							"Byggledning", 
							"PBL Kontrollansvarig",
							"Kvalitetskontroll",
							"Hållbara bygglösningar",
							"Teamledning"
						],
						certifications: [
							{ name: "PBL Kontrollansvarig", year: "2023", issuer: "Boverket" },
							{ name: "ISO 9001 Lead Auditor", year: "2022", issuer: "DNV" },
							{ name: "PMP Certification", year: "2021", issuer: "PMI" }
						],
						status: "available",
						variant: "featured",
						onContact: () => {
							setShowContactDialog(true);
						},
						
					}]}
				/>
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
						onClick={() => {
							// Open ContactUs dialog
							setShowContactDialog(true);
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
						onClick={() => {
							setShowContactDialog(true);
						}}
					>
						Se våra tjänster
						<ArrowForward />
					</Button>
				</div>
			</PageSection>

			{/* Contact Section */}
			<PageSection variant="testimonial" align="center">
				<div id="contact-section" style={{ textAlign: 'center', marginBottom: spacing[8] }}>
					<Typography variant="h2" color="primary" style={{ marginBottom: spacing[4] }}>
						Kontakta oss
					</Typography>
					<div style={{ 
						width: 80, 
						height: 3, 
						background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
						borderRadius: "2px",
						margin: '0 auto',
						marginBottom: spacing[6]
					}} />
					<Typography variant="h5" color="secondary" style={{ 
						maxWidth: 700, 
						margin: '0 auto',
						lineHeight: 1.6
					}}>
						Har du frågor eller vill diskutera ditt nästa projekt? Vi finns här
						för att hjälpa dig vidare. Skicka oss ett meddelande så återkommer vi snart!
					</Typography>
				</div>
				
        {/* Contact Information */}
        <Typography variant="h5" color="secondary" style={{ 
          textAlign: 'center',
          marginTop: spacing[4]
        }}>
          <a href="mailto:info@reachmanagement.se" style={{ 
            color: 'inherit',
            textDecoration: 'none',
            fontFamily: 'inherit',
            fontWeight: 'inherit'
          }}>
            info@reachmanagement.se
          </a>
        </Typography>
			</PageSection>
			{/* ContactUs dialog */}
			{showContactDialog && (
				<ContactUs 
					triggerOpen={true}
					onClose={() => setShowContactDialog(false)}
				/>
			)}
		</div>
	);
}
