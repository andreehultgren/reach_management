import type React from 'react';
import { styled } from 'styled-components';
import { colors, typography } from '../../../design-tokens';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline';
type TypographyColor = 'primary' | 'secondary' | 'text' | 'textOnDark' | 'accent' | 'error' | 'success' | 'warning';

const variantStyles = {
  h1: {
    fontSize: typography.fontSize['6xl'],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
    margin: 0,
  },
  h2: {
    fontSize: typography.fontSize['5xl'],
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.tight,
    margin: 0,
  },
  h3: {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.snug,
    margin: 0,
  },
  h4: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.snug,
    margin: 0,
  },
  h5: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.normal,
    margin: 0,
  },
  h6: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,
    margin: 0,
  },
  body1: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.relaxed,
    margin: 0,
  },
  body2: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.normal,
    margin: 0,
  },
  caption: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.normal,
    margin: 0,
  },
  overline: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,
    textTransform: 'uppercase' as const,
    letterSpacing: typography.letterSpacing.wide,
    margin: 0,
  },
};

const colorStyles = {
  primary: colors.textPrimary,
  secondary: colors.textSecondary,
  text: colors.textPrimary,
  textOnDark: colors.textOnDark,
  accent: colors.accent,
  error: colors.error,
  success: colors.success,
  warning: colors.warning,
};

const StyledTypography = styled.div<{ 
  $variant: TypographyVariant; 
  $color: TypographyColor;
  $align?: 'left' | 'center' | 'right';
  style?: React.CSSProperties;
}>`
  font-family: ${typography.fontFamily.primary};
  color: ${({ $color }) => colorStyles[$color]};
  text-align: ${({ $align }) => $align || 'left'};
  
  ${({ $variant }) => variantStyles[$variant]}
  ${({ style }) => style && { ...style }}
`;

export interface TypographyProps {
  variant?: TypographyVariant;
  color?: TypographyColor;
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  style?: React.CSSProperties;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  color = 'text',
  align,
  children,
  as,
  style,
  className,
  ...props
}) => {
  const Component = as || (variant.startsWith('h') ? variant : 'div') as keyof React.JSX.IntrinsicElements;
  
  return (
    <StyledTypography
      as={Component}
      $variant={variant}
      $color={color}
      style={style}
      $align={align}
      className={className}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
