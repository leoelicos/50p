import { useEffect, useRef, useState } from 'react'
import './style/style.css'

export default function DrawingApp() {
  const canvas = useRef(null)

  const [pressed, setPressed] = useState(false)
  const [x, setX] = useState(undefined)
  const [y, setY] = useState(undefined)
  const [size, setSize] = useState(10)
  const [color, setColor] = useState('black')

  const [ctx, setCtx] = useState(null)
  useEffect(() => {
    setCtx(canvas.current.getContext('2d'))
  }, [canvas])

  function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
  }

  function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
  }

  return (
    <div className='app-22'>
      <div className='body'>
        <canvas
          ref={canvas}
          width='800'
          height='800'
          onMouseDown={(e) => {
            console.log('onMouseDown')
            setPressed(true)
            setX(e.offsetX)
            setY(e.offsetY)
          }}
          onMouseUp={(e) => {
            console.log('onMouseUp')
            setPressed(false)
            setX(undefined)
            setY(undefined)
          }}
          onMouseMove={(e) => {
            if (pressed) {
              console.log('onMouseMove pressed')
              const x2 = e.offsetX
              const y2 = e.offsetY
              drawCircle(x2, y2)
              drawLine(x, y, x2, y2)

              setX(x2)
              setY(y2)
            }
          }}
        />
        <div className='toolbox'>
          <button onClick={() => setSize((prev) => Math.min(prev + 5, 50))}>-</button>
          <span id='size'>10</span>
          <button onClick={() => setSize((prev) => Math.max(prev - 5, 0))}>+</button>
          <input
            type='color'
            onChange={(e) => {
              setColor(e.target.value)
            }}
          />
          <button
            id='clear'
            onClick={() => {
              ctx.clearRect(0, 0, canvas.width, canvas.height)
            }}>
            X
          </button>
        </div>
      </div>
    </div>
  )
}
