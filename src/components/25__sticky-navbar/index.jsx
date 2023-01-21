import './style/style.css'
export default function StickyNavbar() {
  return (
    <div className='app-25'>
      <div className='body'>
        <nav className='nav'>
          <div className='container'>
            <h1 className='logo'>
              <a href='./index.html'>My Website</a>
            </h1>
            <ul>
              <li>
                <a
                  href='#'
                  className='current'>
                  Home
                </a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Services</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className='hero'>
          <div className='container'>
            <h1>Welcome To My Website</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, neque?</p>
          </div>
        </div>
        <section className='container content'>
          <h2>Content One</h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae numquam, sequi eum modi ducimus vel? Necessitatibus, quidem fugiat? Excepturi deserunt distinctio dolore quam iure blanditiis, dolor, corrupti eligendi cupiditate quia autem possimus. Voluptas unde cum iure reiciendis! Velit nostrum tenetur iure quisquam suscipit impedit aliquam, animi vero culpa ea aliquid quo qui eos odit aperiam, eveniet possimus ipsam voluptas consequatur voluptatibus? Eligendi, quo dolore quia quisquam repellat placeat in ab laboriosam eveniet odit quis laborum inventore illo, ipsum delectus natus aspernatur. Vel labore nam quasi ullam minus alias ea inventore ipsam cum aperiam. Dolore impedit mollitia, non obcaecati vitae quibusdam.</p>

          <h3>Content Two</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequuntur est illo totam distinctio nulla unde, corrupti possimus iusto quasi?</p>
        </section>
      </div>
    </div>
  )
}

const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}
