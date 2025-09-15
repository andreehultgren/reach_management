import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Close } from "@mui/icons-material";
import styled from "styled-components";

import Logo from "../Logo";
import ContactUs from "./ContactUs";
import { COLORS, COMPANY_INFO, Z_INDEX, BREAKPOINTS } from "../constants";

const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${Z_INDEX.navbar};
  width: 100%;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${COLORS.gray200};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
`;

const NavBarContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  
  &:hover {
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.textPrimary};
  font-size: 0.9rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  letter-spacing: -0.01em;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  white-space: nowrap;
  
  &:hover {
    background: ${COLORS.gray100};
    color: ${COLORS.primary};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0.25rem;
    left: 50%;
    width: 0;
    height: 2px;
    background: ${COLORS.primary};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(-50%);
    border-radius: 1px;
  }
  
  &:hover::before {
    width: 60%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${COLORS.textPrimary};
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  align-items: center;
  justify-content: center;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  
  &:hover {
    background: ${COLORS.gray100};
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: flex;
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(15px);
  z-index: ${Z_INDEX.modal};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.5rem;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: ${props => props.$isOpen ? 'auto' : 'none'};
`;

const MobileNavLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.white};
  font-size: 1.25rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  letter-spacing: -0.01em;
  padding: 0.75rem 1.25rem;
  border-radius: 0.75rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  width: 100%;
  max-width: 300px;
  position: relative;
  pointer-events: auto;
  z-index: 1;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${COLORS.white};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const CloseButton = styled.button`
  position: fixed;
  top: 1.4rem;
  right: 1.4rem;
  z-index: ${Z_INDEX.modal + 1};
  background: none;
  border: none;
  color: ${COLORS.white};
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const ContactUsWrapper = styled.div`
  margin-left: 0.5rem;
  
  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin-left: 0;
    margin-top: 0.5rem;
  }
`;

const links = [
	{ to: "/", label: "Hem" },
	{ to: "/tjanster", label: "Tjänster" },
	{ to: "/jobba-hos-oss", label: "Jobb" },
	{ to: "/om-oss", label: "Om oss" },
];

export default function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const contactUsRef = useRef<HTMLButtonElement>(null);
	const popupRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > Number.parseInt(BREAKPOINTS.mobile)) {
				setIsMobileMenuOpen(false);
			}
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);


	useEffect(() => {
		if (!isMobileMenuOpen) return;
		
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Node;
			const insideContactUs = contactUsRef.current?.contains(target);
			const insidePopup = popupRef.current?.contains(target);
			
			if (!insideContactUs && !insidePopup) {
				setIsMobileMenuOpen(false);
			}
		};
		
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [isMobileMenuOpen]);

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isMobileMenuOpen]);

	const handleMobileMenuToggle = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const handleLinkClick = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			<NavBarContainer>
				<NavBarContent>
					<LogoLink to="/" onClick={handleLinkClick}>
						<Logo size={18} name={COMPANY_INFO.name} />
					</LogoLink>
					
					<NavLinks>
						{links.map((link) => (
							<NavLink
								key={link.to}
								to={link.to}
								onClick={handleLinkClick}
							>
								{link.label}
							</NavLink>
						))}
						<ContactUsWrapper>
							<ContactUs ref={contactUsRef} popupRef={popupRef} />
						</ContactUsWrapper>
					</NavLinks>
					
					<MobileMenuButton
						onClick={handleMobileMenuToggle}
						aria-label="Toggle mobile menu"
					>
						<Menu />
					</MobileMenuButton>
				</NavBarContent>
			</NavBarContainer>

			<MobileMenu $isOpen={isMobileMenuOpen}>
				<CloseButton
					onClick={handleMobileMenuToggle}
					aria-label="Close mobile menu"
				>
					<Close />
				</CloseButton>
				
				{links.map((link) => (
					<MobileNavLink
						key={link.to}
						to={link.to}
					>
						{link.label}
					</MobileNavLink>
				))}
				
				<ContactUsWrapper>
					<ContactUs ref={contactUsRef} popupRef={popupRef} />
				</ContactUsWrapper>
			</MobileMenu>
		</>
	);
}
