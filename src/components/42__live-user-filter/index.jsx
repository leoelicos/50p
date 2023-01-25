export default function LiveUserFilter() {
  return (
    <div className='app-42'>
      <div className='body'>
        <div className='container'>
          <header className='header'>
            <h4 className='title'>Live User Filter</h4>
            <small className='subtitle'>Search by name and/or location</small>
            <input
              type='text'
              name=''
              id='filter'
              placeholder='Search'
            />
          </header>
          <ul
            id='result'
            className='user-list'>
            <li>
              <h3>Loading…</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
