import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { styled } from 'styled-components'

import Navbar from './components/Navbar'
import { COLORS } from './constants'
// import Footer from './components/Footer'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${COLORS.background};
  color-scheme: light dark;
  color: #333333;
`

function App() {
  return (
    <AppWrapper>
      <Navbar/>
      <Outlet />
      <TanStackRouterDevtools />
      {/* <Footer/> */}
    </AppWrapper>
  )
}

export default App


