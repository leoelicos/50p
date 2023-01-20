import { useState } from 'react'
import './style/style.css'

export default function DrinkWater() {
  const [cups, setCups] = useState(new Array(8).fill(null).map((_, i) => ({ volume: '250 ml', full: false, id: i + 1 })))

  const fullCups = cups.filter((cup) => cup.full === true).length
  const totalCups = 8
  const ratio = fullCups / totalCups

  const remained = {
    style:
      fullCups === totalCups
        ? { visibility: 'hidden', height: '0' } //
        : { visibility: 'visible' },
    text:
      fullCups === totalCups //
        ? ''
        : `${2 - (250 * fullCups) / 1000}L`
  }

  const percentage = {
    style:
      fullCups === 0 //
        ? { visibility: 'hidden', height: '0' }
        : { visibility: 'visible', height: `${ratio * 330}px` },
    text:
      fullCups === 0
        ? '' //
        : `${ratio * 100}%`
  }
  return (
    <div className='app-16'>
      <div className='body'>
        <h1>Drink Water</h1>
        <h3>Goal: 2 Liters</h3>
        <div className='cup'>
          <div
            className='remained'
            style={remained.style}>
            <span>{remained.text}</span>
            <small>Remained</small>
          </div>

          <div
            className='percentage'
            style={percentage.style}>
            {percentage.text}
          </div>
        </div>
        <p className='text'>Select how many glasses of water that you have drunk</p>

        <div className='cups'>
          {cups.map(({ volume, full, id }) => (
            <div
              className={`cup cup-small ${full ? 'full' : ''}`}
              key={id}
              onClick={() => {
                setCups((prev) =>
                  prev.map((v) =>
                    v.id === id //
                      ? { ...v, full: fullCups > id ? true : !v.full }
                      : v.id < id
                      ? { ...v, full: true }
                      : { ...v, full: false }
                  )
                )
              }}>
              {volume}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
