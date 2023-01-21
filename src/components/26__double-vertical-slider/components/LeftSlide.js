const LeftSlide = ({ data, slidesLength, active, sliderHeight }) => {
  const globalShift = -(slidesLength - 1) * 100
  const fromBottom = active * sliderHeight
  return (
    <div
      className='left-slide'
      style={{
        top: globalShift + 'vh',
        transform: `translateY(${fromBottom}px)`
      }}>
      {data
        .slice()
        .reverse()
        .map(({ heading, text, style }) => (
          <div style={style}>
            <h1>{heading}</h1>
            <p>{text}</p>
          </div>
        ))}
    </div>
  )
}
export default LeftSlide
