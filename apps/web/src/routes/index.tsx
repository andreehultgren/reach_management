
import { createFileRoute } from '@tanstack/react-router'
import FullPageImageWithText from '../components/FullPageImageWithText'
import { styled } from 'styled-components'
import Section from '../components/Section';
import ProjectScroller from '../components/ProjectScroller';
import Project from '../components/Project';

export const Route = createFileRoute('/')({
  component: LandingPage,
})

const ContentLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-self:flex-end;
  padding-bottom: 2rem;
  padding-right: 2rem;
  @media (max-width: 900px) {
    padding-top: 2rem;
    padding-right: 0;
    padding-bottom: 0;
    justify-content: flex-start;
  }
`;

const Phrase = styled.h1`
  padding: 0 2rem;
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
  return (
    <div>
      <FullPageImageWithText imageUrl="/stockholm.jpg">
        <ContentLeft data-testid="landing-page-content-left">
          <Phrase>Tydliga leveranser <span style={{whiteSpace: "nowrap"}}>utan fluff</span></Phrase>
        </ContentLeft>
      </FullPageImageWithText>
      <Section>
        <Phrase>Våra projekt</Phrase>
        <ProjectScroller>
          <Project 
            title='Tech Park'
            description='A business park for technology startups and innovation.'
            image='https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'  
          />
          <Project 
            title='Tech Park'
            description='A business park for technology startups and innovation.'
            image='https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'  
          />
          <Project 
            title='Tech Park'
            description='A business park for technology startups and innovation.'
            image='https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'  
          />
          <Project 
            title='Tech Park'
            description='A business park for technology startups and innovation.'
            image='https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'  
          />
        </ProjectScroller>
      </Section>
    </div>
  )
}
