import './style/style.css'
export default function KineticLoader() {
  return (
    <App>
      <Body>
        <Kinetic />
      </Body>
    </App>
  )
}
const App = ({ children }) => <div className='app-23'>{children}</div>
const Body = ({ children }) => <div className='body'>{children}</div>
const Kinetic = ({ children }) => <div className='kinetic'>{children}</div>
