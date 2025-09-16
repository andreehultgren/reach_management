# Migration Guide: Existing Components to UI Library

This guide helps you migrate from your existing components to the new centralized UI library.

## 🎯 Overview

The new UI library provides enhanced, centralized alternatives to your existing components with better TypeScript support, accessibility, and consistency.

## 📦 Component Mappings

### 1. CallToAction → Button

**Before:**
```tsx
import CallToAction from '../components/CallToAction';

<CallToAction size="medium" onClick={handleClick}>
  Click Me
</CallToAction>
```

**After:**
```tsx
import { Button } from '../ui';

<Button size="medium" variant="primary" onClick={handleClick}>
  Click Me
</Button>
```

**Benefits:**
- More variants (primary, secondary, outline, ghost)
- Better TypeScript support
- Enhanced accessibility
- Consistent styling with design tokens

### 2. Section → PageSection

**Before:**
```tsx
import Section from '../components/Section';

<Section $backgroundColor={COLORS.gray50} $padding="2rem 1rem">
  <h2>Section Title</h2>
  <p>Section content</p>
</Section>
```

**After:**
```tsx
import { PageSection } from '../ui';

<PageSection backgroundColor={colors.gray50} padding="2rem 1rem">
  <Typography variant="h2">Section Title</Typography>
  <Typography variant="body1">Section content</Typography>
</PageSection>
```

**Benefits:**
- Better alignment options (left, center, right)
- More flexible padding and maxWidth props
- Consistent with design tokens

### 3. FullPageImageWithText → HeroSection

**Before:**
```tsx
import FullPageImageWithText from '../components/FullPageImageWithText';

<FullPageImageWithText 
  desktopImage="/desktop.jpg" 
  mobileImage="/mobile.jpg"
  height={100}
>
  <h1>Hero Title</h1>
  <p>Hero description</p>
</FullPageImageWithText>
```

**After:**
```tsx
import { HeroSection } from '../ui';

<HeroSection
  title="Hero Title"
  description="Hero description"
  backgroundImage="/desktop.jpg"
  height="100vh"
  actions={[
    { text: 'Get Started', onClick: handleClick }
  ]}
/>
```

**Benefits:**
- Better structured with dedicated props
- Built-in action buttons support
- More flexible background handling
- Better responsive behavior

### 4. Navbar → Navbar (Enhanced)

**Before:**
```tsx
import Navbar from '../components/Navbar';

// Used with hardcoded links and company info
<Navbar />
```

**After:**
```tsx
import { Navbar } from '../ui';

<Navbar
  logo={{ text: 'Reach Management', href: '/' }}
  links={[
    { label: 'Hem', href: '/', active: true },
    { label: 'Tjänster', href: '/tjanster' },
    // ... more links
  ]}
  ctaButton={{ text: 'Kontakt', onClick: handleContact }}
/>
```

**Benefits:**
- More flexible and configurable
- Better mobile menu handling
- Improved accessibility
- Consistent with design tokens

### 5. Footer → Footer (Enhanced)

**Before:**
```tsx
import Footer from '../components/Footer';

<Footer />
```

**After:**
```tsx
import { Footer } from '../ui';

<Footer
  companyName="Reach Management"
  orgNumber="556677-8899"
  email="michael.hultgren@reachmanagement.se"
  links={[
    { text: 'Integritetspolicy', href: '/privacy' },
    { text: 'Användarvillkor', href: '/terms' }
  ]}
/>
```

**Benefits:**
- More configurable
- Better responsive design
- Optional links support
- Consistent styling

## 🎨 Design Tokens Migration

### Colors

**Before:**
```tsx
import { COLORS } from '../constants';

const StyledDiv = styled.div`
  color: ${COLORS.primary};
  background: ${COLORS.gray50};
`;
```

**After:**
```tsx
import { colors } from '../ui/design-tokens';

const StyledDiv = styled.div`
  color: ${colors.primary};
  background: ${colors.gray50};
`;
```

### Spacing

**Before:**
```tsx
import { SPACING } from '../constants';

const StyledDiv = styled.div`
  padding: ${SPACING.md};
  margin: ${SPACING.lg};
`;
```

**After:**
```tsx
import { spacing } from '../ui/design-tokens';

const StyledDiv = styled.div`
  padding: ${spacing[4]};
  margin: ${spacing[6]};
`;
```

### Typography

**Before:**
```tsx
// Using MUI Typography with custom theme
<Typography variant="h1">Title</Typography>
```

**After:**
```tsx
import { Typography } from '../ui';

<Typography variant="h1" color="primary">Title</Typography>
```

## 🔄 Migration Steps

### Step 1: Update Imports
Replace component imports with UI library imports:

```tsx
// Old
import CallToAction from '../components/CallToAction';
import Section from '../components/Section';

// New
import { Button, PageSection } from '../ui';
```

### Step 2: Update Design Tokens
Replace constants with design tokens:

```tsx
// Old
import { COLORS, SPACING } from '../constants';

// New
import { colors, spacing } from '../ui/design-tokens';
```

### Step 3: Update Component Props
Update component props to match new API:

```tsx
// Old
<CallToAction size="medium" onClick={handleClick}>
  Click Me
</CallToAction>

// New
<Button size="medium" variant="primary" onClick={handleClick}>
  Click Me
</Button>
```

### Step 4: Test Components
Use Storybook to test all component variants:

```bash
npm run storybook
```

### Step 5: Update Styling
Replace hardcoded values with design tokens:

```tsx
// Old
const StyledDiv = styled.div`
  color: #005B96;
  padding: 1rem;
`;

// New
const StyledDiv = styled.div`
  color: ${colors.primary};
  padding: ${spacing[4]};
`;
```

## 🚀 Benefits of Migration

1. **Consistency**: All components follow the same design patterns
2. **TypeScript**: Better type safety and IntelliSense
3. **Accessibility**: Built-in accessibility features
4. **Maintainability**: Centralized components are easier to maintain
5. **Documentation**: Comprehensive Storybook documentation
6. **Testing**: Built-in testing capabilities
7. **Responsive**: Better mobile-first responsive design
8. **Performance**: Optimized components with better performance

## 📚 Resources

- **Storybook**: `npm run storybook` - Interactive component documentation
- **UI Library README**: `src/ui/README.md` - Comprehensive documentation
- **Design Tokens**: `src/ui/design-tokens/` - All design system tokens
- **Component Stories**: `src/ui/stories/` - Component examples and tests

## 🔧 Troubleshooting

### Common Issues

1. **Import Errors**: Make sure to use the correct import paths
2. **Type Errors**: Check that all required props are provided
3. **Styling Issues**: Verify design token usage
4. **Responsive Issues**: Test across different viewports

### Getting Help

1. Check Storybook documentation
2. Review component prop types in TypeScript
3. Test components in isolation
4. Check console for error messages

## 📈 Next Steps

After migration:

1. **Remove Old Components**: Delete unused component files
2. **Update Tests**: Update any existing tests
3. **Documentation**: Update project documentation
4. **Team Training**: Share the new UI library with your team
5. **Continuous Improvement**: Add new components as needed

---

This migration will result in a more maintainable, consistent, and scalable codebase with better developer experience and user accessibility.
