import './style/style.css'
function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`
}
function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300
}
const unsplashURL = 'https://source.unsplash.com/random/'

const data = new Array(15).fill(0).map(() => unsplashURL + getRandomSize())

export default function RandomImageFeed() {
  return (
    <div className='app-48'>
      <div className='body'>
        <h1 className='title'>Random Image Feed</h1>
        <div className='container'>
          {data.map((img, i) => (
            <img
              src={img}
              key={img + i}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
