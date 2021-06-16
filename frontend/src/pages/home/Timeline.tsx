import React from 'react'
import styled from 'styled-components'
import StyledTweet from './components/Tweet'
import Tweet from './components/Tweet'

const StyledTimeline: React.FC = () => {
  return (
    <Timeline>
      timeline
      {/* <Tweet /> */}
      <StyledTweet />
    </Timeline>
  )
}

const Timeline = styled.div`
  position: absolute;
  width: 697px;
  height: 2631px;
  left: 203px;
  top: 202px;

  background: #234256;
  border: 3px solid #B4C8C0;
  box-sizing: border-box;
`


export default StyledTimeline