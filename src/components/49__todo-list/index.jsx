export default function TodoList() {
  return (
    <div className='app-49'>
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
