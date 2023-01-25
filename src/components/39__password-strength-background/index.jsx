import { useState } from 'react'
import './style/style.css'
export default function PasswordStrengthBackground() {
  const [blur, setBlur] = useState(0)
  const [input, setInput] = useState('')

  return (
    <div className='app-39'>
      <div className='body'>
        <div
          className='background'
          id='background'
          style={{ filter: `blur(${blur}px)` }}></div>
        <div className='bg-white rounded p-10 text-center shadow-md'>
          <h1 className='text-3xl'>Image Password Strength</h1>
          <p className='text-sm text-gray-700'>Change the password to see the effect</p>
          <div className='my-4 text-left'>
            <label
              htmlFor='email'
              className='text-gray-900'>
              Email
            </label>
            <input
              type='text'
              className='border block w-full p-2 mt-2 rounded'
              id='email'
              placeholder='Enter email'
            />
          </div>

          <div className='my-4 text-left'>
            <label
              htmlFor='email'
              className='text-gray-900'>
              Password:
            </label>
            <input
              type='password'
              className='border block w-full p-2 mt-2 rounded'
              id='password'
              placeholder='Enter Password'
              value={input}
              onInput={(e) => {
                const input = e.target.value
                console.log(input)
                setInput(input)
                const length = input.length
                const blurValue = 20 - length * 2
                setBlur(blurValue)
              }}
            />
          </div>

          <button
            className='bg-black text-white py-2 mt-4 inline-block w-full rounded'
            type='submit'>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
