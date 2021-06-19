import styled from "styled-components"
import StyledForm from "./form/Form"
import Form from "./form/Form"

const StyledHeader: React.VFC = () => {
  return (
    <Header>
      <Title>HOME</Title>
      <Vector />
      <StyledForm />
    </Header>
  )
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1.3125rem 2.125rem;
  gap: 1rem;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  align-self: stretch;
`
const Title = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 36px;
  font-family: Roboto;
  line-height: auto;
  color: #ffffff;
`
const Vector = styled.div`
  border: 1px solid #C4C4C4;
  align-self: stretch;
`
const Sub = styled.textarea`
  text-align: left;
  vertical-align: top;
  font-size: 12px;
  font-family: Roboto;
  border-radius: 0.625rem;
  height: 65px;
  background-color: #c4c4c4;
  align-self: stretch;
`

export default StyledHeader