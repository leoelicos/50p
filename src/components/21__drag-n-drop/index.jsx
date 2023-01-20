import { useRef, useState } from 'react'
import './style/style.css'

export default function DragNDrop() {
  const data = useRef([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }])
  const [active, setActive] = useState(1)

  return (
    <div className='app-21'>
      <div className='body'>
        {data.current.map(({ id }) => (
          <Empty
            key={id}
            id={id}
            active={active}
            setActive={setActive}
          />
        ))}
      </div>
    </div>
  )
}

const Empty = ({ id, active, setActive }) => {
  const [cName, setCName] = useState('empty')
  const [hovering, setHovering] = useState(false)
  return (
    <div
      key={id}
      className={cName}
      onDragOver={(e) => {
        e.preventDefault()
      }}
      onDragEnter={(e) => {
        e.preventDefault()
        setCName((prev) => prev + ' hovered')
      }}
      onDragLeave={() => {
        setCName('empty')
      }}
      onDrop={() => {
        setCName('empty')
        setActive(id)
        setHovering(false) // onDrop replaces onDragEnd for some reason
      }}>
      {active === id ? (
        <div
          className={hovering ? '' : 'fill'}
          draggable='true'
          onDragStart={() => {
            setHovering(false)
            setTimeout(() => {
              setHovering(true)
            }, 0)
          }}
          onDragEnd={() => {
            setHovering(false)
          }}
        />
      ) : null}
    </div>
  )
}
