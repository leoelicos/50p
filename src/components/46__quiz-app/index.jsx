import { useState } from 'react'
import './style/style.css'
const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd'
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b'
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats',
    correct: 'a'
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b'
  }
]

function Question({ q, handleSubmit }) {
  const [selected, setSelected] = useState(undefined)
  return (
    <div
      className='quiz-container'
      id='quiz'>
      <div className='quiz-header'>
        <h2 id='question'>{q.question}</h2>
        <ul>
          <li>
            <input
              type='radio'
              name='answer'
              id='a'
              className='answer'
              checked={selected === 0}
              onClick={() => {
                setSelected(0)
              }}
            />
            <label
              htmlFor='a'
              id='a_text'>
              {q.a}
            </label>
          </li>
          <li>
            <input
              type='radio'
              name='answer'
              id='b'
              className='answer'
              checked={selected === 1}
              onClick={() => {
                setSelected(1)
              }}
            />
            <label
              htmlFor='b'
              id='b_text'>
              {q.b}
            </label>
          </li>
          <li>
            <input
              type='radio'
              name='answer'
              id='c'
              className='answer'
              checked={selected === 2}
              onClick={() => {
                setSelected(2)
              }}
            />
            <label
              htmlFor='c'
              id='c_text'>
              {q.c}
            </label>
          </li>
          <li>
            <input
              type='radio'
              name='answer'
              id='d'
              className='answer'
              checked={selected === 3}
              onClick={() => {
                setSelected(3)
              }}
            />
            <label
              htmlFor='d'
              id='d_text'>
              {q.d}
            </label>
          </li>
        </ul>
      </div>
      <button
        id='submit'
        onClick={(e) => {
          if (selected === undefined) return
          const isCorrect = selected === 'abcd'.indexOf(q.correct)
          console.log('here', { isCorrect })
          handleSubmit(isCorrect)
          setSelected(undefined)
        }}>
        Submit
      </button>
    </div>
  )
}
export default function QuizApp() {
  const [qn, setQn] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const handleSubmit = (isCorrect) => {
    setScore((prev) => (isCorrect ? prev + 1 : prev))
    if (qn === 4) setFinished(true)
    else setQn((prev) => prev + 1)
  }

  return (
    <div className='app-46'>
      <div className='body'>
        {!finished && qn < 4 ? (
          <Question
            q={quizData[qn]}
            handleSubmit={handleSubmit}
          />
        ) : (
          <div className='quiz-container'>
            <h2>
              You answered {score}/{quizData.length} questions correctly
            </h2>
            <button
              onClick={() => {
                setFinished(false)
                setQn(0)
                setScore(0)
              }}>
              Reload
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
