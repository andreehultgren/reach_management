import styled from "styled-components";
import { Typography } from "@mui/material";

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

export default function Project({ title, description, image }: ProjectProps) {
	return (
		<Card>
			<ProjectImage src={image} alt={title} />
			<ProjectContent>
				<Typography variant="h3">{title}</Typography>
				<Typography variant="body1">{description}</Typography>
			</ProjectContent>
		</Card>
	);
}
