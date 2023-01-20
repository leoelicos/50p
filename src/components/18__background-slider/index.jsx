import './style/style.css'
import links from './data/backgroundImages'
import { useState } from 'react'
export default function BackgroundSlider() {
  const [active, setActive] = useState(0)
  return (
    <div className='app-18'>
      <div
        className='body'
        style={{ backgroundImage: `url('${links[active]}')` }}>
        <div className='slider-container'>
          {links.map((link, i) => (
            <div
              key={link}
              className={`slide ${active === i ? 'active' : ''}`}
              style={{ backgroundImage: `url('${link}')` }}></div>
          ))}
          <button
            className='arrow left-arrow'
            onClick={() => {
              setActive(active + 1 === links.length ? 0 : active + 1)
            }}>
            <i className='fas fa-arrow-left'></i>
          </button>

          <button
            className='arrow right-arrow'
            onClick={() => {
              setActive(active - 1 < 0 ? links.length - 1 : active - 1)
            }}>
            <i className='fas fa-arrow-right'></i>
          </button>
        </div>
      </div>
    </div>
  )
}
