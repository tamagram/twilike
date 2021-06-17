import React from 'react'
import styled from 'styled-components'
import StyledHeader from './Header'
import StyledNavbar from './Navbar'
import StyledSide from './Side'
import StyledTweet from './Tweet'

const StyledHome: React.FC = () => {
  return (
    <Home>
      <StyledHeader />
      <StyledNavbar />
      <StyledTweet />
      <StyledSide />
    </Home>
  )
}

const Home = styled.div`
  /* Home */
  position: relative;

  background: #FFFFFF;
`

export default StyledHome