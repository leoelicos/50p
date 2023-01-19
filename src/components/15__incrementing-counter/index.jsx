import './style/style.css'

export default function IncrementingCounter() {
  return (
    <div className='app-15'>
      <div className='body'>
        <div className='counter-container'>
          <i className='fab fa-twitter fa-3x'></i>
          <div
            className='counter'
            data-target='12000'></div>
          <span>Twitter Followers</span>
        </div>
        <div className='counter-container'>
          <i className='fab fa-youtube fa-3x'></i>
          <div
            className='counter'
            data-target='5000'></div>
          <span>YouTube Subscribers</span>
        </div>
        <div className='counter-container'>
          <i className='fab fa-facebook fa-3x'></i>
          <div
            className='counter'
            data-target='7500'></div>
          <span>Facebook Fans</span>
        </div>
        <script src='./script.js'></script>
      </div>
    </div>
  )
}

const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
  counter.innerText = '0'

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target')
    const c = +counter.innerText

    const increment = target / 200

    if (c < target) {
      counter.innerText = `${Math.floor(c + increment)}`
      setTimeout(updateCounter, 1)
    } else {
      counter.innerText = target
    }
  }

  updateCounter()
})
