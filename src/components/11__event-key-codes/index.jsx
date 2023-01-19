import { useEffect, useState } from 'react'
import './style/style.css'

export default function EventKeyCodes() {
  const [k, setK] = useState(null)

  const handleKeyDown = (e) => {
    const key = e.key === ' ' ? 'Space' : e.key
    const code = e.code
    const keyCode = e.keyCode
    setK({ key, code, keyCode })
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className='app-11'>
      <div className='body'>
        <Insert k={k} />
      </div>
    </div>
  )
}
function Insert({ k }) {
  return k === null ? (
    <div id='insert'>
      <div className='key'>Press any key to get the keyCode</div>
    </div>
  ) : (
    <div id='insert'>
      <div className='key'>
        {k.key}
        <small>event.key</small>
      </div>
      <div className='key'>
        {k.keyCode}
        <small>event.keyCode</small>
      </div>
      <div className='key'>
        {k.code}
        <small>event.code</small>
      </div>
    </div>
  )
}
