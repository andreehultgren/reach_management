import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../../components/organisms/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    companyName: {
      control: { type: 'text' },
    },
    orgNumber: {
      control: { type: 'text' },
    },
    email: {
      control: { type: 'text' },
    },
    links: {
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    companyName: 'Reach Management',
    orgNumber: '556677-8899',
    email: 'info@reachmanagement.se',
  },
};

export const WithLinks: Story = {
  args: {
    companyName: 'Reach Management',
    orgNumber: '556677-8899',
    email: 'info@reachmanagement.se',
  },
};

export const Minimal: Story = {
  args: {
    companyName: 'Company AB',
    orgNumber: '123456-7890',
    email: 'info@company.se',
  },
};

export const Interactive: Story = {
  args: {
    companyName: 'Interactive Company',
    orgNumber: '987654-3210',
    email: 'contact@interactive.se',
  },
};
