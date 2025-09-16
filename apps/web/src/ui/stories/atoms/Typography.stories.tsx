import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../../components/atoms/Typography';

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption', 'overline'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'text', 'accent', 'error', 'success', 'warning'],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: 'Typography Text',
    variant: 'body1',
    color: 'text',
  },
};

export const Headings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="body1">
        This is body1 text - the main body text style used throughout the application.
      </Typography>
      <Typography variant="body2">
        This is body2 text - a smaller variant for secondary information.
      </Typography>
      <Typography variant="caption">
        This is caption text - used for small labels and captions.
      </Typography>
      <Typography variant="overline">
        This is overline text - used for section labels and small headings.
      </Typography>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="h3" color="primary">Primary Color</Typography>
      <Typography variant="h3" color="secondary">Secondary Color</Typography>
      <Typography variant="h3" color="accent">Accent Color</Typography>
      <Typography variant="h3" color="error">Error Color</Typography>
      <Typography variant="h3" color="success">Success Color</Typography>
      <Typography variant="h3" color="warning">Warning Color</Typography>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <Typography variant="h4" align="left">Left Aligned</Typography>
        <Typography variant="body1" align="left">
          This text is left aligned, which is the default alignment for most content.
        </Typography>
      </div>
      <div>
        <Typography variant="h4" align="center">Center Aligned</Typography>
        <Typography variant="body1" align="center">
          This text is center aligned, often used for headings and call-to-action text.
        </Typography>
      </div>
      <div>
        <Typography variant="h4" align="right">Right Aligned</Typography>
        <Typography variant="body1" align="right">
          This text is right aligned, sometimes used for dates or secondary information.
        </Typography>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    children: 'Interactive Typography',
    variant: 'h3',
    color: 'primary',
    align: 'center',
  },
};
