import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './style/style.css'
export default function StickyNavbar() {
  const [active, setActive] = useState(false)
  const nav = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', fixNav)
  }, [])

  function fixNav() {
    setActive(window.scrollY > nav.current.offsetHeight + 150)
  }

  return (
    <div className='app-25'>
      <div className='body'>
        <nav
          className={`nav ${active ? 'active' : ''}`}
          ref={nav}>
          <div className='container'>
            <h1
              className='logo'
              style={{ margin: 0, fontSize: '1.5em' }}>
              <Link
                to={'/25-sticky-navbar'}
                style={{ fontSize: 'unset' }}>
                My Website
              </Link>
            </h1>
            <ul>
              <li>
                <button className='link current'>Home</button>
              </li>
              <li>
                <button className='link'>About</button>
              </li>
              <li>
                <button className='link'>Services</button>
              </li>
              <li>
                <button className='link'>Contact</button>
              </li>
            </ul>
          </div>
        </nav>
        <div className='hero'>
          <div className='container'>
            <h1>Welcome To My Website</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, neque?</p>
          </div>
        </div>
        <section className='container content'>
          <h2>Content One</h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae numquam, sequi eum modi ducimus vel? Necessitatibus, quidem fugiat? Excepturi deserunt distinctio dolore quam iure blanditiis, dolor, corrupti eligendi cupiditate quia autem possimus. Voluptas unde cum iure reiciendis! Velit nostrum tenetur iure quisquam suscipit impedit aliquam, animi vero culpa ea aliquid quo qui eos odit aperiam, eveniet possimus ipsam voluptas consequatur voluptatibus? Eligendi, quo dolore quia quisquam repellat placeat in ab laboriosam eveniet odit quis laborum inventore illo, ipsum delectus natus aspernatur. Vel labore nam quasi ullam minus alias ea inventore ipsam cum aperiam. Dolore impedit mollitia, non obcaecati vitae quibusdam.</p>

          <h3>Content Two</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequuntur est illo totam distinctio nulla unde, corrupti possimus iusto quasi?</p>
        </section>
      </div>
    </div>
  )
}
