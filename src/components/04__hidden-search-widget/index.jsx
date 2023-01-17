import './style/style.css'

export default function HiddenSearchWidget() {
  return (
    <div className='app-04'>
      <div className='body'>
        <div className='search'>
          <input
            type='text'
            className='input'
            placeholder='Search...'
          />
          <button className='btn'>
            <i className='fas fa-search'></i>
          </button>
        </div>
      </div>
    </div>
  )
}
/* 

const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
	search.classList.toggle('active');
	input.focus();
});


*/
