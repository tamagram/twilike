import styled from "styled-components"

const StyledTweet: React.VFC = () => {
  return (
    <Tweet>
      <Icon src="" />
      <Name>Name</Name>
      <Text>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Text>
    </Tweet>
  )
}
const Tweet = styled.div`
      height: 221px;
      width: 697px;
      background-color: #234256;
      border: 0.1875rem solid #b4c8c0;
      `

const Text = styled.p`
      text-align: left;
      vertical-align: top;
      font-size: 18px;
      font-family: Roboto;
      line-height: auto;
      color: #ffffff;
      `

const Name = styled.div`
      text-align: left;
      vertical-align: top;
      font-size: 36px;
      font-family: Roboto;
      line-height: auto;
      color: #ffffff;
      `

const Icon = styled.img`
      height: 80px;
      width: 80px;
      `

export default StyledTweet