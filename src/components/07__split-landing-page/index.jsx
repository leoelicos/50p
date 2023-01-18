import { useState } from 'react'
import './style/style.css'
export default function SplitLandingPage() {
  const [leftHover, setLeftHover] = useState(false)
  const [rightHover, setRightHover] = useState(false)
  const handleMouseEnterLeft = () => {
    console.log(`handleMouseEnterLeft`)
    setLeftHover(true)
  }
  const handleMouseLeaveLeft = () => {
    console.log(`handleMouseLeaveLeft`)
    setLeftHover(false)
  }
  const handleMouseEnterRight = () => {
    console.log(`handleMouseEnterRight`)
    setRightHover(true)
  }
  const handleMouseLeaveRight = () => {
    console.log(`handleMouseLeaveRight`)
    setRightHover(false)
  }
  return (
    <App>
      <Body>
        <Container
          leftHover={leftHover}
          rightHover={rightHover}>
          <Left
            handleMouseEnterLeft={handleMouseEnterLeft}
            handleMouseLeaveLeft={handleMouseLeaveLeft}
            leftHover={leftHover}>
            <h1>Playstation 5</h1>
            <Link>Buy Now</Link>
          </Left>
          <Right
            handleMouseEnterRight={handleMouseEnterRight}
            handleMouseLeaveRight={handleMouseLeaveRight}
            rightHover={rightHover}>
            <h1>XBox Series X</h1>
            <Link>Buy Now</Link>
          </Right>
        </Container>
      </Body>
    </App>
  )
}

const App = ({ children }) => <div className='app-07'>{children}</div>
const Body = ({ children }) => <div className='body'>{children}</div>
function Container({ children, leftHover, rightHover }) {
  console.log({ leftHover, rightHover })
  return <div className={`container ${leftHover ? 'hover-left' : rightHover ? 'hover-right' : ''}`}>{children}</div>
}
const Left = ({ children, handleMouseEnterLeft, handleMouseLeaveLeft }) => (
  <div
    className='split left'
    onMouseEnter={handleMouseEnterLeft}
    onMouseLeave={handleMouseLeaveLeft}>
    {children}
  </div>
)
const Right = ({ children, handleMouseEnterRight, handleMouseLeaveRight }) => (
  <div
    className='split right'
    onMouseEnter={handleMouseEnterRight}
    onMouseLeave={handleMouseLeaveRight}>
    {children}
  </div>
)
const Link = ({ children }) => (
  <a
    href='#'
    className='btn'>
    {children}
  </a>
)
