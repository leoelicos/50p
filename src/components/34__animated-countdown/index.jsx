import { useState } from 'react'
import './style/style.css'

export default function AnimatedCountdown() {
  const initialState = [
    { val: 3, animation: 'in' },
    { val: 2, animation: '' },
    { val: 1, animation: '' },
    { val: 0, animation: '' }
  ]
  const [nums, setNums] = useState(initialState)
  const [final, setFinal] = useState(false)

  function resetDOM() {
    setFinal(false)
    setNums(initialState)
  }

  const handleAnimationEnd = (i, animationName) => {
    if (i === 3 && animationName === 'goOut') {
      setFinal(true)
    } else if (animationName === 'goIn') {
      setNums((prev) => prev.map((v, idx) => (i === idx ? { ...v, animation: 'out' } : v)))
    } else if (animationName === 'goOut') {
      setNums((prev) => prev.map((v, idx) => (idx === i ? { ...v, animation: '' } : idx === i + 1 ? { ...v, animation: 'in' } : v)))
    }
  }

  return (
    <div className='app-34'>
      <div className='body'>
        <div className={`counter ${final ? 'hide' : ''}`}>
          <div className='nums'>
            {nums.map(({ val, animation }, i) => (
              <span
                key={val}
                className={animation}
                onAnimationEnd={(e) => {
                  handleAnimationEnd(i, e.animationName)
                }}>
                {val}
              </span>
            ))}
          </div>
          <h4>Get Ready</h4>
        </div>
        <div className={`final ${final ? 'show' : ''}`}>
          <h1>GO</h1>
          <button
            id='replay'
            onClick={resetDOM}>
            <span>Replay</span>
          </button>
        </div>
      </div>
    </div>
  )
}
