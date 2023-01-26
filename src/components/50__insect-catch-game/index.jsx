import { useEffect, useRef, useState } from 'react'
import './style/style.css'

const data = [
  { src: 'http://pngimg.com/uploads/fly/fly_PNG3946.png', breed: 'fly' },
  { src: 'http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png', breed: 'mosquito' },
  { src: 'http://pngimg.com/uploads/spider/spider_PNG12.png', breed: 'spider' },
  { src: 'http://pngimg.com/uploads/roach/roach_PNG12163.png', breed: 'roach' }
]

export default function InsectCatchGame() {
  const [game, setGame] = useState(0)
  const [insect, setInsect] = useState(undefined)
  const [insects, setInsects] = useState([])
  const [score, setScore] = useState(0)

  const createInsect = () => {
    function getRandomLocation() {
      const width = window.innerWidth
      const height = window.innerHeight
      const x = Math.random() * (width - 200) + 100
      const y = Math.random() * (height - 200) + 100
      return { x, y }
    }
    const { x, y } = getRandomLocation()
    const timestamp = new Date().getTime()
    setInsects((prev) => prev.slice().concat({ x, y, timestamp }))
  }
  const removeInsect = (timestamp) => {
    setInsects((prev) => prev.filter((v) => v.timestamp !== timestamp))
  }
  const catchInsect = (timestamp) => {
    increaseScore()
    setTimeout(() => removeInsect(timestamp), 2000)
    createInsect()
    setTimeout(createInsect, 1)
  }
  const increaseScore = () => {
    setScore((prev) => prev + 1)
  }
  const timer = useRef(null)

  const [time, setTime] = useState({ m: '00', s: '00' })

  useEffect(() => {
    function increaseTime() {
      setTime((prev) => {
        const v1 = (+prev.s === 59 ? +prev.m + 1 : +prev.m).toString().padStart(2, '0')
        const v2 = ((+prev.s + 1) % 60).toString().padStart(2, '0')
        console.log({ v1, v2 })
        return {
          m: v1,
          s: v2
        }
      })
    }
    if (game === 2) {
      clearInterval(timer.current)
      timer.current = setInterval(increaseTime, 1000)
    }
  }, [game])

  return (
    <div className='app-50'>
      <div className='body'>
        <div className={`screen ${game > 0 ? 'up' : ''}`}>
          <h1>Catch The Insect</h1>
          <button
            className='btn'
            id='start-btn'
            onClick={() => {
              setGame(1)
            }}>
            Play Game
          </button>
        </div>

        <div className={`screen ${game > 1 ? 'up' : ''}`}>
          <h1>What is your "favourite" insect?</h1>
          <ul className='insects-list'>
            {data.map(({ src, breed }) => (
              <li key={breed}>
                <button
                  className='choose-insect-btn'
                  onClick={() => {
                    setInsect({ src, breed })
                    setGame(2)
                    setTimeout(createInsect, 1000)
                  }}>
                  <p>{breed}</p>
                  <img
                    src={src}
                    alt={breed}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div
          id='game-container'
          className='screen game-container'>
          {insects.map(({ x, y, timestamp }) => (
            <Insect
              key={timestamp}
              x={x}
              y={y}
              timestamp={timestamp}
              insect={insect}
              handleClick={catchInsect}
            />
          ))}
          <h3
            id='time'
            className='time'>
            Time: {time.m}:{time.s}
          </h3>
          <h3
            id='score'
            className='score'>
            Score: {score}
          </h3>
          <h5
            id='message'
            className={`message ${score > 19 ? 'visible' : ''}`}>
            Are you annoyed yet? <br />
            You are playing an impossible game!!
          </h5>
        </div>
      </div>
    </div>
  )
}
const Insect = ({ x, y, insect, handleClick }) => {
  const [caught, setCaught] = useState(false)
  return (
    <div
      className={`insect ${caught ? 'caught' : ''}`}
      style={{ top: `${y}px`, left: `${x}px` }}>
      <img
        src={insect.src}
        alt={insect.breed}
        style={{ transform: `rotate(${Math.random() * 360}deg)` }}
        onClick={() => {
          setCaught(true)
          handleClick()
        }}
      />
    </div>
  )
}
