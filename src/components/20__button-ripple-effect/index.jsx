import { useState } from 'react'
import './style/style.css'

export default function ButtonRippleEffect() {
  const [xInside, setXInside] = useState(0)
  const [yInside, setYInside] = useState(0)
  const [active, setActive] = useState(false)
  return (
    <div className='app-20'>
      <div className='body'>
        <button
          className='ripple'
          onClick={(e) => {
            const x = e.clientX
            const y = e.clientY

            const buttonTop = e.target.offsetTop
            const buttonLeft = e.target.offsetLeft

            setXInside(x - buttonLeft)
            setYInside(y - buttonTop)

            setActive(true)
            setTimeout(() => {
              setActive(false)
            }, 500)
          }}>
          Click Me
          {active ? (
            <span
              className='circle'
              style={{ top: `${yInside}px`, left: `${xInside}px` }}
            />
          ) : null}
        </button>
      </div>
    </div>
  )
}
