import type { Meta, StoryObj } from '@storybook/react';
import { ProjectCard } from '../../components/molecules/ProjectCard/ProjectCard';

const meta: Meta<typeof ProjectCard> = {
  title: 'UI/Molecules/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'featured', 'minimal'],
    },
    status: {
      control: { type: 'select' },
      options: ['completed', 'ongoing', 'planned'],
    },
    onViewProject: { action: 'view project clicked' },
    onViewDetails: { action: 'view details clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    title: 'Modern Office Building',
    description: 'A contemporary office complex featuring sustainable design and modern amenities. This project showcases innovative architecture with focus on energy efficiency and employee wellbeing.',
    image: '/assets/arkitekt_format_hus_desktop.jpg',
    imageAlt: 'Modern office building exterior',
    category: 'Commercial',
    year: '2024',
  },
};

export const Featured: Story = {
  args: {
    title: 'Luxury Residential Complex',
    description: 'An award-winning residential development featuring premium finishes, smart home technology, and stunning city views. This project represents the pinnacle of modern living.',
    image: '/assets/buildings_sunset_desktop.jpg',
    imageAlt: 'Luxury residential complex at sunset',
    variant: 'featured',
    status: 'completed',
    category: 'Residential',
    year: '2024',
  },
};

export const Minimal: Story = {
  args: {
    title: 'Community Center',
    description: 'A welcoming community space designed to bring people together through shared activities and events.',
    image: '/assets/innovation_desktop.jpg',
    imageAlt: 'Community center building',
    variant: 'minimal',
    status: 'ongoing',
    category: 'Public',
    year: '2024',
  },
};

export const Planned: Story = {
  args: {
    title: 'Green Energy Campus',
    description: 'An innovative campus focused on renewable energy research and development, featuring cutting-edge sustainable technologies.',
    image: '/assets/lightbulb_desktop.jpg',
    imageAlt: 'Green energy campus concept',
    status: 'planned',
    category: 'Research',
    year: '2025',
  },
};

export const WithActions: Story = {
  args: {
    title: 'Smart City Initiative',
    description: 'A comprehensive smart city project integrating IoT technology, sustainable infrastructure, and citizen engagement platforms.',
    image: '/assets/City_sundown_desktop.jpg',
    imageAlt: 'Smart city skyline',
    variant: 'featured',
    status: 'ongoing',
    category: 'Infrastructure',
    year: '2024',
    onViewProject: () => console.log('View project clicked'),
    onViewDetails: () => console.log('View details clicked'),
  },
};

export const Showcase: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem'
    }}>
      <ProjectCard
        title="Urban Renewal Project"
        description="Transforming downtown areas with mixed-use developments that combine residential, commercial, and green spaces."
        image="/assets/Stadsvy_scyscrapers_desktop.jpg"
        variant="featured"
        status="completed"
        category="Urban Planning"
        year="2023"
        onViewProject={() => console.log('View project')}
        onViewDetails={() => console.log('View details')}
      />
      <ProjectCard
        title="Sustainable Housing"
        description="Eco-friendly residential units with solar panels, rainwater harvesting, and energy-efficient design."
        image="/assets/arkitekt_format_hus_desktop.jpg"
        variant="default"
        status="ongoing"
        category="Residential"
        year="2024"
        onViewProject={() => console.log('View project')}
      />
      <ProjectCard
        title="Industrial Complex"
        description="Modern manufacturing facility with advanced automation and sustainable production processes."
        image="/assets/Horisont_byggkran_och_arbetare_desktop.jpg"
        variant="minimal"
        status="planned"
        category="Industrial"
        year="2025"
      />
    </div>
  ),
};
