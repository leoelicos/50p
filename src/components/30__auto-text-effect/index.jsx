import { useEffect, useRef, useState } from 'react'
import './style/style.css'
const Text = ({ text, idx }) => <h1>{!!text?.length ? text.slice(0, idx) : 'Starting'}</h1>
export default function AutoTextEffect() {
  const [speed, setSpeed] = useState(1)
  const [active, setActive] = useState(1)
  const text = 'We Love Programming!'
  const timer = useRef(null)
  useEffect(() => {
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      setActive((prev) => (prev + 1 > text.length ? 1 : prev + 1))
    }, 300 / speed)
  }, [speed])

  return (
    <div className='app-30'>
      <div className='body'>
        <Text
          text={text}
          idx={active}
        />
        <div>
          <label htmlFor='speed'>Speed:</label>
          <input
            type='number'
            name='speed'
            id='speed'
            value={speed}
            min='1'
            max='10'
            step='1'
            onChange={(e) => {
              setSpeed(+e.target.value)
            }}
          />
        </div>
      </div>
    </div>
  )
}
