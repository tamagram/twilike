import React from 'react'
import styled from 'styled-components'

const StyledHeader: React.FC = () => {
  return (
    <Header>
      header
    </ Header>
  )
}

const Header = styled.div`
  position: absolute;
  width: 697px;
  height: 202px;
  left: 203px;
  top: 0px;

  background: #234256;
  border: 3px solid #B4C8C0;
  box-sizing: border - box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export default StyledHeader