import styled from 'styled-components';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
}

const Card = styled.div`
  min-width: 280px;
  max-width: 320px;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  margin: 0 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1rem;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
`;

const ProjectDescription = styled.p`
  margin: 0;
  color: #444;
  font-size: 1rem;
`;

export default function Project({ title, description, image }: ProjectProps) {
  return (
    <Card>
      <ProjectImage src={image} alt={title} />
      <ProjectContent>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </ProjectContent>
    </Card>
  );
}
