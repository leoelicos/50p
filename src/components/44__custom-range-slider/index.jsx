import './style/style.css'
export default function CustomRangeSlider() {
  return (
    <div className='app-44'>
      <div className='body'>
        <h2>Custom Range Slider</h2>
        <div className='range-container'>
          <input
            type='range'
            id='range'
            min='0'
            max='100'
          />
          <label for='range'>50</label>
        </div>
      </div>
    </div>
  )
}
