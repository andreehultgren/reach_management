import { createFileRoute } from "@tanstack/react-router";

import { 
	Typography, 
	Accordion, 
	PageSection, 
	HeroSection
} from "../ui";
import { colors, spacing } from "../ui/design-tokens";
import ContactUs from "../components/ContactUs";

export const Route = createFileRoute("/om-oss")({
	component: LandingPage,
});

export default function LandingPage() {
	return (
		<div>
			<HeroSection
				title="Om oss"
				subtitle="Vi når längre tillsammans"
				backgroundImage="/assets/Stairs_desktop.jpg"
			/>
			<PageSection variant="feature" align="center">
				<div style={{ maxWidth: 800, margin: '0 auto' }}>
					<div style={{ textAlign: 'center', marginBottom: spacing[8] }}>
						<Typography variant="h2" color="primary" style={{ marginBottom: spacing[4] }}>
							Vi når längre tillsammans
						</Typography>
						<div style={{ 
							width: 80, 
							height: 2, 
							backgroundColor: colors.primary,
							borderRadius: "1px",
							margin: '0 auto',
							marginBottom: spacing[6]
						}} />
					</div>
					<Typography variant="body1" color="secondary" style={{ 
						fontSize: "1.1rem", 
						lineHeight: 1.7, 
						textAlign: "center",
						marginBottom: spacing[6]
					}}>
						Reach Management föddes ur en övertygelse: att framgångsrika
						projekt skapas genom samarbete, engagemang och modet att sträcka
						sig längre än det självklara. Vi ser oss inte bara som konsulter -
						vi är en partner som går vid din sida genom hela resan.
					</Typography>
					<Typography variant="body1" color="secondary" style={{ 
						fontSize: "1.1rem", 
						lineHeight: 1.7, 
						textAlign: "center" 
					}}>
						För oss handlar projektledning inte bara om att leverera i tid och
						inom budget. Det handlar om att nå längre tillsammans - att skapa
						resultat som ger värde både här och nu och på lång sikt.
					</Typography>
				</div>
			</PageSection>
			<PageSection variant="testimonial" align="center">
				<div style={{ maxWidth: 800, margin: '0 auto' }}>
					<div style={{ textAlign: 'center', marginBottom: spacing[8] }}>
						<Typography variant="h2" color="primary" style={{ marginBottom: spacing[4] }}>
							Vad betyder Reach Management
						</Typography>
						<div style={{ 
							width: 80, 
							height: 2, 
							backgroundColor: colors.primary,
							borderRadius: "1px",
							margin: '0 auto',
							marginBottom: spacing[6]
						}} />
					</div>
					
					<div style={{ 
						backgroundColor: colors.white, 
						padding: spacing[12], 
						borderRadius: '1.5rem',
						boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.06)',
						border: `1px solid ${colors.gray200}`,
					}}>
						<Typography variant="h5" color="primary" style={{ marginBottom: spacing[6], textAlign: "center" }}>
							Namnet Reach Management symboliserar vårt sätt att arbeta:
						</Typography>
						<div style={{ display: 'flex', flexDirection: 'column', gap: spacing[8] }}>
							<div style={{ display: 'flex', flexDirection: 'row', gap: spacing[6], alignItems: 'center' }}>
								<div style={{
									width: 80,
									height: 80,
									borderRadius: "50%",
									background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									color: colors.white,
									fontWeight: 700,
									fontSize: "1.5rem",
									flexShrink: 0,
								}}>
									R
								</div>
								<div>
									<Typography variant="h4" color="primary" style={{ fontWeight: 600, marginBottom: spacing[2] }}>
										Reach
									</Typography>
									<Typography variant="body1" color="secondary" style={{ lineHeight: 1.6 }}>
										symboliserar vårt fokus på att sträcka oss bortom
										det förväntade och skapa lösningar som håller över tid.
									</Typography>
								</div>
							</div>
							
							<div style={{ display: 'flex', flexDirection: 'row', gap: spacing[6], alignItems: 'center' }}>
								<div style={{
									width: 80,
									height: 80,
									borderRadius: "50%",
									background: `linear-gradient(135deg, ${colors.accent}, ${colors.primary})`,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									color: colors.white,
									fontWeight: 700,
									fontSize: "1.5rem",
									flexShrink: 0,
								}}>
									M
								</div>
								<div>
									<Typography variant="h4" color="primary" style={{ fontWeight: 600, marginBottom: spacing[2] }}>
										Management
									</Typography>
									<Typography variant="body1" color="secondary" style={{ lineHeight: 1.6 }}>
										representerar vårt kärnområde - att leda,
										samordna och driva projekt framåt.
									</Typography>
								</div>
							</div>
						</div>
						
						<div style={{ 
							marginTop: spacing[8], 
							padding: spacing[6], 
							backgroundColor: colors.gray50, 
							borderRadius: "1rem",
							border: `1px solid ${colors.gray200}`,
							textAlign: "center"
						}}>
							<Typography variant="h5" color="primary" style={{ fontWeight: 600, marginBottom: spacing[4] }}>
								Tillsammans blir det mer än bara ett namn
							</Typography>
							<Typography variant="h4" style={{ 
								background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								fontWeight: 700,
							}}>
								Reach Management - Vi når längre tillsammans
							</Typography>
						</div>
					</div>
				</div>
			</PageSection>
			<PageSection variant="feature" align="center">
				<div style={{ maxWidth: 800, margin: '0 auto' }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: spacing[8] }}>
						<div style={{ textAlign: 'center', marginBottom: spacing[8] }}>
							<Typography variant="h2" color="primary" style={{ marginBottom: spacing[4] }}>
								Vilka vi är
							</Typography>
							<div style={{ 
								width: 80, 
								height: 2, 
								backgroundColor: colors.primary,
								borderRadius: "1px",
								margin: '0 auto',
								marginBottom: spacing[6]
							}} />
						</div>
						
						<Typography variant="h5" color="primary" style={{ textAlign: "center", marginBottom: spacing[8] }}>
							Reach Management är ett konsultföretag inom bygg- och
							fastighetsbranschen. Vi erbjuder tjänster inom:
						</Typography>
						
						<div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
							{[
								{ title: "Projektledning", desc: "struktur och tydlighet i hela processen" },
								{ title: "Projekteringsledning", desc: "samordning och kvalitetssäkring från start till mål" },
								{ title: "Byggledning", desc: "närvaro i produktionen och ledning med fokus på säkerhet och resultat" },
								{ title: "Kontrollansvarig (KA) enligt PBL", desc: "ansvar för att lagkrav följs och att projektet uppfyller bygglagstiftningens krav" }
							].map((service, index) => (
								<div key={service.title} style={{ 
									backgroundColor: colors.gray50, 
									padding: spacing[8], 
									borderRadius: "1rem",
									border: `1px solid ${colors.gray200}`,
									transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
								}}>
									<div style={{ display: 'flex', flexDirection: 'row', gap: spacing[6], alignItems: 'flex-start' }}>
										<div style={{
											width: 40,
											height: 40,
											borderRadius: "50%",
											background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											color: colors.white,
											fontWeight: 600,
											fontSize: "1.1rem",
											flexShrink: 0,
											marginTop: 2,
										}}>
											{index + 1}
										</div>
										<div>
											<Typography variant="h5" color="primary" style={{ fontWeight: 600, marginBottom: spacing[2] }}>
												{service.title}
											</Typography>
											<Typography variant="body1" color="secondary" style={{ lineHeight: 1.6 }}>
												{service.desc}
											</Typography>
										</div>
									</div>
								</div>
							))}
						</div>
						
						<div style={{ 
							backgroundColor: colors.primaryLight, 
							padding: spacing[8], 
							borderRadius: "1rem",
							border: `1px solid ${colors.primary}`,
							textAlign: "center"
						}}>
							<Typography variant="body1" color="primary" style={{ lineHeight: 1.6, marginBottom: spacing[4] }}>
								Vi stöttar beställare och fastighetsägare genom hela byggprocessen
								- från idé till färdigställd produkt.
							</Typography>
							<Typography variant="body1" color="primary" style={{ lineHeight: 1.6, fontWeight: 600 }}>
								Vi fungerar som en förlängning av din organisation - med
								engagemanget hos en partner och precisionen hos en specialist.
							</Typography>
						</div>
					</div>
				</div>
			</PageSection>

			<PageSection variant="testimonial" align="center">
				<div style={{ maxWidth: 800, margin: '0 auto' }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: spacing[8] }}>
						<div style={{ textAlign: 'center', marginBottom: spacing[8] }}>
							<Typography variant="h2" color="primary" style={{ marginBottom: spacing[4] }}>
								Vårt erbjudande
							</Typography>
							<div style={{ 
								width: 80, 
								height: 2, 
								backgroundColor: colors.primary,
								borderRadius: "1px",
								margin: '0 auto',
								marginBottom: spacing[6]
							}} />
						</div>
						
						<div style={{ 
							backgroundColor: colors.white, 
							padding: spacing[12], 
							borderRadius: '1.5rem',
							boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.06)',
							border: `1px solid ${colors.gray200}`,
						}}>
							<Typography variant="body1" color="secondary" style={{ fontSize: "1.1rem", lineHeight: 1.7, marginBottom: spacing[6] }}>
								Vi erbjuder flexibla och kundanpassade konsulttjänster. Oavsett om
								det gäller kortare uppdrag eller långsiktiga samarbeten bidrar vi
								med det som gör skillnad: struktur, innovation och förmågan att
								driva projekt framåt på ett tryggt och effektivt sätt.
							</Typography>
							<Typography variant="body1" color="secondary" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
								Vår styrka är att alltid se helheten – att förstå visionen bakom
								projektet och omsätta den i verklighet. När vi arbetar tillsammans
								kan vi nå längre än vad någon av oss kan ensam.
							</Typography>
						</div>
					</div>
				</div>
			</PageSection>

			<PageSection variant="feature" align="center">
				<div style={{ maxWidth: 800, margin: '0 auto' }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: spacing[8] }}>
						<div style={{ textAlign: 'center', marginBottom: spacing[8] }}>
							<Typography variant="h2" color="primary" style={{ marginBottom: spacing[4] }}>
								Därför Reach Management
							</Typography>
							<div style={{ 
								width: 80, 
								height: 2, 
								backgroundColor: colors.primary,
								borderRadius: "1px",
								margin: '0 auto',
								marginBottom: spacing[6]
							}} />
						</div>
						
						<div style={{ 
							backgroundColor: colors.gray50, 
							padding: spacing[12], 
							borderRadius: '1.5rem',
							border: `1px solid ${colors.gray200}`,
						}}>
							<Typography variant="body1" color="secondary" style={{ fontSize: "1.1rem", lineHeight: 1.7, marginBottom: spacing[6] }}>
								Hos oss får du mer än en konsult. Du får en partner som tar ansvar
								för helheten, som ser längre än bara tidplan och budget. Vi vågar
								utmana och tänka nytt, men vi står alltid på en grund av ärlighet
								och struktur.
							</Typography>
							<Typography variant="body1" color="secondary" style={{ fontSize: "1.1rem", lineHeight: 1.7, fontWeight: 600 }}>
								Vi skiljer oss genom vårt engagemang och vår vilja att gå den
								extra milen. För oss handlar det om mer än att leverera – det
								handlar om att skapa värde som består.
							</Typography>
						</div>
					</div>
				</div>
			</PageSection>

			<PageSection variant="testimonial" align="center">
				<div style={{ maxWidth: 800, margin: '0 auto' }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: spacing[8] }}>
						<Typography variant="h2" color="primary" style={{ textAlign: 'center', marginBottom: spacing[8] }}>
							Våra kärnvärden
						</Typography>
						
						<div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
							<Accordion title="Ärlighet">
								<Typography variant="body1" color="secondary" style={{ lineHeight: 1.6 }}>
									Vi döljer aldrig problem. Vi löser dem. Transparens och öppenhet är grunden för allt vi gör.
								</Typography>
							</Accordion>

							<Accordion title="Struktur">
								<Typography variant="body1" color="secondary" style={{ lineHeight: 1.6 }}>
									Vi håller vad vi lovar - varje gång. Systematik och förutsägbarhet skapar trygghet för alla.
								</Typography>
							</Accordion>

							<Accordion title="Innovation">
								<Typography variant="body1" color="secondary" style={{ lineHeight: 1.6 }}>
									Vi hittar nya vägar där andra ser hinder. Kreativitet och mod att tänka annorlunda driver oss framåt.
								</Typography>
							</Accordion>

							<Accordion title="Kundfokus">
								<Typography variant="body1" color="secondary" style={{ lineHeight: 1.6 }}>
									Din framgång är vårt uppdrag. Vi sätter alltid dina behov och mål i centrum för allt vi gör.
								</Typography>
							</Accordion>

						</div>
						
						{/* Quality and Environment Policies */}
						<div style={{ marginTop: spacing[8] }}>
							<Typography variant="h3" color="primary" style={{ textAlign: 'center', marginBottom: spacing[6] }}>
								Våra policys
							</Typography>
							<div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
								<div style={{ 
									flex: 1, 
									backgroundColor: colors.white, 
									padding: spacing[8], 
									borderRadius: "0.75rem",
									border: `1px solid ${colors.gray200}`,
									boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
								}}>
									<Typography variant="h4" color="primary" style={{ marginBottom: spacing[4] }}>
										Kvalitetspolicy
									</Typography>
									<Typography variant="body2" color="secondary" style={{ fontStyle: "italic" }}>
										Vi arbetar kontinuerligt med att förbättra våra processer och säkerställa högsta kvalitet i alla våra leveranser.
									</Typography>
								</div>
								<div style={{ 
									flex: 1, 
									backgroundColor: colors.white, 
									padding: spacing[8], 
									borderRadius: "0.75rem",
									border: `1px solid ${colors.gray200}`,
									boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
								}}>
									<Typography variant="h4" color="primary" style={{ marginBottom: spacing[4] }}>
										Miljöpolicy
									</Typography>
									<Typography variant="body2" color="secondary" style={{ fontStyle: "italic" }}>
										Hållbarhet och miljöansvar är centralt i vårt arbetssätt. Vi strävar efter att minimera miljöpåverkan i alla våra projekt.
									</Typography>
								</div>
							</div>
						</div>
					</div>
				</div>
			</PageSection>

			<PageSection variant="cta" align="center">
				<div style={{ maxWidth: 800, margin: '0 auto' }}>
					<Typography variant="h3" color="primary" style={{ marginBottom: spacing[6] }}>
						Hör av dig så når vi längre tillsammans
					</Typography>
					<Typography variant="body1" color="secondary" style={{ marginBottom: spacing[8] }}>
						Har du ett projekt på gång eller vill du veta mer om hur vi kan
						hjälpa dig? Tveka inte att höra av dig.
					</Typography>
					<ContactUs />
				</div>
			</PageSection>
		</div>
	);
}
