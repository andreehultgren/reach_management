import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../../components/molecules/Accordion';
import { Typography } from '../../components/atoms/Typography';

const meta: Meta<typeof Accordion> = {
  title: 'Molecules/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    defaultExpanded: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    title: 'Accordion Title',
    children: (
      <Typography variant="body1">
        This is the content inside the accordion. It can contain any React elements
        including text, images, forms, or other components.
      </Typography>
    ),
  },
};

export const Expanded: Story = {
  args: {
    title: 'Expanded Accordion',
    defaultExpanded: true,
    children: (
      <Typography variant="body1">
        This accordion starts in an expanded state.
      </Typography>
    ),
  },
};

export const WithRichContent: Story = {
  args: {
    title: 'Rich Content Accordion',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <Typography variant="body1">
          This accordion contains rich content including multiple paragraphs and elements.
        </Typography>
        <Typography variant="body2" color="secondary">
          This is a secondary text paragraph that provides additional context and demonstrates
          the beautiful typography and spacing of our design system.
        </Typography>
        <div style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
          padding: '1rem', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }}>
          <Typography variant="body2" color="primary" style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
            Featured Information
          </Typography>
          <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#4a5568' }}>
            <li>First item in the list</li>
            <li>Second item in the list</li>
            <li>Third item in the list</li>
          </ul>
        </div>
      </div>
    ),
  },
};

export const MultipleAccordions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Accordion title="First Accordion">
        <Typography variant="body1">
          Content for the first accordion.
        </Typography>
      </Accordion>
      <Accordion title="Second Accordion">
        <Typography variant="body1">
          Content for the second accordion.
        </Typography>
      </Accordion>
      <Accordion title="Third Accordion" defaultExpanded>
        <Typography variant="body1">
          This accordion starts expanded.
        </Typography>
      </Accordion>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    title: 'Interactive Accordion',
    children: (
      <Typography variant="body1">
        This accordion has an interactive handler that logs when it's toggled.
      </Typography>
    ),
    onToggle: (expanded) => console.log('Accordion toggled:', expanded),
  },
};

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography variant="h3" color="primary" style={{ marginBottom: '0.5rem' }}>
          Beautiful Accordion Design
        </Typography>
        <Typography variant="body1" color="secondary">
          Experience smooth animations, elegant hover effects, and modern styling
        </Typography>
      </div>
      
      <Accordion title="Project Management" defaultExpanded>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Typography variant="body1">
            We lead projects with focus on structure, communication and results. From planning to follow-up, 
            we ensure your project is delivered on time and within budget.
          </Typography>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem',
            marginTop: '1rem'
          }}>
            <div style={{ 
              background: 'linear-gradient(135deg, #e3f2fd 0%, #f8fafc 100%)', 
              padding: '1rem', 
              borderRadius: '8px',
              border: '1px solid #e3f2fd'
            }}>
              <Typography variant="body2" color="primary" style={{ fontWeight: '600' }}>
                ✓ Planning
              </Typography>
            </div>
            <div style={{ 
              background: 'linear-gradient(135deg, #e3f2fd 0%, #f8fafc 100%)', 
              padding: '1rem', 
              borderRadius: '8px',
              border: '1px solid #e3f2fd'
            }}>
              <Typography variant="body2" color="primary" style={{ fontWeight: '600' }}>
                ✓ Communication
              </Typography>
            </div>
            <div style={{ 
              background: 'linear-gradient(135deg, #e3f2fd 0%, #f8fafc 100%)', 
              padding: '1rem', 
              borderRadius: '8px',
              border: '1px solid #e3f2fd'
            }}>
              <Typography variant="body2" color="primary" style={{ fontWeight: '600' }}>
                ✓ Results
              </Typography>
            </div>
          </div>
        </div>
      </Accordion>
      
      <Accordion title="Design Excellence">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Typography variant="body1">
            Our accordion component features beautiful animations, smooth transitions, and modern design elements.
          </Typography>
          <div style={{ 
            background: 'linear-gradient(135deg, #fdf4e3 0%, #f8fafc 100%)', 
            padding: '1.5rem', 
            borderRadius: '12px',
            border: '1px solid #fdf4e3',
            textAlign: 'center'
          }}>
            <Typography variant="h5" color="accent" style={{ marginBottom: '0.5rem' }}>
              ✨ Premium Design
            </Typography>
            <Typography variant="body2" color="secondary">
              Smooth cubic-bezier animations, elegant hover effects, and attention to detail
            </Typography>
          </div>
        </div>
      </Accordion>
      
      <Accordion title="Accessibility First">
        <Typography variant="body1">
          Built with accessibility in mind, featuring proper ARIA labels, keyboard navigation, 
          and screen reader support for an inclusive user experience.
        </Typography>
      </Accordion>
    </div>
  ),
};
