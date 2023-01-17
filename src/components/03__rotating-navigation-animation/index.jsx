import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faHome, faTimes, faUserAlt } from '@fortawesome/free-solid-svg-icons'

import './style/style.css'

export default function RotatingNavigationAnimation() {
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClickClose = () => {
    setOpen(false)
  }

  return (
    <div className='app-03'>
      <div className='body'>
        <Container open={open}>
          <div className='circle-container show-nav'>
            <div className='circle'>
              <Close handleClickClose={handleClickClose} />
              <Open handleClickOpen={handleClickOpen} />
            </div>
          </div>
          <div className='content'>
            <h1>Secrets are hidden in corners</h1>
            <small>Maybe you should click it</small>
            <p>To find out more about me</p>
            <h3>Okay?</h3>
            <img
              src='https://picsum.photos/id/237/536/354'
              alt='doggy'
            />
            <p>Thanks</p>
          </div>
        </Container>
        <nav>
          <ul>
            <li>
              <FontAwesomeIcon icon={faHome} /> Home
            </li>
            <li>
              <FontAwesomeIcon icon={faUserAlt} /> About
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

function Open({ handleClickOpen }) {
  return (
    <button
      id='open'
      onClick={handleClickOpen}>
      <FontAwesomeIcon icon={faBars} />
    </button>
  )
}

function Close({ handleClickClose }) {
  return (
    <button
      id='close'
      onClick={handleClickClose}>
      <FontAwesomeIcon icon={faTimes} />
    </button>
  )
}

function Container({ children, open }) {
  return <div className={`container ${open ? 'show-nav' : ''}`}>{children}</div>
}
