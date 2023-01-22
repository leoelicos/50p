import { useState } from 'react'
import './style/style.css'

export default function DoubleClickHeart() {
  const [clickTime, setClickTime] = useState(0)
  const [timesClicked, setTimesClicked] = useState(0)

  const [hearts, setHearts] = useState([])

  const updateHearts = (timestamp) => setHearts((prev) => prev.filter((heart) => heart.timestamp !== timestamp))

  const handleClick = (e) => {
    let t = new Date().getTime()
    if (clickTime > 0 && t - clickTime < 800) {
      const heart = document.createElement('i')
      heart.classList.add('fas')
      heart.classList.add('fa-heart')

      setHearts((prev) => prev.slice().concat({ timestamp: new Date().getTime(), yInside: e.clientY - e.target.offsetTop, xInside: e.clientX - e.target.offsetLeft }))

      setTimesClicked((prev) => prev + 1)

      setTimeout(updateHearts, 1000)

      setClickTime(0)
    } else {
      setClickTime(t)
    }
  }

  return (
    <App>
      <Body>
        <h3>
          Double click on the image to <i className='fas fa-heart'></i> it
        </h3>
        <small>
          You liked it <Times timesClicked={timesClicked} /> times
        </small>
        <LoveMe
          handleClick={handleClick}
          hearts={hearts}
        />
      </Body>
    </App>
  )
}
const App = ({ children }) => <div className='app-29'>{children}</div>
const Body = ({ children }) => <div className='body'>{children}</div>
const Times = ({ timesClicked }) => {
  return <span>{timesClicked}</span>
}
const LoveMe = ({ handleClick, hearts }) => {
  return (
    <div
      className='loveMe'
      onClick={handleClick}>
      {hearts.map(({ timestamp, xInside, yInside }) => (
        <i
          className='fas fa-heart'
          style={{ top: `${yInside}px`, left: `${xInside}px` }}
          key={timestamp}
        />
      ))}
    </div>
  )
}
