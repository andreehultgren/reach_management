import { createFileRoute } from "@tanstack/react-router";
import { styled } from "styled-components";
import React from "react";

import { 
	Typography, 
	Button, 
	PageSection, 
	HeroSection,
	Card,
	ImageText
} from "../ui";
import { COLORS, SPACING } from "../constants";
import ContactUs from "../components/ContactUs";

export const Route = createFileRoute("/jobba-hos-oss")({
	component: LandingPage,
});

const ValuesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: ${SPACING.lg};
	margin: ${SPACING.xxl} 0;
`;

const ValueCard = styled(Card)`
	text-align: center;
	padding: ${SPACING.lg};
	background: ${COLORS.white};
	border: 1px solid ${COLORS.gray200};
	transition: all 0.3s ease;
	
	&:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
		border-color: ${COLORS.accent};
	}
`;

const ValueIcon = styled.div`
	width: 60px;
	height: 60px;
	background: linear-gradient(135deg, ${COLORS.accent} 0%, ${COLORS.accentLight} 100%);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto ${SPACING.md};
	font-size: 24px;
	color: ${COLORS.white};
`;


const BenefitsList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: ${SPACING.md};
	margin: ${SPACING.lg} 0;
`;

const BenefitItem = styled.div`
	display: flex;
	align-items: center;
	gap: ${SPACING.sm};
	padding: ${SPACING.sm};
	background: ${COLORS.gray50};
	border-radius: 8px;
	border-left: 4px solid ${COLORS.accent};
`;

const CheckIcon = styled.div`
	width: 20px;
	height: 20px;
	background: ${COLORS.accent};
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${COLORS.white};
	font-size: 12px;
	font-weight: bold;
	flex-shrink: 0;
`;

export default function LandingPage() {
	const [showContactDialog, setShowContactDialog] = React.useState(false);

	return (
		<div>
			<HeroSection
				title="Jobba hos oss"
				subtitle="Bli en del av vårt team och hjälp oss att nå längre tillsammans"
				backgroundImage="/stockholm.jpg"
				notFullHeight
			/>
			
			{/* Main Content Section */}
			<PageSection variant="feature" align="center">
				<div style={{ maxWidth: 1200, margin: '0 auto' }}>
					<ImageText
						orientation="right"
						image={{ src: "/assets/3_pers_med_vy_desktop.jpg", alt: "Team at work" }}
						title="Våra värderingar"
						content="Vi bygger ett bolag som växer långsiktigt och söker alltid efter människor som delar våra värderingar - ärlighet, struktur, innovation och kundfokus. Hos oss får du mer än bara ett uppdrag. Du får en miljö där vi når längre tillsammans."
					/>
				</div>
			</PageSection>

			{/* Values Section */}
			<PageSection variant="default" align="center">
				<div style={{ maxWidth: 1200, margin: '0 auto' }}>
					<div style={{ textAlign: 'center', marginBottom: SPACING.xxl }}>
						<Typography variant="h2" color="primary" style={{ marginBottom: SPACING.md }}>
							Vad vi värderar
						</Typography>
						<div style={{ 
							width: 200, 
							height: 3, 
							background: `linear-gradient(90deg, ${COLORS.primary} 0%, ${COLORS.accent} 100%)`,
							borderRadius: "2px",
							margin: '12px 0px'
						}} />
					</div>
					
					<ValuesContainer>
						<ValueCard>
							<ValueIcon>🤝</ValueIcon>
							<Typography variant="h4" color="primary" style={{ marginBottom: SPACING.sm }}>
								Ärlighet
							</Typography>
							<Typography variant="body1" color="secondary">
								Vi bygger förtroende genom transparent kommunikation och ärliga relationer med våra kunder och kollegor.
							</Typography>
						</ValueCard>
						
						<ValueCard>
							<ValueIcon>📋</ValueIcon>
							<Typography variant="h4" color="primary" style={{ marginBottom: SPACING.sm }}>
								Struktur
							</Typography>
							<Typography variant="body1" color="secondary">
								Vi arbetar systematiskt och metodiskt för att leverera resultat av högsta kvalitet i alla våra projekt.
							</Typography>
						</ValueCard>
						
						<ValueCard>
							<ValueIcon>💡</ValueIcon>
							<Typography variant="h4" color="primary" style={{ marginBottom: SPACING.sm }}>
								Innovation
							</Typography>
							<Typography variant="body1" color="secondary">
								Vi omfamnar nya idéer och tekniker för att hitta bättre lösningar och förbättra våra processer.
							</Typography>
						</ValueCard>
						
						<ValueCard>
							<ValueIcon>🎯</ValueIcon>
							<Typography variant="h4" color="primary" style={{ marginBottom: SPACING.sm }}>
								Kundfokus
							</Typography>
							<Typography variant="body1" color="secondary">
								Våra kunders behov och framgång står alltid i centrum för allt vi gör och beslutar.
							</Typography>
						</ValueCard>
					</ValuesContainer>
				</div>
			</PageSection>

			{/* Benefits Section */}
			<PageSection variant="default" align="center">
				<div style={{ maxWidth: 1000, margin: '0 auto' }}>
					<div style={{ textAlign: 'center', marginBottom: SPACING.xxl }}>
						<Typography variant="h2" color="primary" style={{ marginBottom: SPACING.md }}>
							Vad vi erbjuder
						</Typography>
						<Typography variant="body1" color="secondary" style={{ fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
							Hos oss får du mer än bara ett uppdrag. Du får en miljö där vi når längre tillsammans.
						</Typography>
					</div>
					
					<BenefitsList>
						<BenefitItem>
							<CheckIcon>✓</CheckIcon>
							<Typography variant="body1" color="primary">
								Konkurrenskraftig lön och förmåner
							</Typography>
						</BenefitItem>
						<BenefitItem>
							<CheckIcon>✓</CheckIcon>
							<Typography variant="body1" color="primary">
								Flexibla arbetstider och hemarbete
							</Typography>
						</BenefitItem>
						<BenefitItem>
							<CheckIcon>✓</CheckIcon>
							<Typography variant="body1" color="primary">
								Kontinuerlig utbildning och utveckling
							</Typography>
						</BenefitItem>
						<BenefitItem>
							<CheckIcon>✓</CheckIcon>
							<Typography variant="body1" color="primary">
								Moderna verktyg och tekniker
							</Typography>
						</BenefitItem>
						<BenefitItem>
							<CheckIcon>✓</CheckIcon>
							<Typography variant="body1" color="primary">
								Stark teamkänsla och samarbete
							</Typography>
						</BenefitItem>
						<BenefitItem>
							<CheckIcon>✓</CheckIcon>
							<Typography variant="body1" color="primary">
								Möjlighet att påverka och växa
							</Typography>
						</BenefitItem>
					</BenefitsList>
				</div>
			</PageSection>

			{/* CTA Section */}
			<PageSection variant="cta" align="center">
				<div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
					<Typography variant="h2" style={{ marginBottom: SPACING.md, color: 'white' }}>
						Redo att börja?
					</Typography>
					<Typography variant="h5" style={{ marginBottom: SPACING.xxl, color: 'white', opacity: 0.9 }}>
						Är du intresserad av att arbeta med oss? Hör av dig och berätta mer om dig själv - vi är alltid öppna för nya samarbeten.
					</Typography>
					<Button
						variant="primary"
						size="large"
						onClick={() => {
							setShowContactDialog(true);
						}}
					>
						Skicka spontanansökan
					</Button>
				</div>
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
