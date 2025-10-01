import type React from 'react';
import { styled } from 'styled-components';
import { colors, spacing, breakpoints } from '../../../design-tokens';
import { Typography } from '../../atoms/Typography';

const FooterContainer = styled.footer`
  background: ${colors.footer};
  color: ${colors.textOnDark};
  width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${spacing[6]} ${spacing[5]};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[4]};
  
  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row;
    justify-content: center;
    gap: ${spacing[8]};
  }
`;

const Divider = styled.div`
  height: 1.5em;
  width: 1px;
  background: ${colors.gray400};
  display: none;
  
  @media (min-width: ${breakpoints.sm}) {
    display: block;
  }
`;

const FooterLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: opacity 0.2s ease-in-out;
  
  &:hover {
    opacity: 0.8;
  }
`;

export interface FooterLink {
  text: string;
  href: string;
}

export interface FooterProps {
  companyName: string;
  orgNumber: string;
  email: string;
  bankgiro: string;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  companyName,
  orgNumber,
  email,
  bankgiro,
  className,
}) => {
  return (
    <FooterContainer className={className}>
      <FooterContent>
        <Typography variant="body2" color="textOnDark">
          © 2025 {companyName} AB
        </Typography>
        
        <Divider />
        
        <Typography variant="body2" color="textOnDark">
          Org.nr: {orgNumber}
        </Typography>
        
        <Divider />
        <FooterLink href={`mailto:${email}`}>
          <Typography variant="body2" color="textOnDark">
            {email}
          </Typography>
        </FooterLink>

        <Divider />
        <FooterLink href={`https://www.bankgiro.se/bankgiro/${bankgiro}`}>
          <Typography variant="body2" color="textOnDark">
            BG: {bankgiro}
          </Typography>
        </FooterLink>
        
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
