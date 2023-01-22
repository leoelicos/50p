export default function GoodCheapFast() {
  return (
    <div className='app-32'>
      <div className='body'>
        <h2>How do you want your project to be?</h2>
        <div className='toggle-container'>
          <input
            type='checkbox'
            id='good'
            className='toggle'
          />
          <label
            htmlFor='good'
            className='label'>
            <div className='ball'></div>
          </label>
          <span>Good</span>
        </div>
        <div className='toggle-container'>
          <input
            type='checkbox'
            id='cheap'
            className='toggle'
          />
          <label
            htmlFor='cheap'
            className='label'>
            <div className='ball'></div>
          </label>
          <span>Cheap</span>
        </div>
        <div className='toggle-container'>
          <input
            type='checkbox'
            id='fast'
            className='toggle'
          />
          <label
            htmlFor='fast'
            className='label'>
            <div className='ball'></div>
          </label>
          <span>Fast</span>
        </div>
      </div>
    </div>
  )
}

/* const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach((toggle) => toggle.addEventListener('change', (e) => doTheTrick(e.target)));
function doTheTrick(theClickedOne) {
	if (good.checked && cheap.checked && fast.checked) {
		if (good === theClickedOne) {
			fast.checked = false;
		}
		if (cheap === theClickedOne) {
			good.checked = false;
		}
		if (fast === theClickedOne) {
			cheap.checked = false;
		}
	}
} */
