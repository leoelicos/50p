import './style/style.css'

export default function FormWave() {
  return <div>FormWave</div>
}

/* 

		<div class="container">
			<h1>Please Login</h1>
			<form>
				<div class="form-control">
					<input type="text" required />
					<label>Email</label>
				</div>
				<div class="form-control">
					<input type="password" required />
					<label>Password</label>
				</div>
				<button class="btn">Login</button>
				<p class="text">Don't have an account? <a href="#">Register</a></p>
			</form>
		</div>
    
    */

/* 
    
    
    const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
	label.innerHTML = label.innerText
		.split('')
		.map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
		.join('');
});



*/
