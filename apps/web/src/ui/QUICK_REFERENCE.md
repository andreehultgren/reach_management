# UI Library Quick Reference

## 🚀 Most Common Components

### Buttons
```tsx
<Button variant="primary" size="large">Primary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button disabled>Disabled</Button>
```

### Typography
```tsx
<Typography variant="h1">Main Heading</Typography>
<Typography variant="h2">Section Heading</Typography>
<Typography variant="body1">Body Text</Typography>
<Typography color="primary">Colored Text</Typography>
```

### Layout Sections
```tsx
<PageSection variant="hero">Hero Content</PageSection>
<PageSection variant="feature">Feature Content</PageSection>
<PageSection variant="cta">Call to Action</PageSection>
```

## 🎨 Color System

```tsx
// Brand Colors
colors.primary    // #005B96 (Blue)
colors.accent     // #D6B861 (Gold)
colors.secondary  // #4A90E2 (Light Blue)

// Text Colors
colors.textPrimary   // Dark text
colors.textSecondary // Medium text
colors.textOnDark    // White text for dark backgrounds
```

## 📱 Responsive Breakpoints

```tsx
breakpoints.sm   // 640px  (Mobile)
breakpoints.md   // 768px  (Tablet)
breakpoints.lg   // 1024px (Desktop)
breakpoints.xl   // 1280px (Large Desktop)
```

## 🧩 Component Variants

### Button Variants
- `primary` - Main action button
- `secondary` - Secondary action
- `outline` - Outlined button
- `ghost` - Transparent button

### PageSection Variants
- `default` - Standard section
- `hero` - Large hero section with gradient
- `feature` - Clean white background
- `testimonial` - Light gradient background
- `cta` - Bold gradient with white text

### ProjectCard Variants
- `default` - Standard project card
- `featured` - Larger, more prominent card
- `minimal` - Smaller, simpler card

## 🎯 Common Patterns

### Hero Section
```tsx
<PageSection variant="hero">
  <Typography variant="h1" color="primary">
    Welcome to Our Platform
  </Typography>
  <Typography variant="h4" color="secondary">
    Building the future together
  </Typography>
  <Button variant="primary" size="large">
    Get Started
  </Button>
</PageSection>
```

### Feature Grid
```tsx
<PageSection variant="feature">
  <Typography variant="h2" color="primary" align="center">
    Our Features
  </Typography>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
    <Card title="Feature 1" subtitle="Description" />
    <Card title="Feature 2" subtitle="Description" />
    <Card title="Feature 3" subtitle="Description" />
  </div>
</PageSection>
```

### Contact Form
```tsx
<Dialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Contact Us"
>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <input placeholder="Your name" />
    <input placeholder="Your email" />
    <textarea placeholder="Your message" rows={4} />
  </div>
</Dialog>
```

### Project Showcase
```tsx
<ProjectScroller variant="showcase">
  <ProjectCard
    title="Project Name"
    description="Project description"
    image="/project.jpg"
    variant="featured"
    status="completed"
    onViewProject={() => console.log('View project')}
  />
</ProjectScroller>
```

## 🔧 Styling Tips

### Using Design Tokens
```tsx
import { colors, spacing, breakpoints } from '@/ui/design-tokens';

const StyledComponent = styled.div`
  background: ${colors.primary};
  padding: ${spacing[4]};
  margin: ${spacing[2]} 0;
  
  @media (max-width: ${breakpoints.md}) {
    padding: ${spacing[2]};
  }
`;
```

### Custom Component Props
```tsx
// Use $ prefix for styled-components props
const CustomButton = styled(Button)<{ $isActive: boolean }>`
  background: ${props => props.$isActive ? colors.primary : colors.gray100};
`;
```

## 📚 Storybook

View all components and examples:
```bash
npm run storybook
```

Navigate to:
- **Atoms**: Basic building blocks
- **Molecules**: Complex components
- **Organisms**: Layout components
- **Templates**: Page sections

## 🎨 Design Principles

1. **Mobile First**: All components are responsive
2. **Accessibility**: ARIA labels, keyboard navigation
3. **Consistency**: Use design tokens
4. **Performance**: Optimized rendering
5. **Flexibility**: Customizable variants

## 🚨 Common Mistakes

❌ **Don't** hardcode colors:
```tsx
color: "#005B96" // Bad
```

✅ **Do** use design tokens:
```tsx
color: colors.primary // Good
```

❌ **Don't** forget responsive design:
```tsx
padding: "2rem" // Bad
```

✅ **Do** use responsive spacing:
```tsx
padding: spacing[4] // Good, automatically responsive
```

❌ **Don't** skip accessibility:
```tsx
<button onClick={handleClick}>Click me</button> // Bad
```

✅ **Do** use proper components:
```tsx
<Button onClick={handleClick}>Click me</Button> // Good
```
