export default function ContentPlaceholder() {
  return (
    <div className='app-24'>
      <div className='body'>
        <div className='card'>
          <div
            className='card-header animated-bg'
            id='header'>
            &nbsp;
          </div>
          <div className='card-content'>
            <h3
              className='card-title animated-bg animated-bg-text'
              id='title'>
              &nbsp;
            </h3>
            <p
              className='card-excerpt'
              id='excerpt'>
              &nbsp;<span className='animated-bg animated-bg-text'>&nbsp;</span>
            </p>
            <div className='author'>
              <div
                className='profile-img animated-bg'
                id='profile_img'>
                &nbsp;
              </div>
              <div className='author-info'>
                <strong
                  className='animated-bg animated-bg-text'
                  id='name'>
                  &nbsp;
                </strong>
                <small
                  className='animated-bg animated-bg-text'
                  id='date'>
                  &nbsp;
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

// node lists
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWqiOjEyMDd9@auto=format&fit=crop&w=2102&q=80" alt="" />'
  title.innerHTML = 'Lorem ipsum dolor sit amet.'
  excerpt.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, aspernatur. '
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
  name.innerHTML = 'John Doe'
  date.innerHTML = 'Oct 08, 2020'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
