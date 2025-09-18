import { useState } from 'react';
import { styled } from 'styled-components';
import { COLORS, SPACING } from '../constants';
import { Button } from '../ui/components/atoms/Button';
import { Typography } from '../ui/components/atoms/Typography';
import { Card } from '../ui/components/molecules/Card/Card';
import { Accordion } from '../ui/components/molecules/Accordion/Accordion';
import { ConsultantScroller } from '../ui/components/molecules/ConsultantScroller/ConsultantScroller';
import { Dialog } from '../ui/components/molecules/Dialog/Dialog';
import { ImageText } from '../ui/components/molecules/ImageText/ImageText';
import { ProjectCard } from '../ui/components/molecules/ProjectCard/ProjectCard';
import { Tabs } from '../ui/components/molecules/Tabs/Tabs';
import { Navbar } from '../ui/components/organisms/Navbar/Navbar';
import { Footer } from '../ui/components/organisms/Footer/Footer';
import { HeroSection } from '../ui/components/templates/HeroSection/HeroSection';
import { PageSection } from '../ui/components/templates/PageSection/PageSection';
// Removed unused MUI icons to fix import errors

const TestContainer = styled.div`
  min-height: 100vh;
  background: ${COLORS.background};
`;

const ComponentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${SPACING.lg};
  margin: ${SPACING.lg} 0;
`;

const ColorPalette = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${SPACING.md};
  margin: ${SPACING.lg} 0;
`;

