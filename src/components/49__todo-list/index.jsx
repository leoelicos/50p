import { useEffect, useState } from 'react'
import './style/style.css'

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const [inputVal, setInputVal] = useState([])

  useEffect(() => {
    const ls = localStorage.getItem('todos')
    if (ls) setTodos(JSON.parse(ls))
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const toggleCompleted = (i) => {
    setTodos((prev) => prev.map((v, idx) => (idx === i ? { ...v, completed: !v.completed } : v)))
  }

  const deleteTodo = (i) => {
    setTodos((prev) => prev.filter((_, idx) => i !== idx))
  }

  return (
    <div className='app-49'>
      <div className='body'>
        <h1>todos</h1>
        <form
          id='form'
          onSubmit={(e) => {
            e.preventDefault()
            setTodos((prev) => prev.slice().concat({ text: inputVal, completed: false }))
            setInputVal('')
          }}>
          <input
            type='text'
            id='input'
            className='input'
            placeholder='Enter your todo'
            autoComplete='off'
            value={inputVal}
            onChange={(e) => {
              setInputVal(e.target.value)
            }}
          />
          <ul
            className='todos'
            id='todos'>
            {todos &&
              todos.length > 0 &&
              todos.map(({ text, completed }, i) => {
                return (
                  <li
                    key={text + i}
                    className={completed ? 'completed' : ''}
                    onClick={() => toggleCompleted(i)}
                    onContextMenu={(e) => {
                      e.preventDefault()
                      deleteTodo(i)
                    }}>
                    {text}
                  </li>
                )
              })}
          </ul>
        </form>
        <small>
          left click to toggle completed. <br />
          Right click to delete todo
        </small>
      </div>
    </div>
  )
}
