import { useState } from 'react'
import './style/style.css'
const data = [
  { src: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80', name: 'home', iconClass: 'fas fa-home' },
  { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', name: 'work', iconClass: 'fas fa-box' },
  { src: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80', name: 'blog', iconClass: 'fas fa-pen' },
  { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80', name: 'about', iconClass: 'fas fa-users' }
]

export default function MobileTabNavigation() {
  const [show, setShow] = useState(0)

  return (
    <div className='app-38'>
      <div className='body'>
        <div className='phone'>
          {data.map(({ src, name }, i) => (
            <img
              src={src}
              alt={name}
              key={name}
              className={`content ${show === i ? 'show' : ''}`}
            />
          ))}
          <nav>
            <ul>
              {data.map(({ name, iconClass }, i) => (
                <li
                  className={`${show === i ? 'active' : ''}`}
                  onClick={() => {
                    setShow(i)
                  }}>
                  <i className={iconClass} />
                  <p>{name}</p>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
