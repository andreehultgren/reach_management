import type React from 'react';
import { styled } from 'styled-components';
import { colors, spacing } from '../../../design-tokens';

type IconSize = 'small' | 'medium' | 'large' | 'xlarge';

const sizeStyles = {
  small: {
    fontSize: '16px',
    padding: spacing[1],
  },
  medium: {
    fontSize: '20px',
    padding: spacing[2],
  },
  large: {
    fontSize: '24px',
    padding: spacing[2.5],
  },
  xlarge: {
    fontSize: '32px',
    padding: spacing[3],
  },
};

const StyledIcon = styled.div<{ 
  $size: IconSize; 
  $color: string;
  $clickable?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ $color }) => $color};
  cursor: ${({ $clickable }) => $clickable ? 'pointer' : 'default'};
  transition: all 0.2s ease-in-out;
  
  ${({ $size }) => sizeStyles[$size]}
  
  ${({ $clickable }) => $clickable && `
    &:hover {
      opacity: 0.7;
    }
    
    &:focus {
      outline: 2px solid ${colors.primary};
      outline-offset: 2px;
      border-radius: 4px;
    }
  `}
`;

export interface IconProps {
  size?: IconSize;
  color?: string;
  clickable?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  'aria-label'?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  size = 'medium',
  color = colors.textPrimary,
  clickable = false,
  children,
  onClick,
  'aria-label': ariaLabel,
  className,
  ...props
}) => {
  return (
    <StyledIcon
      $size={size}
      $color={color}
      $clickable={clickable}
      onClick={onClick}
      aria-label={ariaLabel}
      className={className}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      {...props}
    >
      {children}
    </StyledIcon>
  );
};

export default Icon;
