import { useState } from 'react'
import './style/style.css'
export default function ProgressSteps() {
  const circles = [1, 2, 3, 4]
  const [active, setActive] = useState(0)
  const handleNext = () => {
    setActive((prev) => prev + 1)
  }
  const handlePrev = () => {
    setActive((prev) => prev - 1)
  }
  return (
    <App>
      <Body>
        <Container>
          <ProgressContainer>
            <Progress active={active} />
            {circles.map((circle, i) => (
              <Circle
                key={i}
                active={active >= i}
                value={circle}
              />
            ))}
          </ProgressContainer>
          <PrevButton
            disabled={active === 0}
            onClick={handlePrev}
          />
          <NextButton
            disabled={active === 3}
            onClick={handleNext}
          />
        </Container>
      </Body>
    </App>
  )
}

const App = ({ children }) => <div className='app_02'>{children}</div>
const Body = ({ children }) => <div className='body'>{children}</div>
const Container = ({ children }) => <div className='container'>{children}</div>
const ProgressContainer = ({ children }) => <div className='progress-container'>{children}</div>
const Progress = ({ children, active }) => (
  <div
    className='progress'
    id='progress'
    style={{ width: `${(active / 3) * 100}%` }}>
    {children}
  </div>
)
const Circle = ({ active, value }) => <div className={`circle ${active ? 'active' : ''}`}>{value}</div>
const PrevButton = ({ disabled, onClick }) => (
  <button
    className='btn'
    id='prev'
    disabled={disabled}
    onClick={onClick}>
    Prev
  </button>
)
const NextButton = ({ disabled, onClick }) => (
  <button
    className='btn'
    id='next'
    disabled={disabled}
    onClick={onClick}>
    Next
  </button>
)
