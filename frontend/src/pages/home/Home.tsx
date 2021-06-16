import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Navbar from './Navbar'
import Sidecontent from './Sidecontent'
import Timeline from './Timeline'

const Home: React.FC = () => {
  return (
    <div className='Home'>
      <Header />
      <Navbar />
      <Timeline />
      <Sidecontent />
    </div >
  )
}

export default styled(Home)`
  height: 1024px;
  width: 1440px;
  background-color: #ffffff;
`
