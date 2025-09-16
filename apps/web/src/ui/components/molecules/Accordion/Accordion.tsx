import type React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';
import { colors, spacing } from '../../../design-tokens';
import { Typography } from '../../atoms/Typography';
import { Icon } from '../../atoms/Icon';
import { ExpandMore } from '@mui/icons-material';

const AccordionContainer = styled.div<{ $expanded: boolean }>`
  border: 1px solid ${colors.gray200};
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${colors.white};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  
  &:hover {
    border-color: ${colors.gray300};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }
  
  ${({ $expanded }) => $expanded && `
    border-color: ${colors.primary};
    box-shadow: 0 8px 25px rgba(0, 91, 150, 0.15);
    transform: translateY(-2px);
  `}
`;

const AccordionHeader = styled.button<{ $expanded: boolean }>`
  width: 100%;
  padding: ${spacing[4]} ${spacing[6]};
  background: ${({ $expanded }) => $expanded ? `linear-gradient(135deg, ${colors.primaryLight} 0%, ${colors.white} 100%)` : colors.white};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${({ $expanded }) => $expanded ? colors.primary : 'transparent'};
    transition: all 0.3s ease-in-out;
  }
  
  &:hover {
    background: ${({ $expanded }) => 
      $expanded 
        ? `linear-gradient(135deg, ${colors.primaryLight} 0%, ${colors.white} 100%)`
        : `linear-gradient(135deg, ${colors.gray50} 0%, ${colors.white} 100%)`
    };
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 91, 150, 0.1);
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

const AccordionContent = styled.div<{ $expanded: boolean }>`
  max-height: ${({ $expanded }) => $expanded ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${colors.white};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, ${colors.gray200} 20%, ${colors.gray200} 80%, transparent 100%);
    opacity: ${({ $expanded }) => $expanded ? '1' : '0'};
    transition: opacity 0.3s ease-in-out;
  }
`;

const AccordionBody = styled.div`
  padding: ${spacing[6]} ${spacing[6]} ${spacing[6]} ${spacing[6]};
  animation: fadeInUp 0.3s ease-out;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ExpandIcon = styled(Icon)<{ $expanded: boolean }>`
  transform: ${({ $expanded }) => $expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ $expanded }) => $expanded ? colors.primary : colors.gray100};
  color: ${({ $expanded }) => $expanded ? colors.white : colors.gray600};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
    transform: ${({ $expanded }) => $expanded ? 'rotate(180deg) scale(1.1)' : 'rotate(0deg) scale(1.1)'};
  }
`;

export interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  onToggle?: (expanded: boolean) => void;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultExpanded = false,
  onToggle,
  className,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const handleToggle = () => {
    const newExpanded = !expanded;
    setExpanded(newExpanded);
    onToggle?.(newExpanded);
  };

  return (
    <AccordionContainer $expanded={expanded} className={className}>
      <AccordionHeader 
        $expanded={expanded}
        onClick={handleToggle}
        aria-expanded={expanded}
        aria-controls={`accordion-content-${title}`}
      >
        <Typography variant="h5" color="primary">
          {title}
        </Typography>
        <ExpandIcon 
          $expanded={expanded}
          size="medium"
          color={colors.primary}
        >
          <ExpandMore />
        </ExpandIcon>
      </AccordionHeader>
      
      <AccordionContent 
        $expanded={expanded}
        id={`accordion-content-${title}`}
      >
        <AccordionBody>
          {children}
        </AccordionBody>
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
