import { useState } from 'react'
import './style/style.css'

const ToggleContainer = ({ text, checked, handleChange }) => (
  <div className='toggle-container'>
    <input
      type='checkbox'
      id={text}
      className='toggle'
      checked={checked}
      onChange={handleChange}
    />
    <label
      htmlFor={text}
      className='label'>
      <div className='ball' />
    </label>
    <span>{text}</span>
  </div>
)

export default function GoodCheapFast() {
  const [good, setGood] = useState(false)
  const [cheap, setCheap] = useState(false)
  const [fast, setFast] = useState(false)

  const handleChangeGood = (e) => {
    setGood(() => {
      if (cheap && fast) setFast(false)
      return e.target.checked
    })
  }

  const handleChangeCheap = (e) => {
    setCheap(() => {
      if (good && fast) setGood(false)
      return e.target.checked
    })
  }

  const handleChangeFast = (e) => {
    setFast(() => {
      if (good && cheap) setCheap(false)
      return e.target.checked
    })
  }

  const boxes = [
    { text: 'Good', checked: good, handleChange: handleChangeGood },
    { text: 'Cheap', checked: cheap, handleChange: handleChangeCheap },
    { text: 'Fast', checked: fast, handleChange: handleChangeFast }
  ]

  return (
    <div className='app-32'>
      <div className='body'>
        <h2>How do you want your project to be?</h2>
        {boxes.map(({ text, checked, handleChange }) => (
          <ToggleContainer
            key={text}
            text={text}
            checked={checked}
            handleChange={handleChange}
          />
        ))}
      </div>
    </div>
  )
}
