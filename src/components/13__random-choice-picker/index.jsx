import { useEffect, useRef, useState } from 'react'
import './style/style.css'
export default function RandomChoicePicker() {
  const textarea = useRef(null)
  const tagsEl = useRef(null)

  const [tags, setTags] = useState([])
  const [highlighted, setHighlighted] = useState(null)
  const [typed, setTyped] = useState('')

  const [lastKey, setLastKey] = useState('')

  useEffect(() => {
    setTags(
      typed
        .split(',')
        .filter((tag) => tag.trim() !== '')
        .map((tag) => tag.trim())
    )
  }, [typed])

  useEffect(() => {
    if (lastKey === 'Enter') {
      setTyped((prev) => prev.slice(0, -1))
      randomSelect()
      setLastKey(null)
    }
  }, [lastKey])

  useEffect(() => {
    textarea.current.addEventListener('keyup', (e) => setLastKey(e.key))
  }, [])

  useEffect(() => {
    textarea.current.focus()
  }, [])

  function pickRandomTag() {
    return Math.floor(Math.random() * tags.length)
  }

  function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
      const randomTag = pickRandomTag()
      setHighlighted(randomTag)
    }, 100)

    setTimeout(() => {
      clearInterval(interval)
    }, times * 100)
  }

  return (
    <div className='app-13'>
      <div className='body'>
        <div className='container'>
          <h3>
            Enter all of the choices divided by a comma (',').
            <br />
            Press enter when you're done.
          </h3>
          <textarea
            ref={textarea}
            placeholder='Enter choices here…'
            id='textarea'
            value={typed}
            onChange={(e) => setTyped(e.target.value)}></textarea>

          <div
            id='tags'
            ref={tagsEl}>
            {tags.map((tag, i) => (
              <span
                className={`tag ${highlighted === i ? 'highlight' : ''}`}
                key={i}
                highlighted={highlighted}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
