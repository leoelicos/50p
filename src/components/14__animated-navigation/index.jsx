export default function AnimatedNavigation() {
  return (
    <div className='app-14'>
      <div className='body'>
        <nav
          className='active'
          id='nav'>
          <ul>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Works</a>
            </li>
            <li>
              <a href=''>About</a>
            </li>
            <li>
              <a href=''>Contact</a>
            </li>
          </ul>
          <button
            className='icon'
            id='toggle'>
            <div className='line line1'></div>
            <div className='line line2'></div>
          </button>
        </nav>
      </div>
    </div>
  )
}
