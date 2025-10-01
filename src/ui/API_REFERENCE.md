# API Reference

Complete API documentation for all UI library components.

## Atoms

### Button

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}
```

**Variants:**
- `primary`: Main action button with solid background
- `secondary`: Secondary action with different color
- `outline`: Outlined button with transparent background
- `ghost`: Transparent button with hover effects

**Sizes:**
- `small`: Compact button for tight spaces
- `medium`: Standard button size (default)
- `large`: Prominent button for important actions

### Typography

```tsx
interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline';
  color?: 'primary' | 'secondary' | 'text' | 'textOnDark' | 'accent' | 'error' | 'success' | 'warning';
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
  className?: string;
}
```

**Variants:**
- `h1`-`h6`: Heading levels with decreasing font sizes
- `body1`: Standard body text
- `body2`: Smaller body text
- `caption`: Small text for captions
- `overline`: Small uppercase text

**Colors:**
- `primary`: Brand primary color
- `secondary`: Secondary text color
- `text`: Default text color
- `textOnDark`: White text for dark backgrounds
- `accent`: Accent color
- `error`/`success`/`warning`: Semantic colors

### Icon

```tsx
interface IconProps {
  icon: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}
```

## Molecules

### Accordion

```tsx
interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  variant?: 'default' | 'minimal';
  onToggle?: (expanded: boolean) => void;
  className?: string;
}
```

### Card

```tsx
interface CardProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  hoverable?: boolean;
  className?: string;
}
```

### ProjectCard

```tsx
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  variant?: 'default' | 'featured' | 'minimal';
  status?: 'completed' | 'ongoing' | 'planned';
  category?: string;
  year?: string;
  onViewProject?: () => void;
  onViewDetails?: () => void;
  className?: string;
}
```

### ProjectScroller

```tsx
interface ProjectScrollerProps {
  children: React.ReactNode;
  variant?: 'default' | 'minimal' | 'showcase';
  gap?: string;
  padding?: string;
  showScrollIndicator?: boolean;
  showScrollHint?: boolean;
  className?: string;
}
```

### Tabs

```tsx
interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  tabs: TabItem[];
  defaultActiveTab?: string;
  variant?: 'default' | 'pills' | 'underline';
  onChange?: (activeTabId: string) => void;
  className?: string;
}
```

### Dialog

```tsx
interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  variant?: 'default' | 'fullscreen' | 'compact';
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
}
```

## Organisms

### Navbar

```tsx
interface NavLink {
  to: string;
  label: string;
}

interface NavbarProps {
  logo?: React.ReactNode;
  links?: NavLink[];
  onContactClick?: () => void;
  className?: string;
}
```

### Footer

```tsx
interface FooterLink {
  href: string;
  label: string;
}

interface FooterProps {
  companyName?: string;
  orgNumber?: string;
  email?: string;
  links?: FooterLink[];
  className?: string;
}
```

## Templates

### PageSection

```tsx
interface PageSectionProps {
  children: React.ReactNode;
  backgroundColor?: string;
  padding?: string;
  maxWidth?: string;
  align?: 'left' | 'center' | 'right';
  variant?: 'default' | 'hero' | 'feature' | 'testimonial' | 'cta';
  className?: string;
}
```

**Variants:**
- `default`: Standard section with default styling
- `hero`: Large section with gradient background
- `feature`: Clean white background for features
- `testimonial`: Light gradient background for testimonials
- `cta`: Bold gradient background for call-to-action

### HeroSection

```tsx
interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  colorScheme?: 'primary' | 'secondary';
  actions?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
```

## Design Tokens

### Colors

```tsx
interface Colors {
  // Brand Colors
  primary: string;        // #005B96
  accent: string;         // #D6B861
  secondary: string;      // #4A90E2
  secondaryLight: string; // #E8F4FD
  
  // Text Colors
  textPrimary: string;    // #1F2937
  textSecondary: string;  // #6B7280
  textOnDark: string;     // #FFFFFF
  
  // Background Colors
  white: string;          // #FFFFFF
  gray50: string;         // #F9FAFB
  gray100: string;        // #F3F4F6
  gray200: string;        // #E5E7EB
  gray300: string;        // #D1D5DB
  gray400: string;        // #9CA3AF
  gray500: string;        // #6B7280
  gray600: string;        // #4B5563
  gray700: string;        // #374151
  gray800: string;        // #1F2937
  gray900: string;        // #111827
  
  // Semantic Colors
  success: string;        // #10B981
  warning: string;        // #F59E0B
  error: string;          // #EF4444
  
  // Light Variants
  primaryLight: string;   // #E6F2FF
  accentLight: string;    // #FDF6E3
}
```

### Typography

```tsx
interface Typography {
  fontFamily: string;     // 'Inter, system-ui, sans-serif'
  fontWeights: {
    light: number;        // 300
    regular: number;      // 400
    medium: number;       // 500
    semibold: number;     // 600
    bold: number;         // 700
  };
  fontSizes: {
    xs: string;           // '0.75rem'
    sm: string;           // '0.875rem'
    base: string;         // '1rem'
    lg: string;           // '1.125rem'
    xl: string;           // '1.25rem'
    '2xl': string;        // '1.5rem'
    '3xl': string;        // '1.875rem'
    '4xl': string;        // '2.25rem'
    '5xl': string;        // '3rem'
    '6xl': string;        // '3.75rem'
  };
  lineHeights: {
    tight: string;        // '1.25'
    normal: string;       // '1.5'
    relaxed: string;      // '1.75'
  };
}
```

### Spacing

```tsx
interface Spacing {
  [key: number]: string;
  // 0: '0'
  // 1: '0.25rem' (4px)
  // 2: '0.5rem'  (8px)
  // 3: '0.75rem' (12px)
  // 4: '1rem'    (16px)
  // 5: '1.25rem' (20px)
  // 6: '1.5rem'  (24px)
  // ... up to 20
}
```

### Breakpoints

```tsx
interface Breakpoints {
  sm: string;             // '640px'
  md: string;             // '768px'
  lg: string;             // '1024px'
  xl: string;             // '1280px'
  '2xl': string;          // '1536px'
}
```

### Z-Index

```tsx
interface ZIndex {
  navbar: number;         // 100
  modal: number;          // 1000
  tooltip: number;        // 1100
  dropdown: number;       // 1200
  overlay: number;        // 1300
}
```

## Usage Examples

### Basic Button
```tsx
<Button variant="primary" size="large" onClick={handleClick}>
  Click me
</Button>
```

### Typography with Color
```tsx
<Typography variant="h1" color="primary">
  Main Heading
</Typography>
```

### Responsive Page Section
```tsx
<PageSection variant="hero" align="center">
  <Typography variant="h1">Welcome</Typography>
  <Button variant="primary">Get Started</Button>
</PageSection>
```

### Modal Dialog
```tsx
<Dialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  actions={
    <>
      <Button variant="outline">Cancel</Button>
      <Button variant="primary">Confirm</Button>
    </>
  }
>
  <Typography>Are you sure you want to continue?</Typography>
</Dialog>
```

### Tabbed Interface
```tsx
<Tabs
  tabs={[
    { id: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
    { id: 'tab2', label: 'Tab 2', content: <div>Content 2</div> },
  ]}
  variant="pills"
  onChange={(tabId) => console.log('Tab changed:', tabId)}
/>
```

---

For more examples and interactive demos, visit Storybook at http://localhost:6006
