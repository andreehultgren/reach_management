import type React from 'react';
import { styled } from 'styled-components';
import { colors, spacing, breakpoints } from '../../../design-tokens';

const CardContainer = styled.div<{ 
  $elevation: number;
  $padding: string;
  $maxWidth?: string;
}>`
  background: ${colors.white};
  border-radius: 12px;
  box-shadow: ${({ $elevation }) => {
    switch ($elevation) {
      case 1: return '0 1px 3px rgba(0, 0, 0, 0.1)';
      case 2: return '0 4px 6px rgba(0, 0, 0, 0.1)';
      case 3: return '0 10px 15px rgba(0, 0, 0, 0.1)';
      case 4: return '0 20px 25px rgba(0, 0, 0, 0.1)';
      default: return '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
  }};
  padding: ${({ $padding }) => $padding};
  max-width: ${({ $maxWidth }) => $maxWidth || 'none'};
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ $elevation }) => {
      switch ($elevation) {
        case 1: return '0 4px 12px rgba(0, 0, 0, 0.15)';
        case 2: return '0 8px 20px rgba(0, 0, 0, 0.15)';
        case 3: return '0 20px 30px rgba(0, 0, 0, 0.15)';
        case 4: return '0 25px 40px rgba(0, 0, 0, 0.15)';
        default: return '0 4px 12px rgba(0, 0, 0, 0.15)';
      }
    }};
  }
  
  @media (max-width: ${breakpoints.md}) {
    border-radius: 8px;
  }
`;

const CardImage = styled.img<{ $aspectRatio?: string }>`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio || '16/9'};
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]};
`;

const CardActions = styled.div`
  display: flex;
  gap: ${spacing[2]};
  margin-top: auto;
  padding-top: ${spacing[4]};
`;

export interface CardProps {
  children: React.ReactNode;
  elevation?: 1 | 2 | 3 | 4;
  padding?: string;
  maxWidth?: string;
  image?: {
    src: string;
    alt: string;
    aspectRatio?: string;
  };
  actions?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  elevation = 2,
  padding = spacing[5],
  maxWidth,
  image,
  actions,
  className,
}) => {
  return (
    <CardContainer
      $elevation={elevation}
      $padding={image ? '0' : padding}
      $maxWidth={maxWidth}
      className={className}
    >
      {image && (
        <CardImage
          src={image.src}
          alt={image.alt}
          $aspectRatio={image.aspectRatio}
        />
      )}
      
      {(image || actions) ? (
        <CardContent style={{ padding: image ? padding : undefined }}>
          {children}
          {actions && <CardActions>{actions}</CardActions>}
        </CardContent>
      ) : (
        children
      )}
    </CardContainer>
  );
};

export default Card;
