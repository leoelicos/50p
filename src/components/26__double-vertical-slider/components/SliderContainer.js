import { forwardRef } from 'react'

const SliderContainer = forwardRef(({ children }, ref) => {
  return (
    <div
      className='slider-container'
      ref={ref}>
      {children}
    </div>
  )
})
export default SliderContainer
