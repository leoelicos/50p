import { useEffect, useRef, useState } from 'react'
import './style/style.css'

export default function VerifyAccountUI() {
  const inputRefs = useRef([])
  const [digits, setDigits] = useState(['', '', '', '', '', ''])

  const getNextInput = (currentIdx) => inputRefs.current[currentIdx < 5 ? currentIdx + 1 : 5]

  useEffect(() => {
    inputRefs.current[0].focus()
  }, [])

  return (
    <div className='app-41'>
      <div className='body'>
        <div className='container'>
          <h2>Verify Your Account</h2>
          <p>
            We emailed you the six digit code to cool_person@email.com <br />
            Enter the code below to confirm your email address.
          </p>
          <div className='code-container'>
            {digits.map((v, i) => (
              <input
                key={i}
                ref={(e) => inputRefs.current.push(e)}
                type='number'
                className='code'
                placeholder='0'
                min='0'
                max='9'
                required
                value={v}
                onChange={(e) => {
                  if (e.nativeEvent.data >= 0 && e.nativeEvent.data <= 9) {
                    setDigits((prev) => prev.map((val, idx) => (idx === i ? e.nativeEvent.data : val)))
                    getNextInput(i).focus()
                  }
                }}
              />
            ))}
          </div>
          <small className='info'> This is design only. We didn't actually send you an email as we don't have your email, right? </small>
        </div>
      </div>
    </div>
  )
}
