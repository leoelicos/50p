import './style/style.css'
export default function RotatingNavigationAnimation() {
  return (
    <div className='app-03'>
      <div className='body'>
        <div className='container'>
          <div className='circle-container show-nav'>
            <div className='circle'>
              <button id='close'>
                <i className='fas fa-times'></i>
              </button>
              <button id='open'>
                <i className='fas fa-bars'></i>
              </button>
            </div>
          </div>
          <div className='content'>
            <h1>Secrets are hidden in corners</h1>
            <small>Maybe you should click it</small>
            <p>To find out more about me</p>
            <h3>Okay?</h3>
            <img
              src='https://picsum.photos/id/237/536/354'
              alt='doggy'
            />
            <p>Thanks</p>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <i className='fas fa-home'> Home</i>
            </li>
            <li>
              <i className='fas fa-user-alt'> About</i>
            </li>
            <li>
              <i className='fas fa-envelope'> Contact</i>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
