export default function FeedbackUIDesign() {
  return (
    <div className='app-43'>
      <div className='body'>
        <div
          id='panel'
          className='panel-container'>
          <strong>
            How satisfied are you with our <br />
            customer support performance?
          </strong>
          <div className='ratings-container'>
            <div className='rating'>
              <img
                src='https://img.icons8.com/emoji/256/disappointed-face.png'
                alt='unhappy'
              />
              <small>Unhappy</small>
            </div>
            <div className='rating'>
              <img
                src='https://storage.googleapis.com/emojibuff.appspot.com/i/go/1f610.png'
                alt='neutral'
              />
              <small>Neutral</small>
            </div>
            <div className='rating'>
              <img
                src='https://www.virtualverse.one/forums/styles/themehouse/reactions/happy.png'
                alt='satisfied'
              />
              <small>Satisfied</small>
            </div>
          </div>
          <button
            className='btn'
            id='send'>
            Send Review
          </button>
        </div>
      </div>
    </div>
  )
}
