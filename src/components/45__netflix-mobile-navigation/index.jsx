import { useState } from 'react'
import './style/style.css'
export default function NetflixMobileNavigation() {
  const [open, setOpen] = useState(false)
  return (
    <div className='app-45'>
      <div className='body'>
        <button
          className='nav-btn open-btn'
          onClick={() => setOpen(true)}>
          <i className='fas fa-bars'></i>
        </button>
        <img
          src='https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png'
          alt='Logo'
          className='logo'
        />
        <p className='text'>Mobile Navigation</p>
        <div className={`nav nav-black ${open ? 'visible' : ''}`}>
          <div className={`nav nav-red ${open ? 'visible' : ''}`}>
            <div className={`nav nav-white ${open ? 'visible' : ''}`}>
              <button
                className='nav-btn close-btn'
                onClick={() => setOpen(false)}>
                <i className='fas fa-times'></i>
              </button>

              <img
                src='https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png'
                alt='Logo'
                className='logo'
              />

              <ul className='list'>
                <li>
                  <a href='#'>Teams</a>
                </li>
                <li>
                  <a href='#'>Locations</a>
                </li>
                <li>
                  <a href='#'>Life at Netflix</a>
                </li>
                <li>
                  <ul>
                    <li>
                      <a href='#'>Netflix culture memo</a>
                    </li>
                    <li>
                      <a href='#'>Work life balance</a>
                    </li>
                    <li>
                      <a href='#'>Inclusion & diversity</a>
                    </li>
                    <li>
                      <a href='#'>Blog</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