const ColorSwatch = styled.div<{ $color: string; $name: string }>`
  background: ${({ $color }) => $color};
  padding: ${SPACING.md};
  border-radius: 8px;
  text-align: center;
  color: ${({ $name }) => 
    $name.includes('white') || $name.includes('Light') || $name.includes('50') 
      ? COLORS.textPrimary 
      : COLORS.white
  };
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export default function DesignSystemTest() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const navbarLinks = [
    { label: 'Home', href: '#', active: true },
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  const tabs = [
    {
      id: 'buttons',
      label: 'Buttons',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.md }}>
          <div style={{ display: 'flex', gap: SPACING.sm, flexWrap: 'wrap' }}>
            <Button variant="primary" size="small">Primary Small</Button>
            <Button variant="primary" size="medium">Primary Medium</Button>
            <Button variant="primary" size="large">Primary Large</Button>
          </div>
          <div style={{ display: 'flex', gap: SPACING.sm, flexWrap: 'wrap' }}>
            <Button variant="secondary" size="medium">Secondary</Button>
            <Button variant="outline" size="medium">Outline</Button>
            <Button variant="ghost" size="medium">Ghost</Button>
          </div>
        </div>
      ),
    },
    {
      id: 'cards',
      label: 'Cards',
      content: (
        <ComponentGrid>
          <Card elevation={2} image={{ src: '/assets/innovation.jpg', alt: 'Innovation' }}>
            <Typography variant="h5" color="primary">Card with Image</Typography>
            <Typography variant="body2" color="secondary">
              This is a card with an image and some content to demonstrate the new color scheme.
            </Typography>
          </Card>
          <Card elevation={3}>
            <Typography variant="h5" color="primary">Simple Card</Typography>
            <Typography variant="body2" color="secondary">
              A simple card without an image to showcase the clean design.
            </Typography>
          </Card>
        </ComponentGrid>
      ),
    },
    {
      id: 'typography',
      label: 'Typography',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.md }}>
          <Typography variant="h1" color="primary">Heading 1</Typography>
          <Typography variant="h2" color="primary">Heading 2</Typography>
          <Typography variant="h3" color="primary">Heading 3</Typography>
          <Typography variant="body1" color="secondary">Body text with secondary color</Typography>
          <Typography variant="body2" color="text">Body text with default color</Typography>
          <Typography variant="caption" color="accent">Caption with accent color</Typography>
        </div>
      ),
    },
    {
      id: 'image-text',
      label: 'Image & Text',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.lg }}>
          <Typography variant="h4" color="primary">Left Orientation</Typography>
          <ImageText
            image={{ src: "/assets/innovation.jpg", alt: "Innovation" }}
            title="Compact Design"
            content="This is a much more compact and visually appealing ImageText component that doesn't take up excessive space."
            orientation="left"
          />
          
          <Typography variant="h4" color="primary" style={{ marginTop: SPACING.lg }}>Center Orientation</Typography>
          <ImageText
            image={{ src: "/assets/innovation.jpg", alt: "Innovation" }}
            title="Centered Layout"
            content="The center orientation now has a subtle background and is properly constrained for better visual hierarchy."
            orientation="center"
          />
        </div>
      ),
    },
    {
      id: 'consultants',
      label: 'Consultants',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.lg }}>
          <Typography variant="h4" color="primary">Grid Layout</Typography>
          <ConsultantScroller
            variant="grid"
            consultants={[
              {
                name: "Michael Hultgren",
                title: "Senior Project Manager",
                image: "/michael.jpg",
                experience: "10+ years",
                skills: ["Project Management", "Construction", "PBL", "Quality Control", "Team Leadership", "Risk Management"],
                certifications: [
                  { name: "PBL Kontrollansvarig", year: "2023", issuer: "Boverket" },
                  { name: "ISO 9001 Lead Auditor", year: "2022", issuer: "DNV" },
                  { name: "PMP Certification", year: "2021", issuer: "PMI" }
                ],
                status: "available",
                variant: "featured",
                onContact: () => {},
                onViewProfile: () => {}
              },
              {
                name: "Anna Lindqvist",
                title: "Structural Engineer",
                image: "/assets/innovation.jpg",
                experience: "8+ years",
                skills: ["Structural Design", "CAD", "Building Codes", "Safety Analysis", "Concrete", "Steel"],
                certifications: [
                  { name: "Chartered Engineer", year: "2022", issuer: "IStructE" },
                  { name: "Eurocode Specialist", year: "2021", issuer: "CEN" }
                ],
                status: "employed",
                onContact: () => {},
                onViewProfile: () => {}
              },
              {
                name: "Erik Johansson",
                title: "Construction Manager",
                image: "/assets/innovation.jpg",
                experience: "12+ years",
                skills: ["Site Management", "Safety", "Scheduling", "Cost Control", "Subcontractors", "Quality"],
                certifications: [
                  { name: "NEBOSH Construction", year: "2023", issuer: "NEBOSH" },
                  { name: "CSCS Black Card", year: "2022", issuer: "CSCS" }
                ],
                status: "busy",
                variant: "minimal",
                onContact: () => {},
                onViewProfile: () => {}
              }
            ]}
          />
          
          <Typography variant="h4" color="primary" style={{ marginTop: SPACING.lg }}>Horizontal Scroll Layout</Typography>
          <ConsultantScroller
            variant="default"
            consultants={[
              {
                name: "Lisa Andersson",
                title: "Architect",
                image: "/assets/innovation.jpg",
                experience: "6+ years",
                skills: ["Architecture", "Design", "3D Modeling", "Sustainability", "Planning"],
                certifications: [
                  { name: "RIBA Part 3", year: "2023", issuer: "RIBA" },
                  { name: "LEED Certified", year: "2022", issuer: "USGBC" }
                ],
                status: "available",
                onContact: () => {},
                onViewProfile: () => {}
              },
              {
                name: "Carl Svensson",
                title: "MEP Engineer",
                image: "/assets/innovation.jpg",
                experience: "9+ years",
                skills: ["HVAC", "Electrical", "Plumbing", "Energy Efficiency", "Building Systems"],
                certifications: [
                  { name: "Chartered Engineer", year: "2022", issuer: "IET" },
                  { name: "Energy Assessor", year: "2021", issuer: "BRE" }
                ],
                status: "available",
                onContact: () => {},
                onViewProfile: () => {}
              }
            ]}
          />
        </div>
      ),
    },
  ];

  return (
    <TestContainer>
      <Navbar
        logo={{ text: 'Reach Management', href: '#' }}
        links={navbarLinks}
        ctaButton={{ text: 'Get Started', onClick: () => setIsDialogOpen(true) }}
      />
      
      <HeroSection
        title="Design System Showcase"
        subtitle="White • Grey • Gold"
        description="Experience our updated design system with a sophisticated white, grey, and gold color palette that creates a modern, professional aesthetic."
        backgroundImage="/assets/innovation.jpg"
        actions={[
          { text: 'Explore Components', variant: 'primary', onClick: () => {} },
          { text: 'View Colors', variant: 'outline', onClick: () => {} },
        ]}
      />

      <PageSection variant="feature">
        <Typography variant="h2" color="primary" align="center">
          Color Palette
        </Typography>
        <ColorPalette>
          <ColorSwatch $color={COLORS.primary} $name="primary">Primary<br/>{COLORS.primary}</ColorSwatch>
          <ColorSwatch $color={COLORS.primaryLight} $name="primaryLight">Primary Light<br/>{COLORS.primaryLight}</ColorSwatch>
          <ColorSwatch $color={COLORS.accent} $name="accent">Accent<br/>{COLORS.accent}</ColorSwatch>
          <ColorSwatch $color={COLORS.accentLight} $name="accentLight">Accent Light<br/>{COLORS.accentLight}</ColorSwatch>
          <ColorSwatch $color={COLORS.white} $name="white">White<br/>{COLORS.white}</ColorSwatch>
          <ColorSwatch $color={COLORS.gray100} $name="gray100">Gray 100<br/>{COLORS.gray100}</ColorSwatch>
          <ColorSwatch $color={COLORS.gray200} $name="gray200">Gray 200<br/>{COLORS.gray200}</ColorSwatch>
          <ColorSwatch $color={COLORS.gray500} $name="gray500">Gray 500<br/>{COLORS.gray500}</ColorSwatch>
        </ColorPalette>
      </PageSection>

      <PageSection variant="default">
        <Typography variant="h2" color="primary" align="center">
          Component Library
        </Typography>
        <Tabs tabs={tabs} defaultActiveTab="buttons" />
      </PageSection>

      <PageSection variant="testimonial">
        <Typography variant="h2" color="primary" align="center">
          Interactive Components
        </Typography>
        <ComponentGrid>
          <Accordion title="Accordion Example" defaultExpanded>
            <Typography variant="body1" color="secondary">
              This accordion demonstrates the new color scheme with smooth animations and hover effects.
              The primary color is now a sophisticated dark grey instead of blue.
            </Typography>
          </Accordion>
          <Accordion title="Another Accordion">
            <Typography variant="body1" color="secondary">
              Multiple accordions can be used to create organized, collapsible content sections.
            </Typography>
          </Accordion>
        </ComponentGrid>
      </PageSection>

      <PageSection variant="default">
        <Typography variant="h2" color="primary" align="center">
          Project Cards
        </Typography>
        <ComponentGrid>
          <ProjectCard
            title="Modern Office Building"
            description="A contemporary office complex featuring sustainable design and modern amenities."
            image="/assets/innovation.jpg"
            status="completed"
            category="Commercial"
            year="2024"
            onViewProject={() => {}}
            onViewDetails={() => {}}
          />
          <ProjectCard
            title="Residential Complex"
            description="Luxury residential development with premium finishes and smart home technology."
            image="/assets/innovation.jpg"
            status="ongoing"
            category="Residential"
            year="2024"
            onViewProject={() => {}}
            onViewDetails={() => {}}
          />
        </ComponentGrid>
      </PageSection>

      <PageSection variant="cta">
        <Typography variant="h2" color="textOnDark" align="center">
          Ready to Get Started?
        </Typography>
        <Typography variant="body1" color="textOnDark" align="center">
          Experience the power of our updated design system with the new white, grey, and gold color palette.
        </Typography>
        <div style={{ display: 'flex', gap: SPACING.md, justifyContent: 'center', marginTop: SPACING.lg }}>
          <Button variant="primary" size="large" onClick={() => setIsDialogOpen(true)}>
            Open Dialog
          </Button>
          <Button variant="outline" size="large" onClick={() => {}}>
            Learn More
          </Button>
        </div>
      </PageSection>

      <Footer
        companyName="Reach Management"
        orgNumber="556677-8899"
        email="info@reachmanagement.se"
        links={[
          { text: 'Privacy Policy', href: '#' },
          { text: 'Terms of Service', href: '#' },
        ]}
      />

      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Design System Dialog"
        actions={
          <div style={{ display: 'flex', gap: SPACING.sm }}>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsDialogOpen(false)}>
              Confirm
            </Button>
          </div>
        }
      >
        <Typography variant="body1" color="secondary">
          This dialog demonstrates the new color scheme in action. The design system now uses a sophisticated 
          white, grey, and gold palette that creates a modern, professional appearance.
        </Typography>
      </Dialog>
    </TestContainer>
  );
}
