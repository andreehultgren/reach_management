import type React from 'react';
import { styled } from 'styled-components';
import { colors, spacing, typography } from '../../../design-tokens';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

const sizeStyles = {
  small: {
    padding: `${spacing[2]} ${spacing[3]}`,
    fontSize: typography.fontSize.sm,
    minHeight: '32px',
  },
  medium: {
    padding: `${spacing[2.5]} ${spacing[4]}`,
    fontSize: typography.fontSize.base,
    minHeight: '40px',
  },
  large: {
    padding: `${spacing[3]} ${spacing[5]}`,
    fontSize: typography.fontSize.lg,
    minHeight: '48px',
  },
};

const variantStyles = {
  primary: {
    background: colors.accent,
    color: colors.white,
    border: 'none',
    '&:hover': {
      background: colors.primary,
      transform: 'translateY(-1px)',
      boxShadow: `0 4px 12px ${colors.accent}40`,
    },
  },
  secondary: {
    background: colors.primary,
    color: colors.white,
    border: 'none',
    '&:hover': {
      background: colors.gray700,
      transform: 'translateY(-1px)',
      boxShadow: `0 4px 12px ${colors.primary}40`,
    },
  },
  outline: {
    background: 'transparent',
    color: colors.primary,
    border: `2px solid ${colors.primary}`,
    '&:hover': {
      background: colors.primary,
      color: colors.white,
      transform: 'translateY(-1px)',
      boxShadow: `0 4px 12px ${colors.primary}40`,
    },
  },
  ghost: {
    background: 'transparent',
    color: colors.primary,
    border: 'none',
    '&:hover': {
      background: colors.gray100,
      color: colors.accent,
    },
  },
};

const StyledButton = styled.button<{ 
  $size: ButtonSize; 
  $variant: ButtonVariant;
  $fullWidth?: boolean;
}>`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'fit-content'};
  
  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:focus {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
  }
`;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  variant = 'primary',
  fullWidth = false,
  children,
  ...props
}) => {
  return (
    <StyledButton
      $size={size}
      $variant={variant}
      $fullWidth={fullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
