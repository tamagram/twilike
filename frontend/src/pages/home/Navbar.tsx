import React from 'react'
import styled from 'styled-components'

const StyledNavbar: React.VFC = () => {
  return (
    <Navbar>
      <IconHome>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </IconHome>
      <IconPlane>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </IconPlane>
      <IconAdjust xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
      </IconAdjust>
    </Navbar>
  )
}

const Navbar = styled.div`
  /* Navbar */

  /* Auto Layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 152px;
  height: 1024px;
  left: 0px;
  top: 0px;

  background: #0B1E37;
`
const IconHome = styled.svg`
  /* IconHome */
  position: static;
  width: 80px;
  height: 80px;
  left: 36px;
  top: 340px;

  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 52px 0px;
`
const IconPlane = styled.svg`
  /* IconPlane */
  position: static;
  width: 80px;
  height: 80px;
  left: 36px;
  top: 472px;

  /* Inside Auto Layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 52px 0px;
`
const IconAdjust = styled.svg`
  /* IconAdjust */
  position: static;
  width: 80px;
  height: 80px;
  left: 36px;
  top: 604px;

  /* Inside Auto Layout */
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 52px 0px;
`

export default StyledNavbar