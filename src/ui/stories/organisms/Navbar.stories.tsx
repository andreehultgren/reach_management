import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../../components/organisms/Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Organisms/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    logo: {
      control: { type: 'object' },
    },
    links: {
      control: { type: 'object' },
    },
    ctaButton: {
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

const defaultLinks = [
  { label: 'Hem', href: '/', active: true },
  { label: 'Tjänster', href: '/tjanster' },
  { label: 'Om oss', href: '/om-oss' },
  { label: 'Jobba hos oss', href: '/jobba-hos-oss' },
];

export const Default: Story = {
  args: {
    logo: {
      text: 'Reach Management',
      href: '/',
    },
    links: defaultLinks,
  },
};

export const WithCTA: Story = {
  args: {
    logo: {
      text: 'Reach Management',
      href: '/',
    },
    links: defaultLinks,
    ctaButton: {
      text: 'Kontakt',
      onClick: () => alert('Contact button clicked!'),
    },
  },
};

export const Minimal: Story = {
  args: {
    logo: {
      text: 'Company',
      href: '/',
    },
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
    ],
  },
};

export const ManyLinks: Story = {
  args: {
    logo: {
      text: 'Reach Management',
      href: '/',
    },
    links: [
      { label: 'Hem', href: '/', active: true },
      { label: 'Tjänster', href: '/tjanster' },
      { label: 'Projekt', href: '/projekt' },
      { label: 'Om oss', href: '/om-oss' },
      { label: 'Karriär', href: '/karriar' },
      { label: 'Blogg', href: '/blogg' },
      { label: 'Kontakt', href: '/kontakt' },
    ],
    ctaButton: {
      text: 'Börja nu',
      onClick: () => alert('CTA clicked!'),
    },
  },
};

export const Interactive: Story = {
  args: {
    logo: {
      text: 'Interactive Navbar',
      href: '/',
    },
    links: defaultLinks.map(link => ({
      ...link,
      onClick: () => console.log(`Navigating to ${link.href}`),
    })),
    ctaButton: {
      text: 'Get Started',
      onClick: () => console.log('CTA button clicked'),
    },
  },
};
