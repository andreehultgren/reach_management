# Reach Management UI Library

A comprehensive, professional UI component library built with React, TypeScript, and Styled Components. Designed for modern commercial websites with a focus on accessibility, responsiveness, and beautiful design.

## 🚀 Quick Start

```tsx
import { Button, Typography, PageSection } from '@/ui';

function MyComponent() {
  return (
    <PageSection variant="hero">
      <Typography variant="h1" color="primary">
        Welcome to Our Platform
      </Typography>
      <Button variant="primary" size="large">
        Get Started
      </Button>
    </PageSection>
  );
}
```

## 📦 Installation

The UI library is already set up in your project. Import components from the main entry point:

```tsx
import { 
  Button, 
  Typography, 
  Icon,
  Accordion,
  Card,
  ProjectCard,
  ProjectScroller,
  Tabs,
  Dialog,
  Navbar,
  Footer,
  PageSection,
  HeroSection
} from '@/ui';
```

## 🎨 Design System

### Design Tokens

Our design system is built on a foundation of design tokens that ensure consistency across all components.

#### Colors
```tsx
import { colors } from '@/ui/design-tokens';

// Brand Colors
colors.primary        // #005B96 (Main brand blue)
colors.accent         // #D6B861 (Gold accent)
colors.secondary      // #4A90E2 (Light blue)

// Text Colors
colors.textPrimary    // #1F2937 (Dark text)
colors.textSecondary  // #6B7280 (Medium text)
colors.textOnDark     // #FFFFFF (White text for dark backgrounds)

// Semantic Colors
colors.success        // #10B981 (Green)
colors.warning        // #F59E0B (Orange)
colors.error          // #EF4444 (Red)
```

#### Typography
```tsx
import { typography } from '@/ui/design-tokens';

// Font Family
typography.fontFamily // 'Inter, system-ui, sans-serif'

// Font Weights
typography.fontWeights.light    // 300
typography.fontWeights.regular  // 400
typography.fontWeights.medium   // 500
typography.fontWeights.semibold // 600
typography.fontWeights.bold     // 700
```

#### Spacing
```tsx
import { spacing } from '@/ui/design-tokens';

spacing[1]  // 0.25rem (4px)
spacing[2]  // 0.5rem  (8px)
spacing[3]  // 0.75rem (12px)
spacing[4]  // 1rem    (16px)
spacing[5]  // 1.25rem (20px)
spacing[6]  // 1.5rem  (24px)
// ... up to spacing[20]
```

#### Breakpoints
```tsx
import { breakpoints } from '@/ui/design-tokens';

breakpoints.sm   // 640px  (Mobile)
breakpoints.md   // 768px  (Tablet)
breakpoints.lg   // 1024px (Desktop)
breakpoints.xl   // 1280px (Large Desktop)
```

## 🧩 Components

### Atoms

#### Button
```tsx
import { Button } from '@/ui';

// Variants
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>

// Sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// States
<Button disabled>Disabled</Button>
<Button loading>Loading...</Button>
```

#### Typography
```tsx
import { Typography } from '@/ui';

// Variants
<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="h3">Heading 3</Typography>
<Typography variant="h4">Heading 4</Typography>
<Typography variant="h5">Heading 5</Typography>
<Typography variant="h6">Heading 6</Typography>
<Typography variant="body1">Body text</Typography>
<Typography variant="body2">Small body text</Typography>
<Typography variant="caption">Caption text</Typography>
<Typography variant="overline">Overline text</Typography>

// Colors
<Typography color="primary">Primary text</Typography>
<Typography color="secondary">Secondary text</Typography>
<Typography color="textOnDark">Text on dark background</Typography>
<Typography color="accent">Accent color</Typography>
```

#### Icon
```tsx
import { Icon } from '@/ui';
import { Home, User, Settings } from '@mui/icons-material';

<Icon icon={<Home />} size="small" />
<Icon icon={<User />} size="medium" />
<Icon icon={<Settings />} size="large" />
```

### Molecules

#### Accordion
```tsx
import { Accordion } from '@/ui';

<Accordion
  title="Frequently Asked Questions"
  defaultExpanded={false}
  variant="default"
>
  <Typography variant="body1">
    This is the content that appears when the accordion is expanded.
  </Typography>
</Accordion>
```

#### Card
```tsx
import { Card } from '@/ui';

<Card
  title="Card Title"
  subtitle="Card Subtitle"
  variant="default"
  hoverable
>
  <Typography variant="body1">
    Card content goes here.
  </Typography>
</Card>
```

