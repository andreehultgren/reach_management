import { createFileRoute } from "@tanstack/react-router";

import { 
	Typography, 
	Button, 
	PageSection, 
	HeroSection
} from "../ui";
import { colors, spacing } from "../ui/design-tokens";
import { COMPANY_INFO } from "../constants";

export const Route = createFileRoute("/jobba-hos-oss")({
	component: LandingPage,
});

export default function LandingPage() {
	return (
		<div>
			<HeroSection
				title="Jobba hos oss"
				subtitle="Bli en del av vårt team och hjälp oss att nå längre tillsammans"
				backgroundImage="/assets/buildings_sunset_desktop.jpg"
			/>
			<PageSection variant="feature" align="center">
				<div style={{ maxWidth: 1200, margin: '0 auto' }}>
					<div style={{ 
						display: 'flex', 
						flexDirection: 'column', 
						gap: spacing[8], 
						alignItems: 'center'
					}}>
						{/* Text Content */}
						<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: spacing[8] }}>
							<div>
								<Typography variant="h2" color="primary" style={{ marginBottom: spacing[6] }}>
									Jobba hos oss
								</Typography>
								<div style={{ 
									width: 60, 
									height: 2, 
									backgroundColor: colors.primary,
									borderRadius: "1px",
									marginBottom: spacing[8]
								}} />
							</div>
							<Typography variant="body1" color="secondary" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
								Vi bygger ett bolag som växer långsiktigt och söker alltid efter
								människor som delar våra värderingar - ärlighet, struktur,
								innovation och kundfokus.
							</Typography>
							<Typography variant="body1" color="secondary" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
								Hos oss får du mer än bara ett uppdrag. Du får en miljö där vi når
								längre tillsammans - som team, med våra kunder och i projekten vi
								driver.
							</Typography>
							<Typography variant="body1" color="secondary" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
								Är du intresserad av att arbeta med oss? Hör av dig och berätta
								mer om dig själv - vi är alltid öppna för nya samarbeten.
							</Typography>
							
							{/* Call to Action */}
							<div style={{ marginTop: spacing[8] }}>
								<Button
									variant="primary"
									size="large"
									onClick={() => {
										window.location.href = `mailto:${COMPANY_INFO.email}?subject=Spontanansökan - Reach Management`;
									}}
								>
									Skicka spontanansökan
								</Button>
							</div>
						</div>
						
						{/* Image */}
						<div style={{ 
							flex: 1, 
							maxWidth: 500,
							borderRadius: "1.5rem",
							overflow: "hidden",
							boxShadow: "0 20px 40px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.06)",
							position: "relative",
							transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
						}}>
							<img
								src="/wip.jpg"
								alt="Team at work"
								style={{ 
									width: "100%", 
									height: "auto", 
									objectFit: "cover",
									aspectRatio: "4/3"
								}}
							/>
						</div>
					</div>
				</div>
			</PageSection>
		</div>
	);
}
