export default function DadJokes() {
  return (
    <div className='app-10'>
      <div className='body'>
        <div className='container'>
          <h3>Don't Laugh Challenge</h3>
          <div
            id='joke'
            className='joke'></div>
          <button
            id='jokeBtn'
            className='btn'>
            Get Another Joke
          </button>
        </div>
      </div>
    </div>
  )
}

const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()
// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }
  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke
}
