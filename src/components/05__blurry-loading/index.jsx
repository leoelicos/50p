import { useEffect, useState } from 'react'
import './style/style.css'

export default function BlurryLoading() {
  const [loadtext, setLoadtext] = useState(null)
  const [opacity, setOpacity] = useState(null)
  const [bgFilter, setBgFilter] = useState(null)

  useEffect(() => {
    let load = 0
    let int = setInterval(blurring, 30)
    function blurring() {
      load++
      if (load > 99) clearInterval(int)
      setLoadtext(`${load}%`)
      setOpacity(scale(load, 0, 100, 1, 0))
      setBgFilter(`blur(${scale(load, 0, 100, 30, 0)}px)`)
    }
  }, [])

  return (
    <App>
      <Body>
        <section
          className='bg'
          style={{ filter: bgFilter }}></section>
        <div
          className='loading-text'
          style={{ opacity }}>
          {loadtext}
        </div>
      </Body>
    </App>
  )
}

const App = ({ children }) => <div className='app-05'>{children}</div>
const Body = ({ children }) => <div className='body'>{children}</div>

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
