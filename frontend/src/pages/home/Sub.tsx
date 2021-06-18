import styled from "styled-components"

const StyledSide: React.VFC = () => {
  return (
    <Side>
      <Searchbox />
      <Content />
      <Content />
    </Side>
  )
}

const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4.5rem 3.5625rem;
  gap: 3.25rem;
  border-left: 1px solid #c4c4c4;
  position: fixed;
  margin-left: 840px;
  height: 100vh;
  `
const Searchbox = styled.div`
  border-radius: 0.625rem;
  min-height: 58px;
  min-width: 330px;
  background-color: #c4c4c4;
`
const Content = styled.div`
  border-radius: 0.625rem;
  min-height: 631px;
  min-width: 330px;
  background-color: #c4c4c4;
`

export default StyledSide