import { useState } from 'react'
import './style/style.css'

export default function GoodCheapFast() {
  const [good, setGood] = useState(false)
  const [cheap, setCheap] = useState(false)
  const [fast, setFast] = useState(false)
  return (
    <div className='app-32'>
      <div className='body'>
        <h2>How do you want your project to be?</h2>
        <div className='toggle-container'>
          <input
            type='checkbox'
            id='good'
            className='toggle'
            checked={good}
            onChange={(e) => {
              setGood(() => {
                if (cheap && fast) setFast(false)
                return e.target.checked
              })
            }}
          />
          <label
            htmlFor='good'
            className='label'>
            <div className='ball'></div>
          </label>
          <span>Good</span>
        </div>
        <div className='toggle-container'>
          <input
            type='checkbox'
            id='cheap'
            className='toggle'
            checked={cheap}
            onChange={(e) => {
              setCheap(() => {
                if (good && fast) setGood(false)
                return e.target.checked
              })
            }}
          />
          <label
            htmlFor='cheap'
            className='label'>
            <div className='ball'></div>
          </label>
          <span>Cheap</span>
        </div>
        <div className='toggle-container'>
          <input
            type='checkbox'
            id='fast'
            className='toggle'
            checked={fast}
            onChange={(e) => {
              setFast(() => {
                if (good && cheap) setCheap(false)
                return e.target.checked
              })
            }}
          />
          <label
            htmlFor='fast'
            className='label'>
            <div className='ball'></div>
          </label>
          <span>Fast</span>
        </div>
      </div>
    </div>
  )
}
