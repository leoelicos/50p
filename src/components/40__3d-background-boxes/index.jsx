import { useEffect, useState } from 'react'
import './style/style.css'

export default function _3DBackgroundBoxes() {
  const [big, setBig] = useState(true)
  const toggleBig = () => {
    setBig((prev) => !prev)
  }
  const [boxes, setBoxes] = useState(
    new Array(16).fill(undefined).map((_, idx) => {
      const i = Math.floor(idx / 4)
      const j = idx % 4
      return { i, j }
    })
  )

  return (
    <div className='app-40'>
      <div className='body'>
        <button
          id='btn'
          className='magic'
          onClick={toggleBig}>
          Magic ⚫
        </button>
        {boxes ? (
          <div
            id='boxes'
            className={`boxes ${big ? 'big' : ''}`}>
            {boxes.map(({ i, j }, idx) => (
              <div
                key={idx}
                className='box'
                style={{ backgroundPosition: `${-j * 125}px ${-i * 125}px` }}
              />
            ))}
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  )
}
