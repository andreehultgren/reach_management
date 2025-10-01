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
	grid-template-columns: repeat(2, 1fr);
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
		description: "Som projekteringsledare samordnar vi alla discipliner i projekteringsarbetet – från tidiga koncept till byggstart. Vi säkerställer kvalitet, struktur och effektivitet i leveranserna, och ser till att kundens mål och krav alltid står i centrum."
	},
	{
		title: "Byggledning",
		description: "Som byggledare företräder vi beställaren och ser till att entreprenörerna följer avtal, tidsplan och ekonomi. Vi samordnar, kontrollerar och driver byggskedet så att projektet så att projektet genomförs på ett effektivt och kvalitativt sätt."
	},
	{
		title: "Kontrollansvarig enligt PBL",
		description: "Som certifierade kontrollansvariga enligt PBL ser vi till att lagkrav följs, kontrollplanen hålls och att projektet kan godkännas av byggnadsnämnden."
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
						onClick: () => {
							window.location.href = '/tjanster';
						}
					}
				]}
			/>

			{/* About Section */}
			<PageSection variant="feature" align="center">
				<ImageText
					image={{
						src: "/assets/Kran_mot_himmelen_desktop.jpg",
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
						width: 200, 
						height: 3, 
						background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
						borderRadius: "2px",
						marginBottom: spacing[6]
					}} />
					<Typography variant="h5" color="secondary" style={{ maxWidth: 600, margin: '12px auto' }}>
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
							onClick={() => {
								window.location.href = '/tjanster';
							}}
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
						src: "/assets/lightbulb_in_hands_desktop.jpg",
						alt: "Teamwork"
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
						width: 200, 
						height: 3, 
						background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
						borderRadius: "2px",
						marginBottom: spacing[6]
					}} />
					<Typography variant="h5" color="secondary" style={{ maxWidth: 600, margin: '12px auto' }}>
						Erfarna experter som driver dina projekt framåt
					</Typography>
				</div>
				<ConsultantScroller 
					variant="showcase"
					consultants={[{
						name: "Michael Hultgren",
						roles: [
							"Projektledare",
							"Projekteringsledare", 
							"Byggledare",
							"KA enligt PBL"
						],
						image: "/michael.jpg",
						experience: "10+ års erfarenhet",
						certifications: [
							{ name: "Kontrollansvarig enligt PBL", year: "2025", issuer: "RISE" }
						],
						variant: "featured",
						email: "michael.hultgren@reachmanagement.se",
						phone: "+46 70 108 10 22"
					}]}
				/>
			</PageSection>


			{/* About Us Section */}
			<PageSection variant="feature" align="center">
				<div style={{ textAlign: 'center', marginBottom: spacing[8] }}>
					<Typography variant="h2" color="primary" style={{ marginBottom: spacing[4] }}>
						Lär känna oss bättre
					</Typography>
					<div style={{ 
						width: 200, 
						height: 3, 
						background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
						borderRadius: "2px",
						marginBottom: spacing[6],
						marginLeft: 0
					}} />
					<Typography variant="h5" color="secondary" style={{ 
						maxWidth: 600, 
						margin: '12px auto',
						lineHeight: 1.6
					}}>
						Upptäck vår historia, våra värderingar och hur vi kan hjälpa dig att nå dina mål inom bygg- och fastighetsbranschen.
					</Typography>
				</div>
				
				<div style={{ textAlign: 'center' }}>
					<Button
						variant="primary"
						size="large"
						onClick={() => {window.location.href = '/om-oss'}}
						style={{ 
							fontSize: "1.2rem",
							fontWeight: 600,
							padding: `${spacing[4]} ${spacing[8]}`,
							borderRadius: "1rem",
							display: 'flex',
							alignItems: 'center',
							gap: spacing[2],
							margin: '0 auto'
						}}
					>
						Läs mer om oss
						<ArrowForward />
					</Button>
				</div>
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
							window.location.href = '/tjanster';
						}}
					>
						Se våra tjänster
						<ArrowForward />
					</Button>
				</div>
			</PageSection>

		</div>
	);
}
