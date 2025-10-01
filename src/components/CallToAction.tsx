import React from 'react';
import { COLORS } from '../constants';
import { styled } from 'styled-components';

type Size = 'small' | 'medium' | 'large';

const sizeStyles = {
  small: {
    padding: '0.25rem 0.75rem',
    fontSize: '0.875rem',
  },
  medium: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
  },
  large: {
    padding: '0.75rem 1.25rem',
    fontSize: '1.125rem',
  },
};

const StyledButton = styled.button<{ size: Size }>`
  background: ${COLORS.logoColorTwo};
  padding: ${({ size }) => sizeStyles[size].padding};
  font-size: ${({ size }) => sizeStyles[size].fontSize};
  border: 0px solid transparent;
  border-radius: 9999px;
  cursor: pointer;
  transition: background 0.2s;
  width: fit-content;
  &:hover {
    background: ${COLORS.logoColor};
  }
`;

type CallToActionProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: Size;
};

const CallToAction: React.FC<CallToActionProps> = ({
  size = 'medium',
  children,
  ...props
}) => (
  <StyledButton size={size} {...props}>
    {children}
  </StyledButton>
);

export default CallToAction;
