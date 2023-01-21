import './style/style.css'
import data from './data/index'
import { useEffect, useRef, useState } from 'react'

import App from './components/App'
import Body from './components/Body'
import SliderContainer from './components/SliderContainer'
import LeftSlide from './components/LeftSlide'
import RightSlide from './components/RightSlide'
import ActionButtons from './components/ActionButtons'
import ActionButton from './components/ActionButton'

export default function DoubleVerticalSlider() {
  const [active, setActive] = useState(0)
  const sliderContainer = useRef(null)
  const slidesLength = data.length
  const sliderHeight = useRef(null)
  useEffect(() => {
    sliderHeight.current = sliderContainer.current.clientHeight
  }, [])
  const decrementSlide = () => {
    setActive((prev) => (prev - 1 < 0 ? slidesLength - 1 : prev - 1))
  }
  const incrementSlide = () => {
    setActive((prev) => (prev + 1 === slidesLength ? 0 : prev + 1))
  }
  return (
    <App>
      <Body>
        <SliderContainer ref={sliderContainer}>
          <LeftSlide
            slidesLength={slidesLength}
            active={active}
            sliderHeight={sliderHeight.current}
            data={data}
          />
          <RightSlide
            active={active}
            sliderHeight={sliderHeight.current}
            data={data}
          />
          <ActionButtons>
            <ActionButton
              isUp={false}
              onClick={decrementSlide}
            />
            <ActionButton
              isUp={true}
              onClick={incrementSlide}
            />
          </ActionButtons>
        </SliderContainer>
      </Body>
    </App>
  )
}
