import { useCallback, useEffect, useRef, useState } from 'react'
import './style/style.css'
export default function ImageCarousel() {
  const [idx, setIdx] = useState(0)
  const intervalRef = useRef(null)
  const images = [
    { src: 'https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80', alt: 'first-image' },
    { src: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', alt: 'second-image' },
    { src: 'https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', alt: 'third-image' },
    { src: 'https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80', alt: 'fourth-image' }
  ]
  const run = useCallback(() => {
    setIdx((prev) => (prev + 1 === images.length ? 0 : prev + 1))
  }, [images.length])
  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(run, 2000)
  }, [run])
  useEffect(() => {
    resetInterval()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [resetInterval])

  return (
    <div className='app-35'>
      <div className='body'>
        <div className='carousel'>
          <div
            className='image-container'
            id='imgs'
            style={{ transform: `translateX(${-idx * 500}px)` }}>
            <img
              src='https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80'
              alt='first'
            />
            <img
              src='https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
              alt='second'
            />
            <img
              src='https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
              alt='third'
            />
            <img
              src='https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80'
              alt='fourth'
            />
          </div>

          <div className='buttons-container'>
            <button
              id='left'
              className='btn'
              onClick={() => {
                setIdx((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1))
                resetInterval()
              }}>
              Prev
            </button>
            <button
              id='right'
              className='btn'
              onClick={() => {
                setIdx((prev) => (prev + 1 === images.length ? 0 : prev + 1))
                resetInterval()
              }}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
