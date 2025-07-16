import {  Suspense, useMemo, useState } from 'react';
import { styled } from 'styled-components'

import Navbar from './components/Navbar'
import { COLORS } from './constants'
import Footer from './components/Footer'
import { Pages } from './pages';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${COLORS.background};
  color-scheme: light dark;
  color: #333333;
`

function App() {

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const CurrentPage = useMemo(()=>{
    return Pages.find(p=>p.path === window.location.pathname);

  }, [window.location.pathname, Pages])
  
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState("");
  const PASSWORD = "kungandree"; // Change this to your desired password

  // Only enable password protection if running on a hosted environment (not localhost)
  const isHosted = typeof window !== 'undefined' && !window.location.hostname.match(/^localhost|^127\.|^192\.168|^0\.0\.0\.0/);

  if (isHosted && !authenticated) {
    return (
      <AppWrapper>
        <div >
          <h2>Enter Password</h2>
          <input
            type="password"
            value={input}
            onChange={e => setInput(e.target.value)}
            style={{ padding: '0.5rem', fontSize: '1rem', borderRadius: '6px', border: '1px solid #ccc', marginBottom: '1rem' }}
            onKeyDown={e => { if (e.key === 'Enter' && input === PASSWORD) setAuthenticated(true); }}
          />
          <button
            type="button"
            onClick={() => { if (input === PASSWORD) setAuthenticated(true); }}
            style={{ padding: '0.5rem 1.5rem', fontSize: '1rem', borderRadius: '6px', border: 'none', background: '#1976d2', color: '#fff', cursor: 'pointer' }}
          >
            Enter
          </button>
          {input && input !== PASSWORD && (
            <div style={{ color: 'red', marginTop: '0.5rem' }}>Incorrect password</div>
          )}
        </div>
      </AppWrapper>
    );
  }
  if(!CurrentPage){
    return <p>Page not found</p>
  }

  return (
    <AppWrapper>
      <Navbar/>
      <Suspense fallback={<p>Loading</p>}>
        {CurrentPage.Component}
      </Suspense>
      <Footer/>
    </AppWrapper>
  )
}

export default App
