import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background: #222;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  font-size: 1rem;
  gap: 2rem;
`;

const FooterText = styled.div`
  opacity: 0.85;
  display: flex;
  align-items: center;
`;

const Divider = styled.span`
  height: 1.5em;
  width: 1px;
  background: #555;
  margin: 0 1rem;
  display: inline-block;
`;

export default function FooterPage() {
  return (
    <FooterContainer>
      <FooterText>© 2025 Planova AB</FooterText>
      <Divider />
      <FooterText>Org.nr: 556677-8899</FooterText>
      <Divider />
      <FooterText><a href="mailto:info@planova.se" style={{color: 'inherit'}}>info@planova.se</a></FooterText>
    </FooterContainer>
  );
}