#### ProjectCard
```tsx
import { ProjectCard } from '@/ui';

<ProjectCard
  title="Modern Office Building"
  description="A contemporary office complex featuring sustainable design."
  image="/assets/project.jpg"
  variant="featured"
  status="completed"
  category="Commercial"
  year="2024"
  onViewProject={() => console.log('View project')}
  onViewDetails={() => console.log('View details')}
/>
```

#### ProjectScroller
```tsx
import { ProjectScroller, ProjectCard } from '@/ui';

<ProjectScroller variant="showcase" gap="2rem">
  <ProjectCard title="Project 1" description="..." image="..." />
  <ProjectCard title="Project 2" description="..." image="..." />
  <ProjectCard title="Project 3" description="..." image="..." />
</ProjectScroller>
```

#### Tabs
```tsx
import { Tabs } from '@/ui';
import { Email, Phone } from '@mui/icons-material';

const tabs = [
  {
    id: 'email',
    label: 'E-post',
    icon: <Email />,
    content: <div>Email content</div>,
  },
  {
    id: 'phone',
    label: 'Telefon',
    icon: <Phone />,
    content: <div>Phone content</div>,
  },
];

<Tabs
  tabs={tabs}
  variant="pills"
  defaultActiveTab="email"
  onChange={(tabId) => console.log('Tab changed:', tabId)}
/>
```

#### Dialog
```tsx
import { Dialog, Button } from '@/ui';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Dialog
      </Button>
      
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Dialog Title"
        variant="default"
        actions={
          <>
            <Button variant="outline">Cancel</Button>
            <Button variant="primary">Confirm</Button>
          </>
        }
      >
        <Typography variant="body1">
          Dialog content goes here.
        </Typography>
      </Dialog>
    </>
  );
}
```

### Organisms

#### Navbar
```tsx
import { Navbar } from '@/ui';

<Navbar
  logo={<YourLogoComponent />}
  links={[
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
  ]}
  onContactClick={() => console.log('Contact clicked')}
/>
```

#### Footer
```tsx
import { Footer } from '@/ui';

<Footer
  companyName="Reach Management"
  orgNumber="123456-7890"
  email="info@reachmanagement.se"
  links={[
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ]}
/>
```

### Templates

#### PageSection
```tsx
import { PageSection } from '@/ui';

// Different variants for different use cases
<PageSection variant="hero">
  <Typography variant="h1">Hero Content</Typography>
</PageSection>

<PageSection variant="feature">
  <Typography variant="h2">Feature Content</Typography>
</PageSection>

<PageSection variant="testimonial">
  <Typography variant="h2">Testimonial Content</Typography>
</PageSection>

<PageSection variant="cta">
  <Typography variant="h2" color="textOnDark">Call to Action</Typography>
</PageSection>
```

#### HeroSection
```tsx
import { HeroSection } from '@/ui';

<HeroSection
  title="Welcome to Our Platform"
  subtitle="Building the future together"
  description="We provide innovative solutions for modern businesses."
  backgroundImage="/assets/hero-bg.jpg"
  colorScheme="primary"
  actions={
    <>
      <Button variant="primary" size="large">Get Started</Button>
      <Button variant="outline" size="large">Learn More</Button>
    </>
  }
/>
```

## 🎨 Styling

### Using Design Tokens
```tsx
import styled from 'styled-components';
import { colors, spacing, breakpoints } from '@/ui/design-tokens';

const CustomComponent = styled.div`
  background: ${colors.primary};
  padding: ${spacing[4]};
  border-radius: 8px;
  
  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[2]};
  }
`;
```

### Responsive Design
All components are built with mobile-first responsive design:

```tsx
// Components automatically adapt to screen sizes
<Button size="large" /> // Large on desktop, medium on mobile
<PageSection variant="hero" /> // Full padding on desktop, reduced on mobile
```

## ♿ Accessibility

All components include built-in accessibility features:

- **ARIA attributes** for screen readers
- **Keyboard navigation** support
- **Focus management** in modals and dialogs
- **Color contrast** compliance
- **Semantic HTML** structure

## 📱 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 🛠️ Development

### Storybook
View and test all components in Storybook:

```bash
npm run storybook
```

Open http://localhost:6006 to explore the component library.

### Adding New Components

1. Create component in appropriate directory (`atoms/`, `molecules/`, `organisms/`, `templates/`)
2. Export from `components/index.ts`
3. Create stories in `stories/` directory
4. Update this documentation

### Component Structure
```
src/ui/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── design-tokens/
├── stories/
└── index.ts
```

## 📄 License

This UI library is part of the Reach Management project and follows the same licensing terms.

## 🤝 Contributing

When contributing to the UI library:

1. Follow the existing patterns and conventions
2. Use design tokens for consistency
3. Include comprehensive stories
4. Test across different screen sizes
5. Ensure accessibility compliance
6. Update documentation

---

**Built with ❤️ for Reach Management**
