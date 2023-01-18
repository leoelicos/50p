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
    //
    let top = ref1.current.getBoundingClientRect().top
    if (top < triggerBottom) ref1.current.classList.add('show')
    else ref1.current.classList.remove('show')

    //
    top = ref2.current.getBoundingClientRect().top
    if (top < triggerBottom) ref2.current.classList.add('show')
    else ref2.current.classList.remove('show')

    //
    top = ref3.current.getBoundingClientRect().top
    if (top < triggerBottom) ref3.current.classList.add('show')
    else ref3.current.classList.remove('show')

    //
    top = ref4.current.getBoundingClientRect().top
    if (top < triggerBottom) ref4.current.classList.add('show')
    else ref4.current.classList.remove('show')

    //
    top = ref5.current.getBoundingClientRect().top
    if (top < triggerBottom) ref5.current.classList.add('show')
    else ref5.current.classList.remove('show')

    //
    top = ref6.current.getBoundingClientRect().top
    if (top < triggerBottom) ref6.current.classList.add('show')
    else ref6.current.classList.remove('show')
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
