import { useState } from 'react'
import './style/style.css'
function App({ children }) {
  return <div className='app-12'>{children}</div>
}

function Body({ children }) {
  return <div className='body'>{children}</div>
}

function FAQContainer({ children }) {
  return <div className='faq-container'>{children}</div>
}

const data = [
  { id: 1, title: "Why shouldn't we trust atoms?", text: 'They make up everything.' },
  { id: 2, title: 'What do you call someone with no body and no nose?', text: 'Nobody knows.' },
  { id: 3, title: "What's the object-oriented way to become wealthy?", text: 'Inheritance.' },
  { id: 4, title: 'How many tickles does it take to tickle an octopus?', text: 'Ten-tickles?' },
  { id: 5, title: 'What is: 1 + 1?', text: 'Depends on who you are asking.' }
]
function FAQ({ joke, isFirst }) {
  const [active, setActive] = useState(isFirst ? true : false)
  return (
    <div className={`faq ${active ? 'active' : ''}`}>
      <h3 className='faq-title'>{joke.title}</h3>
      <p className='faq-text'>{joke.text}</p>
      <button
        className='faq-toggle'
        onClick={() => {
          setActive((prev) => !prev)
        }}>
        <i className='fas fa-chevron-down'></i>
        <i className='fas fa-times'></i>
      </button>
    </div>
  )
}
export default function FAQCollapse() {
  return (
    <App>
      <Body>
        <h1>Frequently Asked Questions</h1>
        <FAQContainer>
          {data.map((joke, i) => (
            <FAQ
              key={joke.id}
              joke={joke}
              isFirst={i === 0}
            />
          ))}
        </FAQContainer>
      </Body>
    </App>
  )
}
