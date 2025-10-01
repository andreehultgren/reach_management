import type React from 'react';
import { styled } from 'styled-components';
import { colors, spacing, breakpoints } from '../../../design-tokens';

const SectionContainer = styled.section<{ 
  $backgroundColor?: string; 
  $padding?: string;
  $maxWidth?: string;
  $variant?: 'default' | 'hero' | 'feature' | 'testimonial' | 'cta';
}>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: ${({ $padding, $variant = 'default' }) => {
    if ($padding) return $padding;
    switch ($variant) {
      case 'hero': return `${spacing[20]} ${spacing[5]}`;
      case 'feature': return `${spacing[16]} ${spacing[5]}`;
      case 'testimonial': return `${spacing[16]} ${spacing[5]}`;
      case 'cta': return `${spacing[16]} ${spacing[5]}`;
      default: return `${spacing[12]} ${spacing[5]}`;
    }
  }};
  box-sizing: border-box;
  margin: 0 auto;
  background: ${({ $backgroundColor, $variant = 'default' }) => {
    if ($backgroundColor) return $backgroundColor;
    switch ($variant) {
      case 'hero': return `linear-gradient(135deg, ${colors.white} 0%, ${colors.gray50} 100%)`;
      case 'feature': return colors.white;
      case 'testimonial': return `linear-gradient(135deg, ${colors.primaryLight} 0%, ${colors.white} 100%)`;
      case 'cta': return `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`;
      default: return 'inherit';
    }
  }};
  max-width: ${({ $maxWidth }) => $maxWidth || '1200px'};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ $variant = 'default' }) => {
      switch ($variant) {
        case 'hero': return `radial-gradient(circle at 20% 80%, ${colors.primaryLight}20 0%, transparent 50%)`;
        case 'testimonial': return `radial-gradient(circle at 80% 20%, ${colors.accentLight}30 0%, transparent 50%)`;
        case 'cta': return `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`;
        default: return 'none';
      }
    }};
    pointer-events: none;
    z-index: 0;
  }
  
  @media (max-width: ${breakpoints.md}) {
    padding: ${({ $padding, $variant = 'default' }) => {
      if ($padding) return $padding;
      switch ($variant) {
        case 'hero': return `${spacing[16]} ${spacing[4]}`;
        case 'feature': return `${spacing[12]} ${spacing[4]}`;
        case 'testimonial': return `${spacing[12]} ${spacing[4]}`;
        case 'cta': return `${spacing[12]} ${spacing[4]}`;
        default: return `${spacing[8]} ${spacing[4]}`;
      }
    }};
  }
  
  @media (max-width: ${breakpoints.sm}) {
    padding: ${({ $padding, $variant = 'default' }) => {
      if ($padding) return $padding;
      switch ($variant) {
        case 'hero': return `${spacing[12]} ${spacing[3]}`;
        case 'feature': return `${spacing[8]} ${spacing[3]}`;
        case 'testimonial': return `${spacing[8]} ${spacing[3]}`;
        case 'cta': return `${spacing[8]} ${spacing[3]}`;
        default: return `${spacing[6]} ${spacing[3]}`;
      }
    }};
  }
`;

const SectionContent = styled.div<{ 
  $align?: 'left' | 'center' | 'right';
  $variant?: 'default' | 'hero' | 'feature' | 'testimonial' | 'cta';
}>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $align }) => {
    switch ($align) {
      case 'center': return 'center';
      case 'right': return 'flex-end';
      default: return 'flex-start';
    }
  }};
  text-align: ${({ $align }) => $align || 'left'};
  gap: ${({ $variant = 'default' }) => {
    switch ($variant) {
      case 'hero': return spacing[8];
      case 'feature': return spacing[6];
      case 'testimonial': return spacing[6];
      case 'cta': return spacing[6];
      default: return spacing[4];
    }
  }};
  position: relative;
  z-index: 1;
  width: 100%;
  
  @media (max-width: ${breakpoints.md}) {
    gap: ${({ $variant = 'default' }) => {
      switch ($variant) {
        case 'hero': return spacing[6];
        case 'feature': return spacing[4];
        case 'testimonial': return spacing[4];
        case 'cta': return spacing[4];
        default: return spacing[3];
      }
    }};
  }
`;

export interface PageSectionProps {
  children: React.ReactNode;
  backgroundColor?: string;
  padding?: string;
  maxWidth?: string;
  align?: 'left' | 'center' | 'right';
  variant?: 'default' | 'hero' | 'feature' | 'testimonial' | 'cta';
  className?: string;
}

export const PageSection: React.FC<PageSectionProps> = ({
  children,
  backgroundColor,
  padding,
  maxWidth,
  align,
  variant = 'default',
  className,
}) => {
  return (
    <SectionContainer
      $backgroundColor={backgroundColor}
      $padding={padding}
      $maxWidth={maxWidth}
      $variant={variant}
      className={className}
    >
      <SectionContent $align={align} $variant={variant}>
        {children}
      </SectionContent>
    </SectionContainer>
  );
};

export default PageSection;
