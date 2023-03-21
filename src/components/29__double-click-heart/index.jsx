import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import './style/style.css'

export default function DoubleClickHeart() {
  const [lastClickTime, setLastClickTime] = useState(0)
  const [timesClicked, setTimesClicked] = useState(0)

  const [hearts, setHearts] = useState([])

  const removeHeart = (timestamp) => {
    setHearts((prev) => {
      const next = prev.filter((heart) => heart.timestamp !== timestamp)
      console.log({ function: 'setHearts', next })
      return next
    })
  }
  const addHeart = (yInside, xInside, timestamp) => {
    setHearts((prev) => {
      const next = prev.slice().concat({ yInside, xInside, timestamp })

      return next
    })
  }

  const handleClick = (e) => {
    let thisClickTime = new Date().getTime()
    console.log({ lastClickTime, thisClickTime })
    if (thisClickTime - lastClickTime < 800) {
      addHeart(e.clientY - e.target.offsetTop, e.clientX - e.target.offsetLeft, new Date().getTime())

      setTimesClicked((prev) => prev + 1)

      setTimeout(() => {
        removeHeart(thisClickTime)
      }, 3000)
    }

    setLastClickTime(thisClickTime)
  }

  return (
    <App>
      <Body>
        <h3>
          Double click on the image to{' '}
          <FontAwesomeIcon
            icon={faHeart}
            className='red'
          />{' '}
          it
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
        <FontAwesomeIcon
          icon={faHeart}
          className='heart red'
          style={{ top: `${yInside}px`, left: `${xInside}px`, zIndex: 1 }}
          key={timestamp}
        />
      ))}
    </div>
  )
}
