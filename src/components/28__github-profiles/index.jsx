import './style/style.css'
export default function GithubProfiles() {
  return (
    <div className='app-28'>
      <div className='body'>
        <form
          className='user-form'
          id='form'>
          <input
            type='text'
            id='search'
            placeholder='Search a Github User'
          />
        </form>
        <main id='main'></main>
      </div>
    </div>
  )
}
