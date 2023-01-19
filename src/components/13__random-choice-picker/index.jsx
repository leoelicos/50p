import { useEffect, useRef, useState } from 'react'
import './style/style.css'
export default function RandomChoicePicker() {
  const textarea = useRef(null)
  const tagsEl = useRef(null)

  const [tags, setTags] = useState([])

  const createTags = (input) => {
    setTags(
      input
        .split(',')
        .filter((tag) => tag.trim() !== '')
        .map((tag) => tag.trim())
    )
  }

  useEffect(() => {
    textarea.current.addEventListener('keyup', (e) => {
      createTags(e.target.value)

      if (e.key === 'Enter') {
        setTimeout(() => {
          e.target.value = ''
        }, 10)

        randomSelect()
      }
    })
  }, [])

  useEffect(() => {
    textarea.current.focus()
  }, [])

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
            id='textarea'></textarea>

          <div
            id='tags'
            ref={tagsEl}>
            {tags.map((tag, i) => (
              <span
                className='tag'
                key={i}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function randomSelect() {
  const times = 30

  const interval = setInterval(() => {
    const randomTag = pickRandomTag()

    highlightTag(randomTag)

    setTimeout(() => {
      unhighlightTag(randomTag)
    }, 100)
  }, 100)

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
    }, 100)
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}

function unhighlightTag(tag) {
  tag.classList.remove('highlight')
}
