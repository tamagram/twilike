import styled from "styled-components"

const StyledTweet: React.VFC = () => {
  return (
    <Tweet>
      <Icon src='https://via.placeholder.com/150' />
      <TweetContent>
        <Name>Name</Name>
        <Text>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Text>
      </TweetContent>
    </Tweet>
  )
}

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
const Icon = styled.img`
  border-radius: 50%;
  min-height: 70px;
  min-width: 70px;
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


export default StyledTweet