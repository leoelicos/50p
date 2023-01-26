import './style/style.css'
export default function InsectCatchGame() {
  return (
    <div className='app-50'>
      <div className='body'>
        <h1>todos</h1>
        <form id='form'>
          <input
            type='text'
            id='input'
            className='input'
            placeholder='Enter your todo'
            autocomplete='off'
          />
          <ul
            className='todos'
            id='todos'></ul>
        </form>
        <small>
          left click to toggle completed. <br />
          Right click to delete todo
        </small>
      </div>
    </div>
  )
}
