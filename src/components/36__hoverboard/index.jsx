import { useState } from 'react'
import './style/style.css'
export default function Hoverboard() {
  const color0 = '#e74c3c'
  const color1 = '#8e44ad'
  const color2 = '#3498db'
  const color3 = '#e67e22'
  const color4 = '#2ecc71'
  const colors = [color0, color1, color2, color3, color4]
  const getColor = () => colors[Math.floor(Math.random() * colors.length)]
  const squares = new Array(500).fill(0).map((_, i) => ({ id: `square${i}` }))

  return (
    <div className='app-36'>
      <div className='body'>
        <div
          className='container'
          id='container'>
          {squares.map(({ id }) => (
            <Square
              key={id}
              getColor={getColor}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const Square = ({ getColor }) => {
  const [active, setActive] = useState(false)
  const [color, setColor] = useState(null)
  return (
    <div
      className='square'
      onMouseOver={() => {
        setActive(true)
        setColor(getColor())
      }}
      onMouseOut={() => setActive(false)}
      style={
        active //
          ? { background: color, boxShadow: `0 0 2px ${color}, 0 0 10px ${color}` }
          : { background: '#1d1d1d', boxShadow: '0 0 2px #000' }
      }
    />
  )
}
