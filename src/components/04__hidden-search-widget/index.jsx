import './style/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'

export default function HiddenSearchWidget() {
  const [active, setActive] = useState(false)
  const inputEl = useRef(null)
  const buttonEl = useRef(null)
  const handleClickSearch = () => {
    setActive((prev) => !prev)
    if (!active) inputEl.current.focus()
    else buttonEl.current.focus()
  }
  const [value, setValue] = useState('')
  const handleValueChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <App>
      <Body>
        <Search active={active}>
          <input
            type='text'
            className='input'
            placeholder='Search...'
            value={value}
            onChange={handleValueChange}
            ref={inputEl}
          />
          <button
            className='btn'
            onClick={handleClickSearch}
            ref={buttonEl}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </Search>
      </Body>
    </App>
  )
}
const App = ({ children }) => <div className='app-04'>{children}</div>
const Body = ({ children }) => <div className='body'>{children}</div>
const Search = ({ children, active }) => <div className={`search ${active ? 'active' : ''}`}>{children}</div>
