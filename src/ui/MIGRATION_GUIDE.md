# Migration Guide: Moving to UI Library

This guide helps you migrate existing components to use the new UI library.

## 🎯 Migration Strategy

### 1. Replace Individual Components
Start by replacing one component at a time to minimize risk.

### 2. Update Imports
Change from individual component imports to the UI library:

```tsx
// Before
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

// After
import { Button, Typography } from '@/ui';
```

### 3. Update Styling
Replace hardcoded styles with design tokens:

```tsx
// Before
const StyledButton = styled.button`
  background: #005B96;
  padding: 1rem 2rem;
  color: white;
`;

// After
import { colors, spacing } from '@/ui/design-tokens';

const StyledButton = styled.button`
  background: ${colors.primary};
  padding: ${spacing[4]} ${spacing[8]};
  color: ${colors.white};
`;
```

## 🔄 Component Migrations

### Button Migration

#### MUI Button → UI Button
```tsx
// Before (MUI)
<Button 
  variant="contained" 
  color="primary" 
  size="large"
  sx={{ padding: '12px 24px' }}
>
  Click me
</Button>

// After (UI Library)
<Button 
  variant="primary" 
  size="large"
>
  Click me
</Button>
```

#### Custom Button → UI Button
```tsx
// Before (Custom)
const CustomButton = styled.button`
  background: ${COLORS.primary};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

// After (UI Library)
import { Button } from '@/ui';
<Button variant="primary" size="medium">Click me</Button>
```

### Typography Migration

#### MUI Typography → UI Typography
```tsx
// Before (MUI)
<Typography 
  variant="h1" 
  color="primary"
  sx={{ marginBottom: '1rem' }}
>
  Heading
</Typography>

// After (UI Library)
<Typography 
  variant="h1" 
  color="primary"
  style={{ marginBottom: spacing[4] }}
>
  Heading
</Typography>
```

### Layout Migration

#### Custom Section → PageSection
```tsx
// Before (Custom)
const Section = styled.div`
  padding: 3rem 1rem;
  background: white;
  max-width: 1200px;
  margin: 0 auto;
`;

<Section>
  <h2>Section Title</h2>
  <p>Section content</p>
</Section>

// After (UI Library)
import { PageSection, Typography } from '@/ui';

<PageSection variant="feature">
  <Typography variant="h2">Section Title</Typography>
  <Typography variant="body1">Section content</Typography>
</PageSection>
```

#### Hero Section Migration
```tsx
// Before (Custom)
const HeroSection = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage});
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

// After (UI Library)
import { HeroSection } from '@/ui';

<HeroSection
  title="Welcome to Our Platform"
  subtitle="Building the future together"
  backgroundImage="/assets/hero-bg.jpg"
  colorScheme="primary"
>
  <Button variant="primary" size="large">Get Started</Button>
</HeroSection>
```

### Card Migration

#### MUI Card → UI Card
```tsx
// Before (MUI)
<Card sx={{ padding: 2, margin: 1 }}>
  <CardContent>
    <Typography variant="h6">Card Title</Typography>
    <Typography variant="body2">Card content</Typography>
  </CardContent>
</Card>

// After (UI Library)
import { Card } from '@/ui';

<Card title="Card Title" subtitle="Card content" />
```

### Dialog/Modal Migration

#### MUI Dialog → UI Dialog
```tsx
// Before (MUI)
<Dialog 
  open={open} 
  onClose={handleClose}
  maxWidth="sm"
  fullWidth
>
  <DialogTitle>Dialog Title</DialogTitle>
  <DialogContent>
    <Typography>Dialog content</Typography>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button variant="contained">Save</Button>
  </DialogActions>
</Dialog>

// After (UI Library)
import { Dialog, Button } from '@/ui';

<Dialog
  isOpen={open}
  onClose={handleClose}
  title="Dialog Title"
  actions={
    <>
      <Button variant="outline">Cancel</Button>
      <Button variant="primary">Save</Button>
    </>
  }
>
  <Typography>Dialog content</Typography>
</Dialog>
```

## 🎨 Styling Migration

### Color Migration
```tsx
// Before
const COLORS = {
  primary: '#005B96',
  secondary: '#6B7280',
  // ...
};

// After
import { colors } from '@/ui/design-tokens';
// Use colors.primary, colors.secondary, etc.
```

### Spacing Migration
```tsx
// Before
const SPACING = {
  sm: '0.5rem',
  md: '1rem',
  lg: '2rem',
};

// After
import { spacing } from '@/ui/design-tokens';
// Use spacing[1], spacing[4], spacing[8], etc.
```

### Breakpoint Migration
```tsx
// Before
const BREAKPOINTS = {
  mobile: '768px',
  tablet: '1024px',
};

// After
import { breakpoints } from '@/ui/design-tokens';
// Use breakpoints.sm, breakpoints.md, etc.
```

## 🔧 Common Patterns

### Form Styling
```tsx
// Before
const FormInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
`;

// After
import { spacing } from '@/ui/design-tokens';

const FormInput = styled.input`
  padding: ${spacing[3]};
  border: 1px solid ${colors.gray300};
  border-radius: 8px;
  font-size: 1rem;
`;
```

### Responsive Design
```tsx
// Before
const ResponsiveComponent = styled.div`
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// After
import { spacing, breakpoints } from '@/ui/design-tokens';

const ResponsiveComponent = styled.div`
  padding: ${spacing[8]};
  
  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[4]};
  }
`;
```

## 🚨 Breaking Changes

### Removed Props
Some MUI-specific props are not available in the UI library:

```tsx
// These MUI props are not available:
<Button color="primary" />     // Use variant instead
<Button sx={{ ... }} />        // Use styled-components
<Typography gutterBottom />    // Use margin styles
```

### Different API
Some components have different APIs:

```tsx
// MUI Accordion
<Accordion>
  <AccordionSummary>Title</AccordionSummary>
  <AccordionDetails>Content</AccordionDetails>
</Accordion>

// UI Library Accordion
<Accordion title="Title">
  Content
</Accordion>
```

## ✅ Migration Checklist

- [ ] Update imports to use UI library
- [ ] Replace hardcoded colors with design tokens
- [ ] Replace hardcoded spacing with design tokens
- [ ] Update component props to match UI library API
- [ ] Test responsive behavior
- [ ] Verify accessibility features
- [ ] Update any custom styling
- [ ] Test in Storybook
- [ ] Remove unused MUI imports

## 🎯 Benefits After Migration

- **Consistency**: All components follow the same design system
- **Maintainability**: Centralized styling and behavior
- **Performance**: Optimized components with better tree-shaking
- **Accessibility**: Built-in accessibility features
- **Responsiveness**: Mobile-first design
- **Type Safety**: Full TypeScript support
- **Documentation**: Comprehensive Storybook documentation

## 🆘 Getting Help

1. **Check Storybook**: View examples and documentation
2. **Design Tokens**: Use the design system for consistency
3. **Component Props**: Check TypeScript definitions for available props
4. **Migration Examples**: Reference this guide for common patterns

---

**Need help?** Check the main README.md or explore components in Storybook!
