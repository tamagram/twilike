import styled from "styled-components"

const StyledTweet: React.FC = () => {
  return (
    <Tweet>
      <Icon />
      <TweetContent>
        <Name>Name</Name>
        <Text>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Text>
      </TweetContent>
    </Tweet>
  )
}

const Tweet = styled.div`
  /* Tweet */

  /* Auto Layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 28px 34px;

  position: absolute;
  height: 142px;
  left: 152px;
  right: 425px;
  top: 198px;

  background: #0B1E37;
  border: 3px solid #C4C4C4;
  box-sizing: border-box;
`
const Icon = styled.img`
  /* Icon */
  position: static;
  width: 70px;
  height: 70px;
  left: 34px;
  top: 28px;

  background: url(.jpg), #C4C4C4;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 20px;
`

const TweetContent = styled.div`
  /* TweetContent */

  /* Auto Layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 668px;
  height: 84px;
  left: 124px;
  top: 28px;

  /* Inside Auto Layout */
  flex: none;
  order: 1;
  flex-grow: 1;
  margin: 0px 20px;
`
const Name = styled.p`
  /* Name */
  position: static;
  width: 64px;
  height: 28px;
  left: 0px;
  top: 0px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  color: #FFFFFF;

  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 12px 0px;
`

const Text = styled.p`
  /* Text */
  position: static;
  width: 668px;
  height: 68px;
  left: calc(50% - 668px/2);
  top: 40px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: #FFFFFF;

  /* Inside Auto Layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 12px 0px;
`

export default StyledTweet