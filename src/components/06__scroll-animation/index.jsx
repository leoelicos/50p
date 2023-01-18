import { useEffect, useRef, useState } from 'react'
import './style/style.css'
export default function ScrollAnimation() {
  const refs = useRef([])
  const [actives, setActives] = useState([])
  const triggerBottom = useRef((window.innerHeight / 5) * 4)

  function checkBoxes() {
    setActives(
      refs.current.map((ref) => {
        let top = ref.getBoundingClientRect().top
        if (top < triggerBottom.current) return true
        return false
      })
    )
  }

  useEffect(() => {
    window.addEventListener('scroll', checkBoxes)
    checkBoxes()
    return () => window.removeEventListener('scroll', checkBoxes)
  }, [])

  return (
    <App>
      <Body>
        <h1>Scroll to see the animation</h1>
        {new Array(5).fill('Content').map((text, i) => (
          <div
            key={i}
            className={`box ${actives[i] ? 'show' : ''}`}
            ref={(e) => {
              refs.current[i] = e
            }}>
            <h2>{text}</h2>
          </div>
        ))}
      </Body>
    </App>
  )
}

const App = ({ children }) => <div className='app-06'>{children}</div>
const Body = ({ children }) => <div className='body'>{children}</div>
