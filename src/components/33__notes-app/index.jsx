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
    localStorage.setItem('notes', JSON.stringify(notes.filter((note) => note.text.length > 0)))
  }, [notes])

  const addNote = () => {
    const timestamp = new Date().getTime()
    setNotes(notes.slice().concat({ text: '', timestamp })) //
  }

  return (
    <App>
      <Body>
        <AddButton handleAdd={addNote} />

        {notes.map(({ text, timestamp }, i) => (
          <Note
            key={timestamp}
            text={text}
            timestamp={timestamp}
            handleTextChange={handleTextChange}
            handleDelete={handleDelete}
            isLast={i === notes.length - 1}
          />
        ))}
      </Body>
    </App>
  )
}

const App = ({ children }) => <div className='app-33'>{children}</div>
const Body = ({ children }) => <div className='body'>{children}</div>
const AddButton = ({ handleAdd }) => (
  <button
    className='add'
    onClick={handleAdd}>
    <i className='fas fa-plus'></i> Add note
  </button>
)
const EditButton = ({ handleClickEdit }) => (
  <button
    className='edit'
    onClick={handleClickEdit}>
    <i className='fas fa-edit'></i>
  </button>
)
const DeleteButton = ({ handleClickDelete }) => (
  <button
    className='delete'
    onClick={handleClickDelete}>
    <i className='fas fa-trash-alt'></i>
  </button>
)
const TextArea = ({ editing, text, handleTextChange, isLast, timestamp }) => (
  <textarea
    className={editing ? '' : 'hidden'}
    value={text}
    onInput={(e) => {
      handleTextChange(e.target.value, timestamp)
    }}
    autoFocus={isLast}>
    {text}
  </textarea>
)
const Main = ({ editing, children }) => <div className={`main ${editing ? 'hidden' : ''}`}>{children}</div>
const Note = ({ text, timestamp, handleDelete, handleTextChange, isLast }) => {
  const [editing, setEditing] = useState(text.length > 0 ? false : true)

  const handleClickEdit = () => {
    if (editing) isLast = true
    setEditing((prev) => !prev)
  }
  const handleClickDelete = () => {
    handleDelete(timestamp)
  }

  return (
    <div className={`note ${editing ? 'editing' : ''}`}>
      <div className='tools'>
        <EditButton handleClickEdit={handleClickEdit} />
        <DeleteButton handleClickDelete={handleClickDelete} />
      </div>
      <Main editing={editing}>
        <Markdown>{text}</Markdown>
      </Main>
      <TextArea
        editing={editing}
        text={text}
        handleTextChange={handleTextChange}
        isLast={isLast}
        timestamp={timestamp}
      />
    </div>
  )
}
