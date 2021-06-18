import styled from "styled-components"

const StyledNavbar: React.VFC = () => {
  return (
    <Navbar>
      <IconHome>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </IconHome>
      <IconPlane>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
      </IconPlane>
      <IconAdjust>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </IconAdjust>
    </Navbar>
  )
}

const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 1.25rem;
  gap: 2rem;
  position: fixed;
  border-right: 1px solid #c4c4c4;
  box-sizing: border-box;
  height: 100vh;
  width: 240px
`
const IconAdjust = styled.svg`
  height: 50px;
  width: 50px;
  color: #3C6494;
`
const IconPlane = styled.svg`
  height: 50px;
  width: 50px;
  color: #3C6494;
`
const IconHome = styled.svg`
  height: 50px;
  width: 50px;
  color: #3C6494;
`



export default StyledNavbar