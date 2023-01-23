import './style/style.css'
export default function AnimatedCountdown() {
  return (
    <div className='app-34'>
      <div className='body'>
        <div className='counter'>
          <div className='nums'>
            <span className='in'>3</span>
            <span>2</span>
            <span>1</span>
            <span>0</span>
          </div>
          <h4>Get Ready</h4>
        </div>
        <div className='final'>
          <h1>GO</h1>
          <button id='replay'>
            <span>Replay</span>
          </button>
        </div>
      </div>
    </div>
  )
}

/* 

const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();

function resetDOM() {
	counter.classList.remove('hide');
	finalMessage.classList.remove('show');

	nums.forEach((num) => {
		num.classList.value = '';
	});

	nums[0].classList.add('in');
}

function runAnimation() {
	nums.forEach((num, idx) => {
		const nextToLast = nums.length - 1;
		num.addEventListener('animationend', (e) => {
			if (e.animationName === 'goIn' && idx !== nextToLast) {
				num.classList.remove('in');
				num.classList.add('out');
			} else if (e.animationName === 'goOut' && num.nextElementSibling) {
				num.nextElementSibling.classList.add('in');
			} else {
				counter.classList.add('hide');
				finalMessage.classList.add('show');
			}
		});
	});
}

replay.addEventListener('click', () => {
	resetDOM();
	runAnimation();
});


*/
