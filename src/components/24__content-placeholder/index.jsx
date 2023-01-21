import { useEffect, useState } from 'react'
import './style/style.css'
import data from './data/index'
export default function ContentPlaceholder() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])
  return (
    <div className='app-24'>
      <div className='body'>
        <div className='card'>
          <div
            className={`card-header ${loading ? 'animated-bg' : ''}`}
            id='header'>
            {loading ? <>&nbsp;</> : data.header}
          </div>
          <div className='card-content'>
            <h3
              className={`card-title ${loading ? 'animated-bg animated-bg-text' : ''}`}
              id='title'>
              {loading ? <>&nbsp;</> : data.title}
            </h3>
            <p
              className='card-excerpt'
              id='excerpt'>
              {loading ? (
                <>
                  &nbsp;
                  <span className={loading ? `animated-bg animated-bg-text` : ''} />
                </>
              ) : (
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, aspernatur.'
              )}
            </p>
            <div className='author'>
              <div
                className={`profile-img ${loading ? 'animated-bg' : ''}`}
                id='profile_img'>
                {loading ? (
                  <>&nbsp;</>
                ) : (
                  <img
                    src='https://randomuser.me/api/portraits/men/45.jpg'
                    alt='picture of a young man'
                  />
                )}
              </div>
              <div className='author-info'>
                <strong
                  className={loading ? 'animated-bg animated-bg-text' : ''}
                  id='name'>
                  {loading ? <>&nbsp;</> : 'John Doe'}
                </strong>
                <small
                  className={loading ? 'animated-bg animated-bg-text' : ''}
                  id='date'>
                  {loading ? <>&nbsp;</> : 'Oct 08, 2020'}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
