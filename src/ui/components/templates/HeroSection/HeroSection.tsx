import type React from 'react';
import { styled } from 'styled-components';
import { colors, spacing, breakpoints } from '../../../design-tokens';
import { Typography } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';

const HeroContainer = styled.div<{ 
  $height?: string;
  $overlay?: boolean;
  $notFullHeight?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${({ $height, $notFullHeight }) => 
    $notFullHeight ? '500px' : ($height || '100vh')
  };
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%);
  color: ${colors.textOnDark};
  text-align: center;
  padding: ${spacing[12]} ${spacing[5]};
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 20%, ${colors.primary}4D 0%, transparent 50%), 
                radial-gradient(circle at 70% 80%, ${colors.primaryLight}33 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: ${breakpoints.md}) {
    min-height: ${({ $height }) => $height || '80vh'};
    padding: ${spacing[8]} ${spacing[4]};
    background-attachment: scroll;
  }
  
  @media (max-width: ${breakpoints.sm}) {
    min-height: ${({ $height }) => $height || '70vh'};
    padding: ${spacing[6]} ${spacing[3]};
  }
`;

const HeroBackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, ${colors.primary}CC 0%, ${colors.primaryLight}99 100%);
  z-index: 1;
`;

const HeroContent = styled.div<{ $maxWidth?: string }>`
  max-width: ${({ $maxWidth }) => $maxWidth || '800px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[6]};
  z-index: 2;
  position: relative;
  animation: fadeInUp 1s ease-out;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroActions = styled.div`
  display: flex;
  gap: ${spacing[4]};
  flex-wrap: wrap;
  justify-content: center;
  animation: fadeInUp 1s ease-out 0.3s both;
  
  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
    
    button {
      width: 100%;
    }
  }
`;

const HeroSubtitle = styled(Typography)`
  animation: fadeInUp 1s ease-out 0.1s both;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  background: ${colors.accent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroTitle = styled(Typography)`
  animation: fadeInUp 1s ease-out 0.2s both;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  line-height: 1.1;
`;

const HeroDescription = styled(Typography)`
  animation: fadeInUp 1s ease-out 0.4s both;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  line-height: 1.6;
`;

export interface HeroAction {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
}

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  height?: string;
  notFullHeight?: boolean;
  actions?: HeroAction[];
  maxWidth?: string;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  height,
  notFullHeight,
  actions = [],
  maxWidth,
  className,
}) => {
  return (
    <HeroContainer
      $height={height}
      $notFullHeight={notFullHeight}
      className={className}
    >
      {backgroundImage && (
        <picture>
          <source srcSet={backgroundImage.replace('.jpg', '.webp')} type="image/webp" />
          <HeroBackgroundImage
            src={backgroundImage}
            alt=""
            fetchPriority="high"
            loading="eager"
          />
        </picture>
      )}
      <HeroOverlay />
      <HeroContent $maxWidth={maxWidth}>
        {subtitle && (
          <HeroSubtitle variant="overline" color="textOnDark">
            {subtitle}
          </HeroSubtitle>
        )}
        
        <HeroTitle variant="h1" color="textOnDark" align="center">
          {title}
        </HeroTitle>
        
        {description && (
          <HeroDescription variant="body1" color="textOnDark" align="center">
            {description}
          </HeroDescription>
        )}
        
        {actions.length > 0 && (
          <HeroActions>
            {actions.map((action) => (
              <Button
                key={action.text}
                variant={action.variant || 'primary'}
                size={action.size || 'large'}
                onClick={action.onClick}
              >
                {action.text}
              </Button>
            ))}
          </HeroActions>
        )}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
