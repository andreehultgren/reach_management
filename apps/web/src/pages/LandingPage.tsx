import { Check } from '@mui/icons-material';
import styled from 'styled-components';
import CallToAction from '../components/CallToAction';

const Container = styled.div`
  display: flex;
  overflow:hidden;
  padding: 2rem;
  box-sizing: border-box;
  max-width: 1080px;
  height: 100vh;
  margin: 0 auto;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 1rem;
  }
`;

const ContentLeft = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 0;
  padding-right: 2rem;
  @media (max-width: 900px) {
    padding-top: 2rem;
    padding-right: 0;
    align-items: center;
    justify-content: flex-start;
  }
`;
const ContentRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 0;
  padding-right: 2rem;
  @media (max-width: 900px) {
    padding-top: 2rem;
    padding-right: 0;
    align-items: center;
    justify-content: flex-start;
  }
`;


const Row = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #333;
  gap: 0.5rem;
  
  & > p {
    margin-left: 0.5rem;
    font-weight: 500;
    padding: 0;
    margin: 0;
  }
`;



export default function LandingPage() {
  return (
    <Container>
      <ContentLeft>
        <h1>Vi är skarpaste verktyget i lådan</h1>
        <Row>
          <Check/> <p>En av de mest effektiva projektledarna i Norden</p>
        </Row>
        <Row>
          <Check/> <p>Satsar ni på resultat, så är det oss ni ska satsa på</p>
        </Row>
        <Row>
          <Check/> <p>Vi gör aldrig fel, eller?</p>
        </Row>
        <br/>

        <CallToAction size="large" >
          Contact us
        </CallToAction>


        
      </ContentLeft>
      <ContentRight>
        <img src="/consultant.png" alt="Consultant" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
      </ContentRight>
    </Container>
  );
}
