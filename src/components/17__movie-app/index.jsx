import { useEffect, useState } from 'react'
import './style/style.css'
export default function MovieApp() {
  const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=181c54b33929efb327bf34779a8274dd&page=1'
  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
  const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=181c54b33929efb327bf34779a8274dd&query="'

  const [movies, setMovies] = useState(null)

  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    getMovies(API_URL)
  }, [])

  const getClassByRate = (vote) => (vote >= 8 ? 'green' : vote >= 5 ? 'orange' : 'red')

  const getMovies = (url) =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data.results)
      .then((results) => {
        setMovies(results)
      })

  return (
    <div className='app-17'>
      <div className='body'>
        <header>
          <form
            onSubmit={(e) => {
              e.preventDefault()

              if (searchValue !== '') {
                getMovies(SEARCH_API + searchValue)
                setSearchValue('')
              }
            }}>
            <input
              type='text'
              className='search'
              placeholder='Search'
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value)
              }}
            />
          </form>
        </header>
        <main>
          {movies &&
            movies.map(({ title, poster_path, vote_average, overview }) => (
              <div
                className='movie'
                key={title}>
                <img
                  src={`${IMG_PATH + poster_path}`}
                  alt={title}
                />
                <div className='movie-info'>
                  <h3> {title}</h3>
                  <span className={getClassByRate(vote_average)}> {vote_average}</span>
                </div>
                <div className='overview'>
                  <h3>Overview</h3>
                  {overview}
                </div>
              </div>
            ))}
        </main>
      </div>
    </div>
  )
}
