import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import {COLORS, CompanyName} from '../constants'
import {Menu} from "@mui/icons-material"
import Logo from '../Logo';
import { Pages } from '../pages';
import CallToAction from './CallToAction';

const NavBarContainer = styled.nav`
  flex:1;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  left: 0;
  width: 100vw;
`

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
const NavLink = styled.a`
  text-decoration: none;
  transition: color 0.2s;
  padding: 0.25rem 1rem;
  border-radius: 1rem;
  width: fit-content;
  font-size: .875rem;
  font-weight:500;
  line-height: 1.5;
  transition: background 0.2s;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    display: block;
    box-sizing: border-box;
    color: white;
    background: rgba(0, 91, 150, 0.9);
    &:hover {
     background: rgba(0, 163, 224, 0.9);
    }
  }
`;




export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <NavBarContainer>
      
      <NavBar className={(scrolled || open) ? 'glass' : ''}>
        <NavBarHead >
          <LogoLink href="/">
            <Logo size={18} name={CompanyName}/>
          </LogoLink>
          <MenuContainer ref={menuRef}>
            <Menu onClick={() => setOpen(o => !o)}/>
          </MenuContainer>
          <NavLinkContainer>
            {Pages.map(page => (
              <NavLink key={page.path}
                href={page.path}
                onClick={() => setOpen(false)}
              >
                {page.name}
              </NavLink>
            ))}
            <CallToAction onClick={() => setOpen(false)}>
              Contact me
            </CallToAction>
          </NavLinkContainer>
        </NavBarHead>
        {open && (<NavBarBody>
          {Pages.map(page => (
            <NavLink key={page.path}

              href={page.path}
              onClick={() => setOpen(false)}
            >
              {page.name}
            </NavLink>
          ))}
          <CallToAction onClick={() => setOpen(false)}>
            Contact me
          </CallToAction>
        </NavBarBody>)}
        
      </NavBar>
      
    </NavBarContainer>
  )
}
