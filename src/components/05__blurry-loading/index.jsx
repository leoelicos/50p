import './style/style.css'

export default function BlurryLoading() {
  return (
    <App>
      <Body>
        <section className='bg'></section>
        <div className='loading-text'>0%</div>
      </Body>
    </App>
  )
}

const App = ({ children }) => <div className='app-05'>{children}</div>
const Body = ({ children }) => <div className='body'>{children}</div>

/* 

const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
	load++;

	if (load > 99) {
		clearInterval(int);
	}

	loadText.innerText = `${load}%`;
	loadText.style.opacity = scale(load, 0, 100, 1, 0);
	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};


*/
