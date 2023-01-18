import { useEffect, useRef } from 'react'
import './style/style.css'
export default function ScrollAnimation() {
  const refs = useRef([])

  function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4
    console.log('Refs current', refs.current)
    refs.current.forEach((ref) => {
      let top = ref.getBoundingClientRect().top

      if (top < triggerBottom) ref.classList.add('show')
      else ref.classList.remove('show')
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', checkBoxes)

    checkBoxes()

    return () => window.removeEventListener('scroll', checkBoxes)
  }, [])

  return (
    <div className='app-06'>
      <div className='body'>
        <h1>Scroll to see the animation</h1>
        <div
          className='box'
          ref={(e) => refs.current.push(e)}>
          <h2>Content</h2>
        </div>
        <div
          className='box'
          ref={(e) => refs.current.push(e)}>
          <h2>Content</h2>
        </div>
        <div
          className='box'
          ref={(e) => refs.current.push(e)}>
          <h2>Content</h2>
        </div>
        <div
          className='box'
          ref={(e) => refs.current.push(e)}>
          <h2>Content</h2>
        </div>
        <div
          className='box'
          ref={(e) => refs.current.push(e)}>
          <h2>Content</h2>
        </div>
        <div
          className='box'
          ref={(e) => refs.current.push(e)}>
          <h2>Content</h2>
        </div>
      </div>
    </div>
  )
}
