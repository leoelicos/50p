import './style/style.css'

import testimonials from './data/'
import { useEffect, useRef, useState } from 'react'

export default function TestimonialBoxSwitcher() {
  const [active, setActive] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    timer.current = setInterval(() => {
      setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 1000)
    return () => {
      clearInterval(timer.current)
    }
  }, [])

  const { name, position, photo, text } = testimonials[active]

  return (
    <div className='app-47'>
      <div className='body'>
        <div className='testimonial-container'>
          <div className='progress-bar'></div>
          <div className='fas fa-quote-left fa-quote' />
          <div className='fas fa-quote-right fa-quote' />
          <p className='testimonial'>{text}</p>
          <div className='user'>
            <img
              src={photo}
              alt={name}
              className='user-image'
            />
            <div className='user-details'>
              <h4 className='username'>{name}</h4>
              <p className='role'>{position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
