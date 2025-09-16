import type { Meta, StoryObj } from '@storybook/react';
import { PageSection } from '../../components/templates/PageSection';
import { Typography } from '../../components/atoms/Typography';
import { Button } from '../../components/atoms/Button';
import { colors } from '../../design-tokens';

const meta: Meta<typeof PageSection> = {
  title: 'Templates/PageSection',
  component: PageSection,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    backgroundColor: {
      control: { type: 'color' },
    },
    padding: {
      control: { type: 'text' },
    },
    maxWidth: {
      control: { type: 'text' },
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof PageSection>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Typography variant="h2">Section Title</Typography>
        <Typography variant="body1">
          This is a default page section with some content. It uses the standard padding
          and background color.
        </Typography>
        <Button>Action Button</Button>
      </div>
    ),
  },
};

export const HeroVariant: Story = {
  args: {
    variant: 'hero',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
        <Typography variant="h1" color="primary">Welcome to Our Platform</Typography>
        <Typography variant="h4" color="secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
          We provide innovative solutions for modern businesses with cutting-edge technology
          and exceptional service quality.
        </Typography>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button size="large" variant="primary">Get Started</Button>
          <Button size="large" variant="outline">Learn More</Button>
        </div>
      </div>
    ),
  },
};

export const FeatureVariant: Story = {
  args: {
    variant: 'feature',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h2" color="primary">Our Features</Typography>
          <Typography variant="body1" color="secondary" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
            Discover the powerful features that make our platform the best choice for your business.
          </Typography>
        </div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginTop: '2rem'
        }}>
          <div style={{ textAlign: 'center', padding: '2rem', background: colors.gray50, borderRadius: '12px' }}>
            <Typography variant="h4" color="primary">⚡ Fast Performance</Typography>
            <Typography variant="body2" color="secondary" style={{ marginTop: '1rem' }}>
              Lightning-fast loading times and optimized performance for the best user experience.
            </Typography>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem', background: colors.gray50, borderRadius: '12px' }}>
            <Typography variant="h4" color="primary">🔒 Secure & Reliable</Typography>
            <Typography variant="body2" color="secondary" style={{ marginTop: '1rem' }}>
              Enterprise-grade security with 99.9% uptime guarantee for your peace of mind.
            </Typography>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem', background: colors.gray50, borderRadius: '12px' }}>
            <Typography variant="h4" color="primary">📱 Mobile Ready</Typography>
            <Typography variant="body2" color="secondary" style={{ marginTop: '1rem' }}>
              Fully responsive design that works perfectly on all devices and screen sizes.
            </Typography>
          </div>
        </div>
      </div>
    ),
  },
};

export const TestimonialVariant: Story = {
  args: {
    variant: 'testimonial',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
        <Typography variant="h2" color="primary">What Our Clients Say</Typography>
        <div style={{ 
          background: colors.white, 
          padding: '3rem', 
          borderRadius: '16px', 
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <Typography variant="h3" color="primary" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
            "This platform has transformed our business operations completely. The results speak for themselves."
          </Typography>
          <Typography variant="h5" color="accent" style={{ marginTop: '2rem' }}>
            Sarah Johnson
          </Typography>
          <Typography variant="body2" color="secondary">
            CEO, TechCorp Solutions
          </Typography>
        </div>
      </div>
    ),
  },
};

export const CTAVariant: Story = {
  args: {
    variant: 'cta',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
        <Typography variant="h2" color="textOnDark">Ready to Get Started?</Typography>
        <Typography variant="h4" color="textOnDark" style={{ opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
          Join thousands of satisfied customers who have already transformed their business with our platform.
        </Typography>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
          <Button size="large" variant="secondary">Start Free Trial</Button>
          <Button size="large" variant="outline" style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            color: 'white', 
            borderColor: 'rgba(255, 255, 255, 0.3)' 
          }}>
            Contact Sales
          </Button>
        </div>
      </div>
    ),
  },
};

export const Centered: Story = {
  args: {
    align: 'center',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Typography variant="h2" align="center">Centered Section</Typography>
        <Typography variant="body1" align="center">
          This section has centered alignment for all content.
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button>Centered Button</Button>
        </div>
      </div>
    ),
  },
};

export const WithBackground: Story = {
  args: {
    backgroundColor: colors.gray50,
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Typography variant="h2">Section with Background</Typography>
        <Typography variant="body1">
          This section has a light gray background color to distinguish it from other sections.
        </Typography>
        <Button variant="outline">Outline Button</Button>
      </div>
    ),
  },
};

export const CustomPadding: Story = {
  args: {
    padding: '4rem 2rem',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Typography variant="h2">Custom Padding</Typography>
        <Typography variant="body1">
          This section uses custom padding values instead of the default spacing.
        </Typography>
      </div>
    ),
  },
};

export const ConstrainedWidth: Story = {
  args: {
    maxWidth: '600px',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Typography variant="h2">Constrained Width</Typography>
        <Typography variant="body1">
          This section has a maximum width of 600px, making it more readable on larger screens.
        </Typography>
      </div>
    ),
  },
};

export const RightAligned: Story = {
  args: {
    align: 'right',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Typography variant="h2" align="right">Right Aligned</Typography>
        <Typography variant="body1" align="right">
          This section demonstrates right alignment for content.
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="ghost">Right Button</Button>
        </div>
      </div>
    ),
  },
};

export const Interactive: Story = {
  args: {
    backgroundColor: colors.primaryLight,
    align: 'center',
    maxWidth: '800px',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Typography variant="h2" align="center">Interactive Section</Typography>
        <Typography variant="body1" align="center">
          This section demonstrates various interactive elements and custom styling.
        </Typography>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Button variant="primary" onClick={() => alert('Primary clicked!')}>
            Primary Action
          </Button>
          <Button variant="outline" onClick={() => alert('Secondary clicked!')}>
            Secondary Action
          </Button>
        </div>
      </div>
    ),
  },
};
