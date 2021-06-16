import React from 'react'
import styled from 'styled-components'
import StyledHeader from './Header'
import Header from './Header'
import Navbar from './Navbar'
import Sidecontent from './Sidecontent'
import StyledTimeline from './Timeline'

const StyledHome: React.FC = () => {
  return (
    <Home>
      <StyledHeader />
      <Navbar />
      <StyledTimeline />
      <Sidecontent />
    </Home>
  )
}

const Home = styled.div`
  height: 1024px;
  width: 1440px;
  background-color: #ffffff;
`

export default StyledHome