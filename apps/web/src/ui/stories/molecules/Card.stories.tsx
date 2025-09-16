import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../../components/molecules/Card';
import { Typography } from '../../components/atoms/Typography';
import { Button } from '../../components/atoms/Button';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    elevation: {
      control: { type: 'select' },
      options: [1, 2, 3, 4],
    },
    padding: {
      control: { type: 'text' },
    },
    maxWidth: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <Typography variant="body1">
        This is a basic card with some content inside.
      </Typography>
    ),
  },
};

export const WithTitle: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Typography variant="h4">Card Title</Typography>
        <Typography variant="body1">
          This card has a title and some body text content.
        </Typography>
      </div>
    ),
  },
};

export const WithImage: Story = {
  args: {
    image: {
      src: 'https://via.placeholder.com/400x200/005B96/FFFFFF?text=Card+Image',
      alt: 'Card image',
      aspectRatio: '16/9',
    },
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Typography variant="h4">Card with Image</Typography>
        <Typography variant="body1">
          This card includes an image at the top with a 16:9 aspect ratio.
        </Typography>
      </div>
    ),
  },
};

export const WithActions: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Typography variant="h4">Card with Actions</Typography>
        <Typography variant="body1">
          This card includes action buttons at the bottom.
        </Typography>
      </div>
    ),
    actions: (
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button size="small" variant="primary">Primary</Button>
        <Button size="small" variant="outline">Secondary</Button>
      </div>
    ),
  },
};

export const Elevations: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
      <Card elevation={1}>
        <Typography variant="h5">Elevation 1</Typography>
        <Typography variant="body2">Subtle shadow</Typography>
      </Card>
      <Card elevation={2}>
        <Typography variant="h5">Elevation 2</Typography>
        <Typography variant="body2">Default shadow</Typography>
      </Card>
      <Card elevation={3}>
        <Typography variant="h5">Elevation 3</Typography>
        <Typography variant="body2">Medium shadow</Typography>
      </Card>
      <Card elevation={4}>
        <Typography variant="h5">Elevation 4</Typography>
        <Typography variant="body2">Strong shadow</Typography>
      </Card>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Card maxWidth="300px">
        <Typography variant="h5">Small Card</Typography>
        <Typography variant="body2">300px max width</Typography>
      </Card>
      <Card maxWidth="500px">
        <Typography variant="h5">Medium Card</Typography>
        <Typography variant="body2">500px max width</Typography>
      </Card>
      <Card maxWidth="800px">
        <Typography variant="h5">Large Card</Typography>
        <Typography variant="body2">800px max width</Typography>
      </Card>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Typography variant="h4">Interactive Card</Typography>
        <Typography variant="body1">
          This card demonstrates all the interactive features including hover effects.
        </Typography>
      </div>
    ),
    elevation: 2,
    actions: (
      <Button size="small" variant="primary" onClick={() => alert('Card action clicked!')}>
        Click Me
      </Button>
    ),
  },
};
