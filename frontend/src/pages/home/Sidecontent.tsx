import React from 'react'
import styled from 'styled-components'

const StyledSidecontent: React.FC = () => {
  return (
    <Sidecontent>
      sidecontent
    </Sidecontent>
  )
}
const Sidecontent = styled.div`
  position: absolute;
  width: 540px;
  height: 1024px;
  left: 900px;
  top: 0px;

  background: #234256;
  border: 3px solid #B4C8C0;
  box-sizing: border-box;
`

export default StyledSidecontent