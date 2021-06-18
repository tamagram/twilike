import React from 'react'
import styled from 'styled-components'
import StyledMain from './main/Main'
import StyledNavbar from './Navbar'
import StyledSub from './Sub'

const StyledHome: React.FC = () => {
  return (
    <Home>
      <StyledNavbar />
      <StyledMain />
      <StyledSub />
    </Home>
  )
}

const Home = styled.div`
  display: flex;
  flex-direction: row;
  left: calc(50% - 1440px/2); // 中心拡大が可能になる
  position: absolute;
`
export default StyledHome