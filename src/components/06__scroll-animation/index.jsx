import { useEffect, useRef } from 'react'
import './style/style.css'
export default function ScrollAnimation() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref6 = useRef(null)

  function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4
    let refs = [ref1, ref2, ref3, ref4, ref5, ref6]
    //
    refs.forEach((ref) => {
      let top = ref.current.getBoundingClientRect().top

      if (top < triggerBottom) ref.current.classList.add('show')
      else ref.current.classList.remove('show')
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
          ref={ref1}>
          <h2>Content</h2>
        </div>
        <div
          className='box'
          ref={ref2}>
          <h2>Content</h2>
        </div>
        <div
          className='box'
          ref={ref3}>
          <h2>Content</h2>
        </div>
        <div
          className='box'
          ref={ref4}>
          <h2>Content</h2>
        </div>
        <div
          className='box'
          ref={ref5}>
          <h2>Content</h2>
        </div>
        <div
          className='box'
          ref={ref6}>
          <h2>Content</h2>
        </div>
      </div>
    </div>
  )
}
