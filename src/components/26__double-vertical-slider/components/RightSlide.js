const RightSlide = ({ data, active, sliderHeight }) => {
  const fromBottom = -active * sliderHeight
  return (
    <div
      className='right-slide'
      style={{
        transform: `translateY(${fromBottom}px)`
      }}>
      {data.map(({ image }) => {
        return (
          <div
            key={image}
            style={{ backgroundImage: `url(${image})` }}
          />
        )
      })}
    </div>
  )
}
export default RightSlide
