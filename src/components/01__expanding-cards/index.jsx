import { useState } from 'react'
import './style/style.css'

export default function ExpandingCards() {
  const cards = new Array(5).fill('https://picsum.photos/1000/1000')
  const [active, setActive] = useState(null)
  const handleClick = (i) => {
    console.log('setting ', i, 'active')
    setActive(i)
  }
  return (
    <App>
      <Body>
        <PanelContainer>
          {cards.map((card, i) => (
            <Panel
              key={i}
              card={card}
              i={i}
              onClick={() => handleClick(i)}
              active={i === active}
            />
          ))}
        </PanelContainer>
      </Body>
    </App>
  )
}
const App = ({ children }) => <div className='app_01'>{children}</div>
const Body = ({ children }) => <div className='body'>{children}</div>
const PanelContainer = ({ children }) => <div className='container'>{children}</div>
const Panel = ({ card, i, onClick, active }) => (
  <div
    className={`panel ${active ? 'active' : ''}`}
    style={{ backgroundImage: `url(${card})` }}
    onClick={onClick}>
    <h3>{`Card ${i + 1}`}</h3>
  </div>
)
