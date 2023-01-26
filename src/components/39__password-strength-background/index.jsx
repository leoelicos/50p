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
        <div style={{ background: 'white', borderRadius: '4px', padding: '2.5rem', textAlign: 'center', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}>
          <h1 style={{ fontSize: '1.875rem', lineHeight: '2.25rem' }}>Image Password Strength</h1>
          <p style={{ fontSize: '0.875rem', lineHeight: '1.25rem', color: 'rgb(55,65,81)' }}>Change the password to see the effect</p>
          <div
            className='my-4 text-left'
            style={{ marginTop: '1rem', marginBottom: '1rem', textAlign: 'left' }}>
            <label
              htmlFor='email'
              className='text-gray-900'
              style={{ color: 'rgba(17,24,39,1)' }}>
              Email
            </label>
            <input
              type='text'
              className='border block w-full p-2 mt-2 rounded'
              style={{ padding: '0.5rem', borderWidth: '1px', borderRadius: '0.25rem', width: '100%', marginTop: '0.5rem', border: '1px solid rgba(229,231,235,1)' }}
              id='email'
              placeholder='Enter email'
            />
          </div>

          <div
            className='my-4 text-left'
            style={{ marginTop: '1rem', marginBottom: '1rem', textAlign: 'left' }}>
            <label
              htmlFor='email'
              className='text-gray-900'
              style={{ color: 'rgba(17,24,39,1)' }}>
              Password:
            </label>
            <input
              type='password'
              className='border block w-full p-2 mt-2 rounded'
              style={{ padding: '0.5rem', borderWidth: '1px', borderRadius: '0.25rem', width: '100%', marginTop: '0.5rem', border: '1px solid rgba(229,231,235,1)' }}
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
            style={{ color: 'white', paddingTop: '0.5rem', paddingBottom: '0.5rem', backgroundColor: 'black', borderRadius: '0.25rem', width: '100%', display: 'inline-block', marginTop: '1rem', WebkitAppearance: 'button', cursor: 'pointer' }}
            type='submit'>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
