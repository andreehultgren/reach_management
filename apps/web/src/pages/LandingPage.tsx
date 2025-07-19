
import styled from 'styled-components';
// import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';

const TRANSPARENCY = 0.69;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100svh;
  width: 100%;
  box-sizing: border-box;
  padding: 4rem;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
`;

const ContentLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-self:flex-end;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  @media (max-width: 900px) {
    padding-top: 2rem;
    padding-right: 0;
    padding-bottom: 0;
    justify-content: flex-start;
  }
`;



interface BackgroundFilterProps {
  transparency?: number;
}

const BackgroundFilter = styled.div<BackgroundFilterProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: ${({ transparency = TRANSPARENCY }) => `rgba(255, 255, 255, ${transparency})`};
    transition: background 1s linear;
  }
`;

const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('/stockholm.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1100px) {
    background-position: center;
  }
  @media (max-width: 900px) {
    background-image: url('/stockholm.jpg');
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100svh;
  width: 100%;
`;

const Phrase = styled.h1`
  color: #000;
  @media (max-width: 900px) {
    font-size: 3rem;
  }
  @media (max-width: 600px){
    font-size: 3rem;
  }
  @media (max-width: 400px){
    font-size: 3rem;
  };
`;

export default function LandingPage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = '/stockholm.jpg';
    img.onload = () => setLoaded(true);
  }, []);
  return (
    <Container data-testid="landing-page-container">
      <BackgroundFilter transparency={loaded ? TRANSPARENCY : 0.2}>
        <BackgroundImage />
      </BackgroundFilter>
      <Content data-testid="landing-page-content">
        <ContentLeft data-testid="landing-page-content-left">
          <Phrase>Tydliga leveranser <span style={{whiteSpace: "nowrap"}}>utan fluff</span></Phrase>
        </ContentLeft>
      </Content>
    </Container>
  );
}
