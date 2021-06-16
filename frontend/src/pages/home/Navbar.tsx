import React from 'react'
import styled from 'styled-components'

const StyledNavbar: React.FC = () => {
  return (
    <Navbar>
      navbar
    </Navbar>
  )
}

const Navbar = styled.div`
position: absolute;
width: 203px;
height: 1024px;
left: 0px;
top: 0px;

background: #234256;
border: 3px solid #B4C8C0;
box-sizing: border-box;
`

export default StyledNavbar