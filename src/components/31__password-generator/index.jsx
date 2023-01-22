import { useState } from 'react'
import './style/style.css'

export default function PasswordGenerator() {
  const [length, setLength] = useState(20)
  const [hasLower, setHasLower] = useState(false)
  const [hasUpper, setHasUpper] = useState(false)
  const [hasNumber, setHasNumber] = useState(false)
  const [hasSymbol, setHasSymbol] = useState(false)
  const [result, setResult] = useState('')

  const handleClickCopy = async () => {
    await navigator.clipboard.writeText(result)
    alert('Password copied to clipboard!')
  }
  const handleChangeLength = (e) => {
    setLength(+e.target.length)
  }
  const handleChangeHasUpper = (e) => {
    setHasUpper(e.target.checked)
  }
  const handleChangeHasLower = (e) => {
    setHasLower(e.target.checked)
  }
  const handleChangeHasNumber = (e) => {
    setHasNumber(e.target.checked)
  }
  const handleChangeHasSymbol = (e) => {
    setHasSymbol(e.target.checked)
  }
  const handleClickGenerate = () => {
    setResult(generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length))
  }

  const settings = [
    { id: 'uppercase', text: 'Include uppercase letters', value: hasUpper, handleChange: handleChangeHasUpper },
    { id: 'lowercase', text: 'Include lowercase letters', value: hasLower, handleChange: handleChangeHasLower },
    { id: 'numbers', text: 'Include numbers', value: hasNumber, handleChange: handleChangeHasNumber },
    { id: 'symbols', text: 'Include symbols', value: hasSymbol, handleChange: handleChangeHasSymbol }
  ]
  return (
    <App>
      <Body>
        <Container>
          <h2>Password Generator</h2>
          <ResultContainer>
            <span>{result}</span>
            <CopyButton handleClickCopy={handleClickCopy} />
          </ResultContainer>
          <Settings>
            <SettingNumber
              length={length}
              handleChangeLength={handleChangeLength}
            />
            {settings.map(({ id, text, value, handleChange }) => (
              <SettingCheckbox
                key={id}
                id={id}
                text={text}
                value={value}
                handleChange={handleChange}
              />
            ))}
          </Settings>
          <GenerateButton handleClickGenerate={handleClickGenerate} />
        </Container>
      </Body>
    </App>
  )
}
const GenerateButton = ({ handleClickGenerate }) => (
  <button
    className='btn btn-large'
    onClick={handleClickGenerate}>
    Generate Password
  </button>
)
const App = ({ children }) => <div className='app-31'>{children}</div>
const Body = ({ children }) => <div className='body'>{children}</div>
const Container = ({ children }) => <div className='container'>{children}</div>
const ResultContainer = ({ children }) => <div className='result-container'>{children}</div>
const Settings = ({ children }) => <div className='settings'>{children}</div>

const CopyButton = ({ handleClickCopy }) => (
  <button
    className='btn'
    onClick={handleClickCopy}>
    <i className='far fa-clipboard'></i>
  </button>
)

const generatePassword = (lower, upper, number, symbol, length) => {
  const getRandomLower = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  const getRandomUpper = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  const getRandomNumber = () => String.fromCharCode(Math.floor(Math.random() * 10) + 48)
  const getRandomSymbol = () => '!@#$%^&*(){}[]=<>/,.'.split('')[Math.floor(Math.random() * '!@#$%^&*(){}[]=<>/,.'.length)]
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
const SettingNumber = ({ length, handleChangeLength }) => (
  <div className='setting'>
    {' '}
    <label>Password Length</label>
    <input
      type='number'
      min='4'
      max='20'
      value={length}
      onChange={handleChangeLength}
    />
  </div>
)
const SettingCheckbox = ({ id, text, value, handleChange }) => (
  <div className='setting'>
    <label htmlFor={id}>{text}</label>
    <input
      id={id}
      type='checkbox'
      checked={value}
      onChange={handleChange}
    />
  </div>
)
