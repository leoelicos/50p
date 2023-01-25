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
              results.map(({ picture: { large }, name: { first }, name: { last }, location: { city, country } }) => {
                const userString = (first + last + city + country).toLowerCase()
                const searchString = search.toLowerCase()
                const hide = !userString.includes(searchString)
                return (
                  <li
                    key={userString}
                    className={hide ? 'hide' : ''}>
                    <img
                      src={large}
                      alt={first}
                    />
                    <div className='user-info'>
                      <h4>
                        {first} {last}
                      </h4>
                      <p>
                        {city}, {country}
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
