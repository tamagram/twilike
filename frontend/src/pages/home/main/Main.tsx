import styled from "styled-components"
import StyledTweet from "./Tweet"
import StyledHeader from "./Header"

const StyledMain: React.VFC = () => {
  return (
    <Main>
      <StyledHeader />
      <StyledTweet />
      <StyledTweet />
      <StyledTweet />
      <StyledTweet />
      <StyledTweet />
      <StyledTweet />
      <StyledTweet />
      <StyledTweet />
      <StyledTweet />
      <StyledTweet />
      <StyledTweet />
      <StyledTweet />
    </Main>
  )
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 600px;
  margin-left: 240px;
`

export default StyledMain