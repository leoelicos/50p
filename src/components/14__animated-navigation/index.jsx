import { useState } from 'react'
import './style/style.css'
export default function AnimatedNavigation() {
  const [active, setActive] = useState(false)
  return (
    <div className='app-14'>
      <div className='body'>
        <nav
          className={active ? 'active' : ''}
          id='nav'>
          <ul>
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>Works</span>
            </li>
            <li>
              <span>About</span>
            </li>
            <li>
              <span>Contact</span>
            </li>
          </ul>
          <button
            className='icon'
            id='toggle'
            onClick={() => {
              setActive((prev) => !prev)
            }}>
            <div className='line line1'></div>
            <div className='line line2'></div>
          </button>
        </nav>
      </div>
    </div>
  )
}
