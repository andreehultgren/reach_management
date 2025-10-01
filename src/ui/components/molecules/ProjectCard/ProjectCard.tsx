import type React from 'react';
import { styled } from 'styled-components';
import { colors, spacing, breakpoints } from '../../../design-tokens';
import { Typography } from '../../atoms/Typography/Typography';
import { Button } from '../../atoms/Button/Button';

const CardContainer = styled.div<{ $variant?: 'default' | 'featured' | 'minimal' }>`
  width: 100%;
  max-width: 400px;
  background: ${colors.white};
  border-radius: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'featured': return '20px';
      case 'minimal': return '8px';
      default: return '16px';
    }
  }};
  box-shadow: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'featured': return '0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)';
      case 'minimal': return '0 2px 8px rgba(0, 0, 0, 0.08)';
      default: return '0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)';
    }
  }};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &:hover {
    transform: ${({ $variant = 'default' }) => {
      switch ($variant) {
        case 'featured': return 'translateY(-8px) scale(1.02)';
        case 'minimal': return 'translateY(-2px)';
        default: return 'translateY(-4px) scale(1.01)';
      }
    }};
    box-shadow: ${({ $variant = 'default' }) => {
      switch ($variant) {
        case 'featured': return '0 32px 64px rgba(0, 0, 0, 0.2), 0 16px 32px rgba(0, 0, 0, 0.15)';
        case 'minimal': return '0 4px 16px rgba(0, 0, 0, 0.12)';
        default: return '0 16px 40px rgba(0, 0, 0, 0.18), 0 8px 16px rgba(0, 0, 0, 0.12)';
      }
    }};
  }
  
  @media (max-width: ${breakpoints.sm}) {
    max-width: 100%;
    margin: 0;
  }
`;

const ImageContainer = styled.div<{ $variant?: 'default' | 'featured' | 'minimal' }>`
  width: 100%;
  height: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'featured': return '240px';
      case 'minimal': return '160px';
      default: return '200px';
    }
  }};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${colors.primaryLight}20 0%,
      transparent 50%,
      ${colors.accentLight}20 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  ${CardContainer}:hover &::before {
    opacity: 1;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
  
  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 60%,
    rgba(0, 0, 0, 0.7) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: ${spacing[4]};
  
  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

const OverlayButton = styled(Button)`
  background: rgba(255, 255, 255, 0.9);
  color: ${colors.primary};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  &:hover {
    background: ${colors.white};
    transform: translateY(-2px);
  }
`;

const Content = styled.div<{ $variant?: 'default' | 'featured' | 'minimal' }>`
  padding: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'featured': return spacing[6];
      case 'minimal': return spacing[4];
      default: return spacing[5];
    }
  }};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]};
`;

const ProjectTitle = styled(Typography)`
  margin: 0;
  line-height: 1.3;
`;

const ProjectDescription = styled(Typography)`
  margin: 0;
  line-height: 1.6;
  color: ${colors.textSecondary};
`;

const ProjectMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[2]};
  margin-top: ${spacing[2]};
  padding-top: ${spacing[3]};
  border-top: 1px solid ${colors.gray200};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[1]};
  color: ${colors.textSecondary};
  font-size: 0.875rem;
`;

const StatusBadge = styled.div<{ $status?: 'completed' | 'ongoing' | 'planned' }>`
  padding: ${spacing[1]} ${spacing[2]};
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: ${({ $status = 'completed' }) => {
    switch ($status) {
      case 'completed': return colors.success;
      case 'ongoing': return colors.warning;
      case 'planned': return colors.gray300;
      default: return colors.success;
    }
  }};
  color: ${({ $status = 'completed' }) => {
    switch ($status) {
      case 'completed': return colors.white;
      case 'ongoing': return colors.white;
      case 'planned': return colors.textSecondary;
      default: return colors.white;
    }
  }};
`;

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  variant?: 'default' | 'featured' | 'minimal';
  status?: 'completed' | 'ongoing' | 'planned';
  category?: string;
  year?: string;
  onViewProject?: () => void;
  onViewDetails?: () => void;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  imageAlt,
  variant = 'default',
  status = 'completed',
  category,
  year,
  onViewProject,
  onViewDetails,
  className,
}) => {
  return (
    <CardContainer $variant={variant} className={className}>
      <ImageContainer $variant={variant}>
        <ProjectImage
          src={image}
          alt={imageAlt || title}
        />
        <Overlay>
          {onViewProject && (
            <OverlayButton size="small" onClick={onViewProject}>
              View Project
            </OverlayButton>
          )}
        </Overlay>
      </ImageContainer>
      
      <Content $variant={variant}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <ProjectTitle variant="h4" color="primary">
            {title}
          </ProjectTitle>
          <StatusBadge $status={status}>
            {status}
          </StatusBadge>
        </div>
        
        <ProjectDescription variant="body2">
          {description}
        </ProjectDescription>
        
        {(category || year) && (
          <ProjectMeta>
            {category && (
              <MetaItem>
                <span>📁</span>
                <span>{category}</span>
              </MetaItem>
            )}
            {year && (
              <MetaItem>
                <span>📅</span>
                <span>{year}</span>
              </MetaItem>
            )}
          </ProjectMeta>
        )}
        
        {onViewDetails && (
          <Button 
            variant="outline" 
            size="small" 
            onClick={onViewDetails}
            style={{ alignSelf: 'flex-start', marginTop: spacing[2] }}
          >
            Learn More
          </Button>
        )}
      </Content>
    </CardContainer>
  );
};

export default ProjectCard;
