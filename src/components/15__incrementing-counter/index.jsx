import { useEffect, useState } from 'react'
import './style/style.css'

export default function IncrementingCounter() {
  const counters = [
    { style: 'fab fa-twitter fa-3x', target: 12000, text: 'Twitter Followers' },
    { style: 'fab fa-youtube fa-3x', target: 5000, text: 'YouTube Subscribers' },
    { style: 'fab fa-facebook fa-3x', target: 7500, text: 'Facebook Fans' }
  ]

  return (
    <div className='app-15'>
      <div className='body'>
        {counters.map(({ style, target, text }) => (
          <Counter
            key={target}
            style={style}
            target={target}
            text={text}
          />
        ))}
      </div>
    </div>
  )
}

function Counter({ style, target, text }) {
  const [val, setVal] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => {
      if (val + target / 200 > target) {
        clearTimeout(t)
        setVal(target)
      } else setVal((prev) => prev + Math.floor(target / 200))
    }, 1)
  }, [val])

  return (
    <div className='counter-container'>
      <i className={style} />
      <span>{text}</span>
      <div className='counter'>{val}</div>
    </div>
  )
}
