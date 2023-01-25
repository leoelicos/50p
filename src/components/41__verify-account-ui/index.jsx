import { useEffect, useRef, useState } from 'react'
import './style/style.css'

export default function VerifyAccountUI() {
  const inputRefs = useRef([])

  const [v0, setV0] = useState('')
  const [v1, setV1] = useState('')
  const [v2, setV2] = useState('')
  const [v3, setV3] = useState('')
  const [v4, setV4] = useState('')
  const [v5, setV5] = useState('')

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
            <input
              ref={(e) => inputRefs.current.push(e)}
              type='number'
              className='code'
              placeholder='0'
              min='0'
              max='9'
              required
              value={v0}
              onChange={(e) => {
                if (e.nativeEvent.data >= 0 && e.nativeEvent.data <= 9) {
                  setV0(e.nativeEvent.data)

                  getNextInput(0).focus()
                }
              }}
            />
            <input
              ref={(e) => inputRefs.current.push(e)}
              type='number'
              className='code'
              placeholder='0'
              min='0'
              max='9'
              required
              value={v1}
              onChange={(e) => {
                if (e.nativeEvent.data >= 0 && e.nativeEvent.data <= 9) {
                  setV1(e.nativeEvent.data)

                  getNextInput(1).focus()
                }
              }}
            />
            <input
              ref={(e) => inputRefs.current.push(e)}
              type='number'
              className='code'
              placeholder='0'
              min='0'
              max='9'
              required
              value={v2}
              onChange={(e) => {
                if (e.nativeEvent.data >= 0 && e.nativeEvent.data <= 9) {
                  setV2(e.nativeEvent.data)

                  getNextInput(2).focus()
                }
              }}
            />
            <input
              ref={(e) => inputRefs.current.push(e)}
              type='number'
              className='code'
              placeholder='0'
              min='0'
              max='9'
              required
              value={v3}
              onChange={(e) => {
                if (e.nativeEvent.data >= 0 && e.nativeEvent.data <= 9) {
                  setV3(e.nativeEvent.data)

                  getNextInput(3).focus()
                }
              }}
            />
            <input
              ref={(e) => inputRefs.current.push(e)}
              type='number'
              className='code'
              placeholder='0'
              min='0'
              max='9'
              required
              value={v4}
              onChange={(e) => {
                if (e.nativeEvent.data >= 0 && e.nativeEvent.data <= 9) {
                  setV4(e.nativeEvent.data)

                  getNextInput(4).focus()
                }
              }}
            />
            <input
              ref={(e) => inputRefs.current.push(e)}
              type='number'
              className='code'
              placeholder='0'
              min='0'
              max='9'
              required
              value={v5}
              onChange={(e) => {
                if (e.nativeEvent.data >= 0 && e.nativeEvent.data <= 9) {
                  setV5(e.nativeEvent.data)
                  getNextInput(4).focus()
                }
              }}
            />
          </div>
          <small className='info'> This is design only. We didn't actually send you an email as we don't have your email, right? </small>
        </div>
      </div>
    </div>
  )
}
