import './style/style.css'
import axios from 'axios'
import { useState } from 'react'

export default function GithubProfiles() {
  const APIURL = 'https://api.github.com/users/'
  const reposToGet = 3

  const [repos, setRepos] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [userData, setUserData] = useState(null)
  const [loadingUser, setLoadingUser] = useState(false)
  const [loadingUserRepos, setLoadingUserRepos] = useState(false)

  const getUser = (username) => {
    setLoadingUser(true)
    axios(APIURL + username)
      .then(({ data }) => {
        setUserData(data)
      })
      .then(() => {
        setLoadingUser(false)
      })
      .catch((err) => {
        setError(true)
        setErrorMessage(() => {
          let msg = ''

          if (!err.response) msg = 'No connection'
          else if (err.response.status === 404) msg = 'No profile with this username'
          else msg = 'Unknown error'
          return msg
        })
      })
  }
  const getUserRepos = (username) => {
    setLoadingUserRepos(true)
    setTimeout(() => {
      axios(APIURL + username + '/repos?sort=created')
        .then(({ data }) => {
          setRepos(
            data //
              .slice(0, reposToGet)
              .map(({ html_url, name }) => ({ html_url, name }))
          )
        })
        .then(() => {
          setLoadingUserRepos(false)
        })
        .catch((err) => {
          setError(true)
          setErrorMessage(() => {
            let msg = ''

            if (!err.response) msg = 'No connection'
            else if (err.response.status === 404) msg = 'No profile with this username'
            else msg = 'Unknown error'
            return msg
          })
        })
    }, 2000)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = searchValue
    if (!user || !user.length) return
    setError(false)

    getUser(user)
    getUserRepos(user)
    setSearchValue('')
  }
  const handleInput = (e) => setSearchValue(e.target.value)
  return (
    <App>
      <Body>
        <Form
          handleSubmit={handleSubmit}
          searchValue={searchValue}
          handleInput={handleInput}
        />
        <main>
          <Card
            error={error}
            errorMessage={errorMessage}
            user={userData}
            repos={repos}
            loadingUser={loadingUser}
            loadingUserRepos={loadingUserRepos}
          />
        </main>
      </Body>
    </App>
  )
}

const App = ({ children }) => <div className='app-28'>{children}</div>
const Body = ({ children }) => <div className='body'>{children}</div>
const Form = ({ handleSubmit, searchValue, handleInput }) => (
  <form
    className='user-form'
    onSubmit={handleSubmit}>
    <input
      type='text'
      placeholder='Search a Github User'
      value={searchValue}
      onChange={handleInput}
    />
  </form>
)

const Card = ({ error, errorMessage, user, repos, loadingUser, loadingUserRepos }) =>
  user ? (
    <div className='card'>
      {error ? (
        <h1>{errorMessage}</h1>
      ) : loadingUser ? (
        <h1>Loading</h1>
      ) : (
        <>
          <div>
            <img
              src={user.avatar_url}
              alt={user.name}
              className='avatar'
            />
          </div>
          <div className='user-info'>
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <ul>
              <li>
                {user.followers} <strong>Followers</strong>
              </li>
              <li>
                {user.following} <strong>Following</strong>
              </li>
              <li>
                {user.public_repos} <strong>Repos</strong>
              </li>
            </ul>
            <div id='repos'>
              {loadingUserRepos ? (
                <span>Loading...</span>
              ) : (
                repos.map(({ html_url, name }) => (
                  <a
                    key={name}
                    className='repo'
                    href={html_url}
                    target='_blank'>
                    {name}
                  </a>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  ) : null
