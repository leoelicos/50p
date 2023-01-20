import { useState } from 'react'
import './style/style.css'

const data21 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
export default function DragNDrop() {
  const [active, setActive] = useState(1)

  return (
    <div className='app-21'>
      {data21.map(({ id }) => (
        <Empty
          key={id}
          id={id}
          active={active}
          setActive={setActive}
        />
      ))}
    </div>
  )
}

const Empty = ({ id, active, setActive }) => {
  const [cName, setCName] = useState('empty')
  const [pName, setPName] = useState('fill')
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
      }}>
      {active === id ? (
        <div
          className={pName}
          draggable='true'
          onDragStart={() => {
            setPName('fill  ')
            // setTimeout(() => {
            //   setPName('invisible')
            // }, 0)
          }}
          onDragEnd={() => {
            setPName('fill')
          }}></div>
      ) : null}
    </div>
  )
}
