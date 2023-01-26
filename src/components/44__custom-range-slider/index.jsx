import { useRef, useState } from 'react'
import './style/style.css'
export default function CustomRangeSlider() {
  const [range, setRange] = useState(50)
  const [offset, setOffset] = useState(null)
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
  const labelRef = useRef(null)

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
            value={range}
            onChange={(e) => {
              setRange(e.target.value)
              const value = +e.target.value
              const range_width = getComputedStyle(e.target).getPropertyValue('width')
              const label_width = getComputedStyle(labelRef.current).getPropertyValue('width')
              const num_width = +range_width.substring(0, range_width.length - 2)
              const num_label_width = +label_width.substring(0, label_width.length - 2)
              const max = e.target.max // 100
              const min = e.target.min // 0
              const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)
              setOffset(left)
            }}
          />
          <label
            ref={labelRef}
            for='range'
            style={{ left: `${offset}px` }}>
            {range}
          </label>
        </div>
      </div>
    </div>
  )
}
