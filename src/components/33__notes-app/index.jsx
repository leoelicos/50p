import Markdown from 'marked-react'
import { useEffect, useState } from 'react'

import './style/style.css'

export default function NotesApp() {
  const [notes, setNotes] = useState([])
  const handleTextChange = (text, timestamp) => {
    setNotes((prev) => prev.map((v) => (v.timestamp === timestamp ? { ...v, text } : v)))
  }
  const handleDelete = (timestamp) => {
    setNotes((prev) => prev.filter((v) => v.timestamp !== timestamp))
  }
  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem('notes')))
  }, [])
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    return () => {
      const y = notes.filter((note) => {
        const res = note.text.length > 0
        console.log({ note, res })
        return res
      })
      const x = JSON.stringify(y)
      localStorage.setItem('notes', x)
      debugger
    }
  }, [])

  const addNote = () => {
    setNotes(notes.slice().concat({ text: '', timestamp: new Date().getTime() }))
  }
  return (
    <App>
      <Body>
        <AddButton addNote={addNote} />
        {notes.map(({ text, timestamp }) => (
          <Note
            key={timestamp}
            text={text}
            timestamp={timestamp}
            handleTextChange={handleTextChange}
            handleDelete={handleDelete}
          />
        ))}
      </Body>
    </App>
  )
}

const App = ({ children }) => <div className='app-33'>{children}</div>
const Body = ({ children }) => <div className='body'>{children}</div>
const AddButton = ({ addNote }) => (
  <button
    className='add'
    onClick={addNote}>
    <i className='fas fa-plus'></i> Add note
  </button>
)
const Note = ({ text, timestamp, handleDelete, handleTextChange }) => {
  const [editing, setEditing] = useState(text.length > 0 ? false : true)
  return (
    <div className='note'>
      <div className='tools'>
        <button
          className='edit'
          onClick={() => {
            setEditing((prev) => !prev)
          }}>
          <i className='fas fa-edit'></i>
        </button>
        <button
          className='delete'
          onClick={() => {
            handleDelete(timestamp)
          }}>
          <i className='fas fa-trash-alt'></i>
        </button>
      </div>
      <div className={`main ${editing ? 'hidden' : ''}`}>
        <Markdown>{text}</Markdown>
      </div>
      <textarea
        className={editing ? '' : 'hidden'}
        value={text}
        onInput={(e) => {
          handleTextChange(e.target.value, timestamp)
        }}>
        {text}
      </textarea>
    </div>
  )
}
