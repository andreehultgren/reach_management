import type React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';
import { colors, spacing, typography, breakpoints } from '../../../design-tokens';
import { Z_INDEX } from '../../../../constants';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import { Menu, Close } from '@mui/icons-material';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${Z_INDEX.navbar};
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${colors.gray200};
  transition: all 0.3s ease-in-out;
`;

const NavbarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${colors.primary};
  transition: all 0.2s ease-in-out;
  height: 100%;
  padding: 0;
  
  &:hover {
    transform: translateY(-1px);
  }
`;

const LogoImage = styled.img`
  height: 100%;
  width: auto;
  object-fit: contain;
  transition: all 0.2s ease-in-out;
  max-height: 60px;
  
  @media (max-width: ${breakpoints.md}) {
    max-height: 50px;
  }
`;


const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[6]};
  
  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled.a<{ $active?: boolean }>`
  text-decoration: none;
  color: ${({ $active }) => $active ? colors.primary : colors.textPrimary};
  font-weight: ${({ $active }) => $active ? typography.fontWeight.medium : typography.fontWeight.normal};
  transition: color 0.2s ease-in-out;
  
  &:hover {
    color: ${colors.primary};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${spacing[2]};
  border-radius: 4px;
  
  &:hover {
    background: ${colors.gray100};
  }
  
  @media (max-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${colors.white};
  z-index: ${Z_INDEX.modal};
  display: ${({ $isOpen }) => $isOpen ? 'flex' : 'none'};
  flex-direction: column;
  padding: ${spacing[6]} ${spacing[5]};
  gap: ${spacing[4]};
  
  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${spacing[4]};
  right: ${spacing[5]};
  background: none;
  border: none;
  cursor: pointer;
  padding: ${spacing[2]};
  border-radius: 4px;
  
  &:hover {
    background: ${colors.gray100};
  }
`;

const MobileNavLink = styled.a`
  text-decoration: none;
  color: ${colors.textPrimary};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.medium};
  padding: ${spacing[3]} 0;
  border-bottom: 1px solid ${colors.gray200};
  
  &:hover {
    color: ${colors.primary};
  }
`;

export interface NavbarLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavbarProps {
  logo: {
    text: string;
    href: string;
  };
  links: NavbarLink[];
  ctaButton?: {
    text: string;
    onClick: () => void;
  };
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  links,
  ctaButton,
  className,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <NavbarContainer className={className}>
        <NavbarContent>
          <Logo as="a" href={logo.href}>
            <LogoImage src="/logo.webp" alt={logo.text} />
          </Logo>
          
          <NavLinks>
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                $active={link.active}
                onClick={handleLinkClick}
              >
                {link.label}
              </NavLink>
            ))}
            {ctaButton && (
              <Button
                size="small"
                variant="primary"
                onClick={ctaButton.onClick}
              >
                {ctaButton.text}
              </Button>
            )}
          </NavLinks>
          
          <MobileMenuButton
            onClick={handleMobileMenuToggle}
            aria-label="Toggle mobile menu"
          >
            <Icon size="medium" color={colors.textPrimary}>
              <Menu />
            </Icon>
          </MobileMenuButton>
        </NavbarContent>
      </NavbarContainer>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <CloseButton
          onClick={handleMobileMenuToggle}
          aria-label="Close mobile menu"
        >
          <Icon size="medium" color={colors.textPrimary}>
            <Close />
          </Icon>
        </CloseButton>
        
        {links.map((link) => (
          <MobileNavLink
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
          >
            {link.label}
          </MobileNavLink>
        ))}
        
        {ctaButton && (
          <Button
            size="large"
            variant="primary"
            fullWidth
            onClick={() => {
              ctaButton.onClick();
              handleLinkClick();
            }}
          >
            {ctaButton.text}
          </Button>
        )}
      </MobileMenu>
    </>
  );
};

export default Navbar;
