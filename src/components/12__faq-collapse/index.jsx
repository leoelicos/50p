export default function FAQCollapse() {
  return (
    <div className='app-12'>
      <div className='body'>
        <h1>Frequently Asked Questions</h1>

        <div className='faq-container'>
          <div className='faq active'>
            <h3 className='faq-title'>Why shouldn't we trust atoms?</h3>

            <p className='faq-text'>They make up everything.</p>

            <button className='faq-toggle'>
              <i className='fas fa-chevron-down'></i>
              <i className='fas fa-times'></i>
            </button>
          </div>

          <div className='faq'>
            <h3 className='faq-title'>What do you call someone with no body and no nose?</h3>

            <p className='faq-text'>Nobody knows.</p>

            <button className='faq-toggle'>
              <i className='fas fa-chevron-down'></i>
              <i className='fas fa-times'></i>
            </button>
          </div>

          <div className='faq'>
            <h3 className='faq-title'>What's the object-oriented way to become wealthy?</h3>

            <p className='faq-text'>Inheritance.</p>

            <button className='faq-toggle'>
              <i className='fas fa-chevron-down'></i>
              <i className='fas fa-times'></i>
            </button>
          </div>

          <div className='faq'>
            <h3 className='faq-title'>How many tickles does it take to tickle an octopus?</h3>

            <p className='faq-text'>Ten-tickles?</p>

            <button className='faq-toggle'>
              <i className='fas fa-chevron-down'></i>
              <i className='fas fa-times'></i>
            </button>
          </div>

          <div className='faq'>
            <h3 className='faq-title'>What is: 1 + 1?</h3>

            <p className='faq-text'>Depends on who you are asking.</p>

            <button className='faq-toggle'>
              <i className='fas fa-chevron-down'></i>
              <i className='fas fa-times'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

//  bring in the toggle buttons using querySelectorAll with class faq-toggle, this will create a node list
// loop through nodelist (forEach)
// on each toggle, add a click event (addEvent Listener)
// toggle the active class on the parent node (.parentNode & classList.toggle())
const nodeList = document.querySelectorAll('.faq-toggle')
nodeList.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active')
  })
})
