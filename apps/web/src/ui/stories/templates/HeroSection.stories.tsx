import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from '../../components/templates/HeroSection';

const meta: Meta<typeof HeroSection> = {
  title: 'Templates/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    subtitle: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    backgroundImage: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
    maxWidth: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    title: 'Welcome to Reach Management',
    subtitle: 'Byggprojektledning',
    description: 'Vi hjälper dig att realisera dina byggprojekt med professionell projektledning och expertis.',
  },
};

export const WithActions: Story = {
  args: {
    title: 'Start Your Project Today',
    subtitle: 'Professional Construction Management',
    description: 'Get expert guidance for your construction projects from planning to completion.',
    actions: [
      {
        text: 'Get Started',
        variant: 'primary',
        size: 'large',
        onClick: () => alert('Get Started clicked!'),
      },
      {
        text: 'Learn More',
        variant: 'outline',
        size: 'large',
        onClick: () => alert('Learn More clicked!'),
      },
    ],
  },
};

export const WithBackgroundImage: Story = {
  args: {
    title: 'Building the Future',
    subtitle: 'Construction Excellence',
    description: 'Transforming visions into reality with cutting-edge construction management and innovative project solutions.',
    backgroundImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    actions: [
      {
        text: 'View Projects',
        variant: 'primary',
        onClick: () => alert('View Projects clicked!'),
      },
      {
        text: 'Learn More',
        variant: 'outline',
        onClick: () => alert('Learn More clicked!'),
      },
    ],
  },
};

export const ConstructionHero: Story = {
  args: {
    title: 'Reach Management',
    subtitle: 'Byggprojektledning',
    description: 'Vi hjälper dig att realisera dina byggprojekt med professionell projektledning, expertis och moderna lösningar.',
    backgroundImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    actions: [
      {
        text: 'Börja ditt projekt',
        variant: 'primary',
        size: 'large',
        onClick: () => alert('Börja ditt projekt clicked!'),
      },
      {
        text: 'Kontakta oss',
        variant: 'outline',
        size: 'large',
        onClick: () => alert('Kontakta oss clicked!'),
      },
    ],
  },
};

export const ModernOffice: Story = {
  args: {
    title: 'Professional Project Management',
    subtitle: 'Innovation & Excellence',
    description: 'Leading the construction industry with cutting-edge technology, sustainable practices, and unparalleled expertise.',
    backgroundImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    actions: [
      {
        text: 'Get Started',
        variant: 'primary',
        onClick: () => alert('Get Started clicked!'),
      },
    ],
  },
};

export const Minimal: Story = {
  args: {
    title: 'Simple Hero',
    description: 'A clean and minimal hero section without additional elements.',
  },
};

export const ShortHeight: Story = {
  args: {
    title: 'Compact Hero',
    subtitle: 'Short Height',
    description: 'This hero section uses a shorter height for more compact layouts.',
    height: '50vh',
    actions: [
      {
        text: 'Action',
        onClick: () => alert('Action clicked!'),
      },
    ],
  },
};

export const ConstrainedWidth: Story = {
  args: {
    title: 'Constrained Width Hero',
    subtitle: 'Focused Content',
    description: 'This hero section has a maximum width constraint for better readability on large screens.',
    maxWidth: '600px',
    actions: [
      {
        text: 'Primary Action',
        variant: 'primary',
        onClick: () => alert('Primary clicked!'),
      },
      {
        text: 'Secondary Action',
        variant: 'outline',
        onClick: () => alert('Secondary clicked!'),
      },
    ],
  },
};

export const Interactive: Story = {
  args: {
    title: 'Interactive Hero Section',
    subtitle: 'Try the Controls',
    description: 'Use the controls panel to modify this hero section and see how it changes in real-time.',
    actions: [
      {
        text: 'Interactive Button',
        variant: 'primary',
        size: 'large',
        onClick: () => console.log('Interactive button clicked'),
      },
    ],
  },
};
