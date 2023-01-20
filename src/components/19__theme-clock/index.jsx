import { useEffect, useState } from 'react'
import './style/style.css'

export default function ThemeClock() {
  // map a range of numbers to another range of numbers

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const [light, setLight] = useState(true)
  const handleToggle = () => {
    setLight((prev) => !prev)
  }

  const scale = (num, in_min, in_max, out_min, out_max) => {
    console.log(num, in_min, in_max, out_min, out_max)
    console.log(((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min)
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }

  const [hoursForClock, setHoursForClock] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [ampm, setAmpm] = useState('AM')

  const [day, setDay] = useState(1)
  const [date, setDate] = useState(1)
  const [month, setMonth] = useState(1)

  const updateTime = () => {
    const time = new Date()
    const day = time.getDay()
    const date = time.getDate()
    const month = time.getMonth()
    const hours = time.getHours()
    const hoursForClock = hours % 12 // 12-hour clock

    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    setDay(day)
    setDate(date)
    setMonth(month)
    setHoursForClock(hoursForClock)
    setMinutes(minutes)
    setSeconds(seconds)
    setAmpm(ampm)
  }

  useEffect(() => {
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className={`app-19 ${light ? '' : 'dark'}`}>
      <div className='body'>
        <button
          className='toggle'
          onClick={handleToggle}>
          {light ? 'Dark mode' : 'Light mode'}
        </button>
        <div className='clock-container'>
          <div className='clock'>
            <div
              className='needle hour'
              style={{ transform: `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)` }}></div>
            <div
              className='needle minute'
              style={{ transform: `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)` }}></div>
            <div
              className='needle second'
              style={{ transform: `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)` }}></div>
            <div className='center-point'></div>
          </div>
          <div className='time'>{`${hoursForClock === 0 ? 12 : hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`}</div>
          <div className='date'>
            {`${days[day]}, ${months[month]}`} <span class='circle'>{date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
