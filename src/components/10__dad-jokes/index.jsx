import { useEffect, useState } from 'react'

import './style/style.css'

export default function DadJokes() {
  const [joke, setJoke] = useState('')

  const [loading, setLoading] = useState(false)

  async function generateJoke() {
    setLoading(true)
    const config = {
      headers: {
        Accept: 'application/json'
      }
    }
    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    setJoke(data.joke)
    setLoading(false)
  }

  useEffect(() => {
    generateJoke()
  }, [])

  return (
    <div className='app-10'>
      <div className='body'>
        <div className='container'>
          <h3>Don't Laugh Challenge</h3>
          <div
            id='joke'
            className='joke'>
            {joke}
          </div>
          <button
            id='jokeBtn'
            className={`btn ${loading ? 'loading' : ''}`}
            onClick={generateJoke}>
            {loading ? 'Getting joke' : 'Get Another Joke'}
          </button>
        </div>
      </div>
    </div>
  )
}
