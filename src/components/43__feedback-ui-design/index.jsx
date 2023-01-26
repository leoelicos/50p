import { useState } from 'react'
import './style/style.css'
const data = [
  { src: 'https://img.icons8.com/emoji/256/disappointed-face.png', alt: 'unhappy' },
  { src: 'https://storage.googleapis.com/emojibuff.appspot.com/i/go/1f610.png', alt: 'neutral' },
  { src: 'https://www.virtualverse.one/forums/styles/themehouse/reactions/happy.png', alt: 'satisfied' }
]

export default function FeedbackUIDesign() {
  const [sent, setSent] = useState(false)

  const [active, setActive] = useState(null)
  const selectedRating = data.find((v, i) => active === i)?.alt ?? ''
  return (
    <div className='app-43'>
      <div className='body'>
        <div
          id='panel'
          className='panel-container'>
          {sent ? (
            <>
              <i className='fas fa-heart' />
              <strong>Thank you!</strong>
              <br />
              <strong>Feedback: {selectedRating}</strong>
              <p>We'll use your feedback to improve our customer support</p>
            </>
          ) : (
            <>
              <strong>
                How satisfied are you with our <br />
                customer support performance?
              </strong>
              <div className='ratings-container'>
                {data.map(({ src, alt }, i) => (
                  <button
                    key={alt}
                    className={`rating ${active === i ? 'active' : ''}`}
                    onClick={() => {
                      setActive(i)
                    }}>
                    <img
                      src={src}
                      alt={src}
                    />
                    <small>{alt[0].toUpperCase() + alt.slice(1)}</small>
                  </button>
                ))}
              </div>

              <button
                className='btn'
                id='send'
                onClick={() => {
                  setSent(true)
                }}>
                Send Review
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
