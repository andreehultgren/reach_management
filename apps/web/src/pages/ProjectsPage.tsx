import styled from 'styled-components';
import Project from '../components/Project';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 2rem;
  box-sizing: border-box;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
`;

const ProjectsScroller = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 16px;
  padding-bottom: 1rem;
  scrollbar-width: thin;
  scrollbar-color: #fff #fff;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 4px;
  }
`;

const projects = [
  {
    id: 'tower',
    title: 'City Center Tower',
    description: 'A 30-story office building in the heart of downtown.',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'apartments',
    title: 'Greenfield Apartments',
    description: 'Modern eco-friendly apartments with rooftop gardens.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'bridge',
    title: 'Riverside Bridge',
    description: 'A new bridge connecting the city’s east and west sides.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'mall',
    title: 'Sunset Mall',
    description: 'A large shopping mall with entertainment and dining.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'techpark',
    title: 'Tech Park',
    description: 'A business park for technology startups and innovation.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'library',
    title: 'Central Library',
    description: 'A new public library with modern architecture.',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'stadium',
    title: 'Stadium Renovation',
    description: 'Upgrading the city stadium for sports and concerts.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'tunnel',
    title: 'Mountain Tunnel',
    description: 'A tunnel project to improve mountain pass traffic.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80',
  }
];

export default function ProjectsPage() {
  return (
    <Container>
      <Title>Construction Projects</Title>
      <ProjectsScroller>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </ProjectsScroller>
    </Container>
  );
}
