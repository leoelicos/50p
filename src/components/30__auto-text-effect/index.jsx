import './style/style.css'
export default function AutoTextEffect() {
  return (
    <div className='app-30'>
      <div className='body'>
        <h1 id='text'>Starting...</h1>
        <div>
          <label for='speed'>Speed:</label>
          <input
            type='number'
            name='speed'
            id='speed'
            value='1'
            min='1'
            max='10'
            step='1'
          />
        </div>
      </div>
    </div>
  )
}
const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
  textEl.innerText = text.slice(0, idx)

  idx++

  if (idx > text.length) {
    idx = 1
  }

  setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value))
