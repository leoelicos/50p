import { useEffect, useRef, useState } from 'react'
import './style/style.css'

export default function DrawingApp() {
  const canvas = useRef(null)

  const [pressed, setPressed] = useState(false)
  const x = useRef(undefined)
  const y = useRef(undefined)
  const [size, setSize] = useState(10)
  const [color, setColor] = useState('black')

  function drawCircle(x, y) {
    const ctx = canvas.current.getContext('2d')
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
  }

  function drawLine(x1, y1, x2, y2) {
    const ctx = canvas.current.getContext('2d')
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
            setPressed(true)
            x.current = e.nativeEvent.offsetX
            y.current = e.nativeEvent.offsetY
          }}
          onMouseUp={(e) => {
            setPressed(false)
            x.current = undefined
            y.current = undefined
          }}
          onMouseMove={(e) => {
            if (pressed) {
              const x2 = e.nativeEvent.offsetX
              const y2 = e.nativeEvent.offsetY
              drawCircle(x2, y2)
              drawLine(x.current, y.current, x2, y2)

              x.current = x2
              y.current = y2
            }
          }}
        />
        <div className='toolbox'>
          <button onClick={() => setSize((prev) => Math.max(prev - 5, 0))}>-</button>
          <span id='size'>{size}</span>
          <button onClick={() => setSize((prev) => Math.min(prev + 5, 50))}>+</button>
          <input
            type='color'
            value={color}
            onChange={(e) => {
              const newColor = e.target.value
              setColor(newColor)
            }}
          />
          <button
            id='clear'
            onClick={() => {
              const ctx = canvas.current.getContext('2d')
              ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            }}>
            X
          </button>
        </div>
      </div>
    </div>
  )
}
