import './style/style.css'
import data from './data/index'
import { useEffect, useRef, useState } from 'react'
export default function DoubleVerticalSlider() {
  const [active, setActive] = useState(0)
  const sliderContainer = useRef(null)
  const slidesLength = data.length
  const sliderHeight = useRef(null)
  useEffect(() => {
    sliderHeight.current = sliderContainer.current.clientHeight
  }, [sliderContainer.curren])
  return (
    <div className='app-26'>
      <div className='body'>
        <div
          className='slider-container'
          ref={sliderContainer}>
          <div
            className='left-slide'
            style={{ top: `-${(slidesLength - 1) * 100}vh`, transform: `translateY(${active * sliderHeight.current}px)` }}>
            <div style={{ backgroundColor: '#fd3555' }}>
              <h1>Nature flower</h1>
              <p>all in pink</p>
            </div>
            <div style={{ backgroundColor: '#2a86ba' }}>
              <h1>Bluuue Sky</h1>
              <p>with it's mountains</p>
            </div>
            <div style={{ backgroundColor: '#252e33' }}>
              <h1>Lonely castle</h1>
              <p>in the wilderness</p>
            </div>
            <div style={{ backgroundColor: '#ffb866' }}>
              <h1>Flying eagle</h1>
              <p>in the sunset</p>
            </div>
          </div>
          <div
            className='right-slide'
            style={{ transform: `translateY(-${active * sliderHeight.current}px)` }}>
            {data.map((link) => {
              return (
                <div
                  key={link}
                  style={{ backgroundImage: `url(${link})` }}
                />
              )
            })}
          </div>
          <div className='action-buttons'>
            <button
              className='down-button'
              onClick={() => {
                setActive((prev) => (prev - 1 < 0 ? slidesLength - 1 : prev - 1))
              }}>
              <i className='fas fa-arrow-down'></i>
            </button>
            <button
              className='up-button'
              onClick={() => {
                setActive((prev) => (prev + 1 === slidesLength ? 0 : prev + 1))
              }}>
              <i className='fas fa-arrow-up'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
