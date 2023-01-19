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
                autoComplete='new-text'
              />
              <Label
                htmlFor='textElement'
                children={'Email'}
              />
            </FormControl>
            <FormControl>
              <input
                name='passwordElement'
                type='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='new-password'
              />
              <Label
                htmlFor='passwordElement'
                children={'Password'}
              />
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
const Button = ({ children }) => <button className='btn'>{children}</button>
const Text = ({ children }) => <p className='text'>{children}</p>
const Label = ({ children, htmlFor }) => {
  const x = children.split('').map((letter, idx) => (
    <span
      key={idx}
      style={{ transitionDelay: `${idx * 50}ms` }}>
      {letter}
    </span>
  ))
  return <label htmlFor={htmlFor}>{x}</label>
}
