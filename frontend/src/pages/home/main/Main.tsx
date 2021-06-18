import styled from "styled-components"

const StyledMain: React.VFC = () => {
  return (
    <Main>
      <Header>
        <Title>HOME</Title>
        <Vector />
        <Sub>d
        </Sub>
      </Header>
      <Tweet>
        <Icon />
        <TweetContent>
          <Name>Name</Name>
          <Text>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Text>
        </TweetContent>
      </Tweet>
      <Tweet>
        <Icon />
        <TweetContent>
          <Name>Name</Name>
          <Text>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Text>
        </TweetContent>
      </Tweet>
    </Main>
  )
}

const Main = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 600px;
  overflow-y: auto;
  margin-left: 240px;
`
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
const Sub = styled.div`
  border-radius: 0.625rem;
  height: 65px;
  background-color: #c4c4c4;
  align-self: stretch;
`
const Tweet = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1.75rem 2.125rem;
  gap: 1.25rem;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
`
const Icon = styled.div`
  height: 70px;
  width: 70px;
`
const TweetContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.75rem;
`
const Name = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 24px;
  font-family: Roboto;
  line-height: auto;
  color: #ffffff;
`
const Text = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 12px;
  font-family: Roboto;
  line-height: auto;
  color: #ffffff;
`

export default StyledMain