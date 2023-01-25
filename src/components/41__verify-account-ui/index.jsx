import { useEffect, useRef, useState } from 'react'
import './style/style.css'

export default function VerifyAccountUI() {
  const i0 = useRef(null)
  const i1 = useRef(null)
  const i2 = useRef(null)
  const i3 = useRef(null)
  const i4 = useRef(null)
  const i5 = useRef(null)

  const [v0, setV0] = useState('')
  const [v1, setV1] = useState('')
  const [v2, setV2] = useState('')
  const [v3, setV3] = useState('')
  const [v4, setV4] = useState('')
  const [v5, setV5] = useState('')

  const getNextInput = (currentIdx) => {
    if (currentIdx === 0) return i1.current
    else if (currentIdx === 1) return i2.current
    else if (currentIdx === 2) return i3.current
    else if (currentIdx === 3) return i4.current
    else if (currentIdx === 4) return i5.current
    else if (currentIdx === 5) return i5.current
  }

  useEffect(() => {
    i0.current.focus()
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
              ref={i0}
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
              ref={i1}
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
              ref={i2}
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
              ref={i3}
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
              ref={i4}
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
              ref={i5}
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
