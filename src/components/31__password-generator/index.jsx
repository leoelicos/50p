import { useState } from 'react'
import './style/style.css'

export default function PasswordGenerator() {
  const getRandomLower = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  const getRandomUpper = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  const getRandomNumber = () => String.fromCharCode(Math.floor(Math.random() * 10) + 48)
  const getRandomSymbol = () => '!@#$%^&*(){}[]=<>/,.'.split('')[Math.floor(Math.random() * '!@#$%^&*(){}[]=<>/,.'.length)]
  const generatePassword = (lower, upper, number, symbol, length) => {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    if (typesCount === 0) return ''
    const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter((item) => Object.values(item)[0])
    for (let i = 0; i < length; i += typesCount) {
      typesArray.forEach((type) => {
        const funcName = Object.keys(type)[0]
        generatedPassword += {
          lower: getRandomLower,
          upper: getRandomUpper,
          number: getRandomNumber,
          symbol: getRandomSymbol
        }[funcName]()
      })
    }
    return generatedPassword.slice(0, length)
  }

  const [length, setLength] = useState(20)
  const [hasLower, setHasLower] = useState(false)
  const [hasUpper, setHasUpper] = useState(false)
  const [hasNumber, setHasNumber] = useState(false)
  const [hasSymbol, setHasSymbol] = useState(false)
  const [result, setResult] = useState('')

  return (
    <div className='app-31'>
      <div className='body'>
        <div className='container'>
          <h2>Password Generator</h2>
          <div className='result-container'>
            <span id='result'>{result}</span>
            <button
              className='btn'
              onClick={() => {
                navigator.clipboard.writeText(result)
                alert('Password copied to clipboard!')
              }}>
              <i className='far fa-clipboard'></i>
            </button>
          </div>
          <div className='settings'>
            <div className='setting'>
              <label>Password Length</label>
              <input
                type='number'
                id='length'
                min='4'
                max='20'
                value={length}
                onChange={(e) => setLength(+e.target.value)}
              />
            </div>
            <div className='setting'>
              <label htmlFor='uppercase'>Include uppercase letters</label>
              <input
                type='checkbox'
                checked={hasUpper}
                onChange={(e) => setHasUpper(e.target.checked)}
              />
            </div>
            <div className='setting'>
              <label htmlFor='lowercase'>Include lowercase letters</label>
              <input
                type='checkbox'
                checked={hasLower}
                onChange={(e) => setHasLower(e.target.checked)}
              />
            </div>
            <div className='setting'>
              <label htmlFor='numbers'>Include numbers</label>
              <input
                type='checkbox'
                checked={hasNumber}
                onChange={(e) => setHasNumber(e.target.checked)}
              />
            </div>
            <div className='setting'>
              <label htmlFor='symbols'>Include symbols</label>
              <input
                type='checkbox'
                checked={hasSymbol}
                onChange={(e) => setHasSymbol(e.target.checked)}
              />
            </div>
          </div>
          <button
            className='btn btn-large'
            onClick={() => {
              setResult(generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length))
            }}>
            Generate Password
          </button>
        </div>
      </div>
    </div>
  )
}
