import { createFileRoute } from "@tanstack/react-router";
import { styled } from "styled-components";

import { 
	Typography, 
	Accordion, 
	PageSection, 
	HeroSection
} from "../ui";
import { colors, spacing, breakpoints } from "../ui/design-tokens";
import ContactUs from "../components/ContactUs";

const CertificationContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: ${spacing[6]};
	align-items: center;
	width: 100%;
	box-sizing: border-box;
	
	@media (max-width: ${breakpoints.sm}) {
		flex-direction: column;
		text-align: center;
		gap: ${spacing[4]};
	}
`;

const ImageContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 0;
`;

const TextContainer = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	gap: ${spacing[2]};
	min-width: 0;
`;

export const Route = createFileRoute("/tjanster")({
	component: Tjanster,
});

export default function Tjanster() {
	return (
		<div style={{ width: '100%', overflow: 'hidden' }}>
			<HeroSection
				title="Tjänster"
				subtitle="Vi erbjuder kompletta lösningar för alla delar av byggprocessen"
				backgroundImage="/assets/Stadsvy_scyscrapers_desktop.jpg"
				notFullHeight
			/>
			<PageSection variant="feature" align="center">
				<div style={{ 
					maxWidth: 900, 
					margin: '0 auto',
					width: '100%',
					padding: '0 16px',
					boxSizing: 'border-box'
				}}>
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
						<Typography variant="h5" color="secondary" style={{ maxWidth: 600, margin: '12px 8px' }}>
							Vi erbjuder kompletta lösningar för alla delar av byggprocessen
						</Typography>
					</div>
						
					<div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
						<Accordion title="Projektledning">
							<div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
								<Typography variant="body1" color="secondary" style={{ lineHeight: 1.6 }}>
									Vi driver projekt från idé till färdig produkt med fokus på
									struktur, kommunikation och resultat. Som projektledare tar vi
									ansvar för planering, styrning och uppföljning - alltid med
									kundens mål i centrum.
								</Typography>
								<Typography variant="body1" color="secondary" style={{ lineHeight: 1.6 }}>
									Vår roll är att skapa ordning och tydlighet i komplexa processer
									och att vara länken mellan alla aktörer. Med ett helhetsperspektiv
									säkerställer vi att projektet levereras i tid, inom budget och med
									rätt kvalitet.
								</Typography>
							</div>
						</Accordion>

						<Accordion title="Projekteringsledning">
							<div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
								<Typography variant="body1" color="secondary" style={{ lineHeight: 1.6 }}>
									En lyckad projektering är grunden för ett bra genomförande. Vi
									leder och samordnar projekteringsarbetet så att arkitekter,
									konstruktörer och specialister arbetar mot samma mål.
								</Typography>
								<Typography variant="body1" color="secondary" style={{ lineHeight: 1.6 }}>
									Med fokus på kvalitetssäkring, kostnadskontroll och smarta
									lösningar skapar vi förutsättningar för en effektiv byggstart. Vi
									ser till att alla delar i projekteringen hänger ihop och att
									kundens vision omsätts i praktiska handlingar.
								</Typography>
							</div>
						</Accordion>

						<Accordion title="Byggledning">
							<div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
								<Typography variant="body1" color="secondary" style={{ lineHeight: 1.6 }}>
									I byggskedet krävs närvaro, kontroll och tydlig styrning. Som
									byggledare representerar vi beställaren på plats och leder
									entreprenörernas arbete så att projektet utförs enligt plan,
									lagkrav och avtal.
								</Typography>
								<Typography variant="body1" color="secondary" style={{ lineHeight: 1.6 }}>
									Vi följer upp tidplan, ekonomi och kvalitet, samtidigt som vi
									bevakar arbetsmiljö och säkerhet. Vårt mål är alltid ett väl
									genomfört projekt - färdigt på rätt sätt och med långsiktig
									hållbarhet.
								</Typography>
							</div>
						</Accordion>

						<Accordion title="Kontrollansvarig (KA) enligt PBL">
							<div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
								<Typography variant="body1" color="secondary" style={{ lineHeight: 1.6 }}>
									Som certifierade kontrollansvariga enligt Plan- och bygglagen
									(PBL) ser vi till att lagar och regler följs genom hela
									byggprocessen.
								</Typography>
								<Typography variant="body1" color="secondary" style={{ lineHeight: 1.6 }}>
									Vi upprättar kontrollplaner, följer upp att de genomförs och
									säkerställer att rätt dokumentation finns för att projektet ska
									kunna godkännas av byggnadsnämnden. Rollen som KA är en garanti
									för att projektet inte bara blir bra - utan också lagenligt och
									korrekt genomfört.
								</Typography>
								
								{/* Certification Section */}
								<div style={{ 
									backgroundColor: colors.primaryLight, 
									padding: spacing[6], 
									borderRadius: "0.75rem",
									border: `1px solid ${colors.primary}`,
									width: '100%',
									boxSizing: 'border-box'
								}}>
									<CertificationContainer>
										<ImageContainer>
											<img
												src="/rise.png"
												alt="Rise Certification"
												style={{ maxHeight: 80, objectFit: "contain", maxWidth: '100%' }}
											/>
										</ImageContainer>
										<TextContainer>
											<Typography variant="h5" color="primary" style={{ fontWeight: 600 }}>
												Personcertifieringar
											</Typography>
											<Typography variant="body2" color="secondary">
												Våra anställda har personcertifieringar för att säkerställa att vi utför arbeten på rätt sätt enligt branschstandarder och lagkrav.
											</Typography>
										</TextContainer>
									</CertificationContainer>
								</div>
							</div>
						</Accordion>
					</div>
				</div>
			</PageSection>

			<PageSection variant="cta" align="center">
				<div style={{ 
					maxWidth: 800, 
					margin: '0 auto',
					width: '100%',
					padding: '0 16px',
					boxSizing: 'border-box'
				}}>
					<Typography variant="h3" color="textOnDark" style={{ marginBottom: spacing[4] }}>
						Tillsammans driver vi dina projekt framåt
					</Typography>
					<Typography variant="body1" color="textOnDark" style={{ marginBottom: spacing[6] }}>
						Vi är här för att göra resan enklare, tydligare och tryggare - hör av dig så berättar vi mer.
					</Typography>
					<ContactUs whiteOutline={true} />
				</div>
			</PageSection>
		</div>
	);
}
