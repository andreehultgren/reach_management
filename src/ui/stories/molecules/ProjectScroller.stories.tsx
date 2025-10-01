import type { Meta, StoryObj } from '@storybook/react';
import { ProjectScroller } from '../../components/molecules/ProjectScroller/ProjectScroller';
import { ProjectCard } from '../../components/molecules/ProjectCard/ProjectCard';

const meta: Meta<typeof ProjectScroller> = {
  title: 'UI/Molecules/ProjectScroller',
  component: ProjectScroller,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'showcase'],
    },
    showScrollIndicator: { control: 'boolean' },
    showScrollHint: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectScroller>;

const sampleProjects = [
  {
    title: 'Modern Office Building',
    description: 'A contemporary office complex featuring sustainable design and modern amenities.',
    image: '/assets/arkitekt_format_hus_desktop.jpg',
    category: 'Commercial',
    year: '2024',
    status: 'completed' as const,
  },
  {
    title: 'Luxury Residential Complex',
    description: 'An award-winning residential development with premium finishes and smart home technology.',
    image: '/assets/buildings_sunset_desktop.jpg',
    category: 'Residential',
    year: '2024',
    status: 'completed' as const,
  },
  {
    title: 'Community Center',
    description: 'A welcoming community space designed to bring people together through shared activities.',
    image: '/assets/innovation_desktop.jpg',
    category: 'Public',
    year: '2024',
    status: 'ongoing' as const,
  },
  {
    title: 'Green Energy Campus',
    description: 'An innovative campus focused on renewable energy research and sustainable technologies.',
    image: '/assets/lightbulb_desktop.jpg',
    category: 'Research',
    year: '2025',
    status: 'planned' as const,
  },
  {
    title: 'Smart City Initiative',
    description: 'A comprehensive smart city project integrating IoT technology and sustainable infrastructure.',
    image: '/assets/City_sundown_desktop.jpg',
    category: 'Infrastructure',
    year: '2024',
    status: 'ongoing' as const,
  },
  {
    title: 'Urban Renewal Project',
    description: 'Transforming downtown areas with mixed-use developments and green spaces.',
    image: '/assets/Stadsvy_scyscrapers_desktop.jpg',
    category: 'Urban Planning',
    year: '2023',
    status: 'completed' as const,
  },
];

export const Default: Story = {
  args: {
    children: sampleProjects.map((project, index) => (
      <div key={index} style={{ width: '300px' }}>
        <ProjectCard
          title={project.title}
          description={project.description}
          image={project.image}
          category={project.category}
          year={project.year}
          status={project.status}
        />
      </div>
    )),
  },
};

export const Minimal: Story = {
  args: {
    variant: 'minimal',
    children: sampleProjects.slice(0, 4).map((project, index) => (
      <div key={index} style={{ width: '250px' }}>
        <ProjectCard
          title={project.title}
          description={project.description}
          image={project.image}
          category={project.category}
          year={project.year}
          status={project.status}
          variant="minimal"
        />
      </div>
    )),
  },
};

export const Showcase: Story = {
  args: {
    variant: 'showcase',
    children: sampleProjects.map((project, index) => (
      <div key={index} style={{ width: '350px' }}>
        <ProjectCard
          title={project.title}
          description={project.description}
          image={project.image}
          category={project.category}
          year={project.year}
          status={project.status}
          variant="featured"
          onViewProject={() => console.log('View project:', project.title)}
          onViewDetails={() => console.log('View details:', project.title)}
        />
      </div>
    )),
  },
};

export const WithoutIndicators: Story = {
  args: {
    showScrollIndicator: false,
    showScrollHint: false,
    children: sampleProjects.map((project, index) => (
      <div key={index} style={{ width: '280px' }}>
        <ProjectCard
          title={project.title}
          description={project.description}
          image={project.image}
          category={project.category}
          year={project.year}
          status={project.status}
        />
      </div>
    )),
  },
};

export const CustomSpacing: Story = {
  args: {
    gap: '3rem',
    padding: '2rem 1rem',
    children: sampleProjects.slice(0, 3).map((project, index) => (
      <div key={index} style={{ width: '320px' }}>
        <ProjectCard
          title={project.title}
          description={project.description}
          image={project.image}
          category={project.category}
          year={project.year}
          status={project.status}
          variant="featured"
        />
      </div>
    )),
  },
};
