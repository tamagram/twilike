import React from 'react'
import styled from 'styled-components'

const StyledSide: React.VFC = () => {
  return (
    <div className="StyledSide">
      <Side>
        <Searchbox />
        <Content />
      </Side>
    </div>
  )
}

const Side = styled.div`
  /* Side */

  /* Auto Layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;

  position: absolute;
  width: 425px;
  height: 815px;
  right: 0px;
  top: 0px;

  background: #0B1E37;
`
const Searchbox = styled.div`
  /* Searchbox */

  /* Auto Layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;

  position: static;
  width: 345px;
  height: 82.1px;
  left: 40px;
  top: 40px;

  background: #C4C4C4;
  border-radius: 20px;

  /* Inside Auto Layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 47px 0px;
`
const Content = styled.div`
  /* Content */

  /* Auto Layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  position: static;
  width: 345px;
  height: 643px;
  left: 40px;
  top: 132px;

  background: #C4C4C4;
  border-radius: 20px;

  /* Inside Auto Layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
  margin: 47px 0px;
`

export default StyledSide