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
  const dashatize = (num) =>
    Number.isNaN(num)
      ? 'NaN'
      : num
          .toString()
          .split('')
          .map((c, i) => (+c % 2 === 0 ? c : `-${c}-`))
          .join('')
          .replace(/-+/g, '-')
          .replace(/^-+/, '')
          .replace(/-+$/g, '')

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
        setErrorMessage(
          !err.response //
            ? 'No connection'
            : err.response.status === 404
            ? 'No profile with this username'
            : 'Unknown error'
        )
      })
  }
  const getUserRepos = (username) => {
    setLoadingUserRepos(true)
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
        setErrorMessage('Problem fetching repos')
      })
  }

  return (
    <div className='app-28'>
      <div className='body'>
        <form
          className='user-form'
          onSubmit={async (e) => {
            e.preventDefault()
            const user = searchValue
            if (!user || !user.length) return
            setError(false)

            getUser(user)
            getUserRepos(user)
            setSearchValue('')
          }}>
          <input
            type='text'
            id='search'
            placeholder='Search a Github User'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
        <main id='main'>
          {userData && (
            <UserCard
              error={error}
              errorMessage={errorMessage}
              user={userData}
              repos={repos}
              loadingUser={loadingUser}
              loadingUserRepos={loadingUserRepos}
            />
          )}
        </main>
      </div>
    </div>
  )
}

const UserCard = ({ error, errorMessage, user, repos, loadingUser, loadingUserRepos }) => (
  <div className='card'>
    {error ? (
      <h1>{errorMessage}</h1>
    ) : loadingUser ? (
      <h1>Loading</h1>
    ) : loadingUserRepos ? (
      <h1>Loading repos</h1>
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
            {repos.map(({ html_url, name }) => (
              <a
                key={name}
                className='repo'
                href={html_url}
                target='_blank'>
                {name}
              </a>
            ))}
          </div>
        </div>
      </>
    )}{' '}
  </div>
)
