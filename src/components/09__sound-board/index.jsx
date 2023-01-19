import './style/style.css'

import clipApplause from './sounds/sound-board_sounds_applause.mp3'
import clipBoo from './sounds/sound-board_sounds_boo.mp3'
import clipGasp from './sounds/sound-board_sounds_gasp.mp3'
import clipTada from './sounds/sound-board_sounds_tada.mp3'
import clipVictory from './sounds/sound-board_sounds_victory.mp3'
import clipWrong from './sounds/sound-board_sounds_wrong.mp3'

export default function SoundBoard() {
  const clips = [
    { clip: new Audio(clipApplause), text: 'applause' },
    { clip: new Audio(clipBoo), text: 'boo' },
    { clip: new Audio(clipGasp), text: 'gasp' },
    { clip: new Audio(clipTada), text: 'tada' },
    { clip: new Audio(clipVictory), text: 'victory' },
    { clip: new Audio(clipWrong), text: 'wrong' }
  ]

  const stopAllClips = () => {
    clips.forEach(({ clip: c }) => {
      c.pause()
      c.currentTime = 0
    })
  }
  const playCurrentClip = (clip) => clip.play()

  return (
    <App>
      <Body>
        {clips.map(({ clip, text }, i) => (
          <ButtonPlay
            key={text}
            handleClick={() => {
              stopAllClips()
              playCurrentClip(clip)
            }}
            text={text}
          />
        ))}
        <ButtonStop stopAllClips={stopAllClips} />
      </Body>
    </App>
  )
}

const App = ({ children }) => <div className='app-09'>{children}</div>
const Body = ({ children }) => <div className='body'>{children}</div>
const ButtonPlay = ({ handleClick, text }) => (
  <button
    className='btn'
    onClick={handleClick}>
    {text}
  </button>
)
const ButtonStop = ({ stopAllClips }) => (
  <button
    className='btn stop'
    onClick={stopAllClips}>
    stop
  </button>
)
