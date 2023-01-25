import { useEffect, useState } from 'react'
import './style/style.css'
export default function LiveUserFilter() {
  const [results, setResults] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function getData() {
      const res = await fetch('https://randomuser.me/api?results=50')
      const data = await res.json()
      setResults(data.results)
    }
    getData()
  }, [])

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
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
              }}
            />
          </header>
          <ul
            id='result'
            className='user-list'>
            {results ? (
              results.map((user) => {
                const userString = (user.name.first + user.name.last + user.location.city + user.location.country).toLowerCase()
                const searchString = search.toLowerCase()
                return (
                  <li
                    key={userString}
                    className={userString.includes(searchString) ? '' : 'hide'}>
                    <img
                      src={user.picture.large}
                      alt={user.name.first}
                    />
                    <div className='user-info'>
                      <h4>
                        {user.name.first} {user.name.last}
                      </h4>
                      <p>
                        {user.location.city}, {user.location.country}
                      </p>
                    </div>
                  </li>
                )
              })
            ) : (
              <li>
                <h3>Loading…</h3>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
