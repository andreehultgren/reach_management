import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { COLORS, CompanyName } from "../constants";
import { Menu } from "@mui/icons-material";
import Logo from "../Logo";
import ContactUs from "./ContactUs";
import { Link } from "@tanstack/react-router";
import { Typography } from "@mui/material";

const NavBarContainer = styled.nav`
  flex:1;
  position: fixed;
  top: 0;
  z-index:100;
  display: flex;
  justify-content: center;
  left: 0;
  width: 100vw;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 1rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  & > a:not(:last-child) {
    border-bottom: 2px solid red;
    padding-bottom: 0.25rem;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const NavBarHead = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const NavBarBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width:100%;
  padding: 0.5rem 1rem;
`;

const LogoLink = styled.a`
  text-decoration: none;
  transition: color 0.2s;
  font-size: 1.1rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    display: block;
    box-sizing: border-box;
  }
`;

const NavLinkContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuContainer = styled.div`
  display: none;
  position: relative;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    color: #333;
    font-size: 1.5rem;
    transition: color 0.2s;
    &:hover {
      color: ${COLORS.logoColorTwo};
    }
  }
`;
const NavLink = styled(Link)`
  text-decoration: none;
  transition: color 0.2s;
  padding: 0.25rem 1rem;
  border-radius: 1rem;
  width: fit-content;
  font-size: 1.1rem;
  font-weight:500;
  line-height: 1.5;
  transition: background 0.2s;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    display: block;
    box-sizing: border-box;
    color: ${COLORS.textPrimary};
  }
`;

const links = [
	{ to: "/", label: "Hem" },
	{ to: "/jobba-har", label: "Jobba här" },
	{ to: "/om-oss", label: "Om oss" },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const contactUsRef = useRef<HTMLButtonElement>(null);
	const popupRef = useRef<HTMLDivElement>(null);
	const bodyRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768) setOpen(false);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (!open) return;
		function handleClickOutside(event: MouseEvent) {
			const target = event.target as Node;
			const insideMenu = menuRef.current?.contains(target);
			const insideContactUs = contactUsRef.current?.contains(target);
			const insidePopup = popupRef.current?.contains(target);
			const insideBody = bodyRef.current?.contains(target);
			if (!insideMenu && !insideContactUs && !insidePopup && !insideBody) {
				setOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [open]);

	return (
		<NavBarContainer>
			<NavBar className={scrolled || open ? "glass" : ""}>
				<NavBarHead>
					<LogoLink href="/">
						<Logo size={18} name={CompanyName} />
					</LogoLink>
					<MenuContainer ref={menuRef}>
						<Menu onClick={() => setOpen((o) => !o)} />
					</MenuContainer>
					<NavLinkContainer>
						{links.map((link) => (
							<NavLink
								key={link.to}
								to={link.to}
								onClick={() => setOpen(false)}
							>
								<Typography sx={{ m: 0 }}>{link.label}</Typography>
							</NavLink>
						))}
						<ContactUs ref={contactUsRef} popupRef={popupRef} />
					</NavLinkContainer>
				</NavBarHead>
				{open && (
					<NavBarBody ref={bodyRef}>
						{links.map((link) => (
							<NavLink
								style={{ width: "100%", textAlign: "center" }}
								key={link.to}
								to={link.to}
								onClick={() => setOpen(false)}
							>
								<Typography sx={{ m: 0 }}>{link.label}</Typography>
							</NavLink>
						))}
						<ContactUs ref={contactUsRef} popupRef={popupRef} />
					</NavBarBody>
				)}
			</NavBar>
		</NavBarContainer>
	);
}
