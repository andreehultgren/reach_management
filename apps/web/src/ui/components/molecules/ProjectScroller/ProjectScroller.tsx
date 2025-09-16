import type React from 'react';
import { styled } from 'styled-components';
import { colors, spacing, breakpoints } from '../../../design-tokens';

const ScrollerContainer = styled.div<{ 
  $variant?: 'default' | 'minimal' | 'showcase';
  $gap?: string;
  $padding?: string;
}>`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: ${({ $gap, $variant = 'default' }) => {
    if ($gap) return $gap;
    switch ($variant) {
      case 'minimal': return spacing[3];
      case 'showcase': return spacing[6];
      default: return spacing[4];
    }
  }};
  padding: ${({ $padding, $variant = 'default' }) => {
    if ($padding) return $padding;
    switch ($variant) {
      case 'minimal': return `${spacing[2]} ${spacing[4]}`;
      case 'showcase': return `${spacing[6]} ${spacing[4]}`;
      default: return `${spacing[4]} ${spacing[4]}`;
    }
  }};
  scrollbar-width: thin;
  scrollbar-color: ${colors.gray300} transparent;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${colors.gray300};
    border-radius: 4px;
    transition: background 0.2s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.gray400};
  }
  
  /* Hide scrollbar on mobile */
  @media (max-width: ${breakpoints.sm}) {
    &::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
  }
  
  /* Smooth scrolling */
  scroll-behavior: smooth;
  
  /* Snap scrolling for better UX */
  scroll-snap-type: x mandatory;
  
  /* Ensure children snap to scroll points */
  & > * {
    scroll-snap-align: start;
    flex-shrink: 0;
  }
`;

const ScrollIndicator = styled.div<{ $show: boolean }>`
  position: absolute;
  right: ${spacing[4]};
  top: 50%;
  transform: translateY(-50%);
  background: ${colors.white};
  border: 1px solid ${colors.gray300};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: ${({ $show }) => $show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  
  &:hover {
    background: ${colors.primaryLight};
    border-color: ${colors.primary};
    transform: translateY(-50%) scale(1.1);
  }
  
  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;

const ScrollHint = styled.div<{ $show: boolean }>`
  position: absolute;
  bottom: ${spacing[2]};
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: ${colors.white};
  padding: ${spacing[1]} ${spacing[2]};
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  display: ${({ $show }) => $show ? 'block' : 'none'};
  animation: fadeInOut 3s ease-in-out;
  
  @keyframes fadeInOut {
    0%, 100% { opacity: 0; }
    20%, 80% { opacity: 1; }
  }
  
  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
`;

export interface ProjectScrollerProps {
  children: React.ReactNode;
  variant?: 'default' | 'minimal' | 'showcase';
  gap?: string;
  padding?: string;
  showScrollIndicator?: boolean;
  showScrollHint?: boolean;
  className?: string;
}

export const ProjectScroller: React.FC<ProjectScrollerProps> = ({
  children,
  variant = 'default',
  gap,
  padding,
  showScrollIndicator = true,
  showScrollHint = true,
  className,
}) => {
  const scrollToEnd = () => {
    const container = document.querySelector(`[data-scroller="${className}"]`) as HTMLElement;
    if (container) {
      container.scrollTo({
        left: container.scrollWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Container>
      <ScrollerContainer
        $variant={variant}
        $gap={gap}
        $padding={padding}
        className={className}
        data-scroller={className}
      >
        {children}
      </ScrollerContainer>
      
      <ScrollIndicator $show={showScrollIndicator} onClick={scrollToEnd}>
        →
      </ScrollIndicator>
      
      <ScrollHint $show={showScrollHint}>
        Scroll to see more →
      </ScrollHint>
    </Container>
  );
};

export default ProjectScroller;
