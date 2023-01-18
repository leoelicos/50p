import { useState } from 'react'
import './style/style.css'

export default function FormWave() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <App>
      <Body>
        <Container>
          <h1>Please Login</h1>
          <form>
            <FormControl>
              <input
                name='textElement'
                type='text'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor='textElement'>Email</label>
            </FormControl>
            <FormControl>
              <input
                name='passwordElement'
                type='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor='passwordElement'>Password</label>
            </FormControl>
            <Button>Login</Button>
            <Text>
              Don't have an account? <a href='#'>Register</a>
            </Text>
          </form>
        </Container>
      </Body>
    </App>
  )
}

const App = ({ children }) => <div className='app-08'>{children}</div>
const Body = ({ children }) => <div className='body'>{children}</div>
const Container = ({ children }) => <div className='container'>{children}</div>
const FormControl = ({ children }) => <div className='form-control'>{children}</div>
const Button = ({ children }) => <div className='btn'>{children}</div>
const Text = ({ children }) => <div className='text'>{children}</div>
/* 
    
    
    const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
	label.innerHTML = label.innerText
		.split('')
		.map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
		.join('');
});



*/
