import { useState } from 'react'
import './style/style.css'
const App = ({ children }) => <div className='app-27'>{children}</div>
const Body = ({ children }) => <div className='body'>{children}</div>
const Boxes = ({ boxes }) => (
  <div className='toasts'>
    {boxes.map(({ message, timestamp, type }) => (
      <Box
        key={timestamp}
        type={type}
        message={message}
      />
    ))}
  </div>
)

const Box = ({ message, type }) => <div className={`toast ${type}`}>{message}</div>
const Button = ({ handleClick }) => (
  <button
    className='btn'
    onClick={handleClick}>
    Show Notification
  </button>
)
export default function ToastNotification() {
  const [boxes, setBoxes] = useState([])
  const updateBoxes = () => {
    const t = new Date().getTime()
    setBoxes((prev) => prev.filter(({ timestamp }) => timestamp + 3000 > t))
  }
  const addBox = () => {
    const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four']
    const randomMessage = () => messages[Math.floor(Math.random() * messages.length)]
    const types = ['info', 'success', 'error']
    const randomType = () => types[Math.floor(Math.random() * types.length)]
    const timestamp = new Date().getTime()
    const type = randomType()
    const message = randomMessage()
    const newBox = { timestamp, type, message }
    setBoxes((prev) => prev.concat(newBox))
    setTimeout(updateBoxes, 3000)
  }
  return (
    <App>
      <Body>
        <Boxes boxes={boxes} />
        <Button handleClick={addBox} />
      </Body>
    </App>
  )
}
