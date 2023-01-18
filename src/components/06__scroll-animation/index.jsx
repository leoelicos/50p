import { faForwardStep } from '@fortawesome/free-solid-svg-icons'
import { forwardRef, useEffect, useRef, useState } from 'react'
import './style/style.css'
export default function ScrollAnimation() {
  const refs = useRef([])
  const [actives, setActives] = useState([])
  const triggerBottom = useRef((window.innerHeight / 5) * 4)
  const content = useRef(['Content', 'Content', 'Content', 'Content', 'Content', 'Content'])

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
        {content.current.map((text, i) => (
          <Box
            key={i}
            active={actives[i]}
            ref={(e) => {
              refs.current[i] = e
            }}
            text={text}
          />
        ))}
      </Body>
    </App>
  )
}

const App = ({ children }) => <div className='app-06'>{children}</div>
const Body = ({ children }) => <div className='body'>{children}</div>
const Box = forwardRef(function Box({ active, text }, ref) {
  return (
    <div
      className={`box ${active ? 'show' : ''}`}
      ref={ref}>
      <h2>{text}</h2>
    </div>
  )
})
