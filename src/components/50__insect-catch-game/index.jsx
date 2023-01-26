import './style/style.css'
export default function InsectCatchGame() {
  return (
    <div className='app-50'>
      <div className='body'>
        <div class='screen'>
          <h1>Catch The Insect</h1>
          <button
            class='btn'
            id='start-btn'>
            Play Game
          </button>
        </div>

        <div class='screen'>
          <h1>What is your "favourite" insect?</h1>
          <ul class='insects-list'>
            <li>
              <button class='choose-insect-btn'>
                <p>Fly</p>
                <img
                  src='http://pngimg.com/uploads/fly/fly_PNG3946.png'
                  alt='fly'
                />
              </button>
            </li>
            <li>
              <button class='choose-insect-btn'>
                <p>Mosquito</p>
                <img
                  src='http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png'
                  alt='mosquito'
                />
              </button>
            </li>
            <li>
              <button class='choose-insect-btn'>
                <p>Spider</p>
                <img
                  src='http://pngimg.com/uploads/spider/spider_PNG12.png'
                  alt='spider'
                />
              </button>
            </li>
            <li>
              <button class='choose-insect-btn'>
                <p>Roach</p>
                <img
                  src='http://pngimg.com/uploads/roach/roach_PNG12163.png'
                  alt='roch'
                />
              </button>
            </li>
          </ul>
        </div>
        <div
          id='game-container'
          class='screen game-container'>
          <h3
            id='time'
            class='time'>
            Time: 00:00
          </h3>
          <h3
            id='score'
            class='score'>
            Score: 0
          </h3>
          <h5
            id='message'
            class='message'>
            Are you annoyed yet? <br />
            You are playing an impossible game!!
          </h5>
        </div>
      </div>
    </div>
  )
}
