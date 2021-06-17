import React from 'react'
import styled from 'styled-components'

const StyledHeader: React.VFC = () => {
  return (
    <Header>
      <Title>HOME</Title>
      <Sub>Sub</Sub>
    </Header>
  )
}

const Header = styled.div`
  /* Header */

  /* Auto Layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 21px 34px;

  position: absolute;
  height: 198px;
  left: 152px;
  right: 425px;
  top: 0px;

  background: #3C6494;
  border: 3px solid #C4C4C4;
  box-sizing: border-box;
`

const Title = styled.div`
  /* Title */
  position: static;
  width: 103px;
  height: 42px;
  left: 34px;
  top: 21px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;

  color: #FFFFFF;

  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 20px 0px;
`

const Sub = styled.div`
  /* Sub */
  position: static;
  width: 879px;
  height: 65px;
  left: calc(50% - 879px/2);
  top: 103px;

  background: #C4C4C4;
  border-radius: 10px;

  /* Inside Auto Layout */
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  margin: 20px 0px;
`

export default StyledHeader