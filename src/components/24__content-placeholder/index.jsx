import { useEffect, useState } from 'react'
import './style/style.css'
import data from './data/index'
export default function ContentPlaceholder() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])

  return (
    <App>
      <Body>
        <Card>
          <CardHeader
            loading={loading}
            header={data.header}
          />
          <CardContent>
            <Title
              loading={loading}
              title={data.title}
            />
            <CardExcerpt
              loading={loading}
              excerpt={data.excerpt}
            />
            <Author>
              <ProfileImage
                loading={loading}
                image={data.profile_img}
              />
              <AuthorInfo>
                <Name
                  loading={loading}
                  nameText={data.name}
                />
                <Date
                  loading={loading}
                  date={data.date}
                />
              </AuthorInfo>
            </Author>
          </CardContent>
        </Card>
      </Body>
    </App>
  )
}

const App = ({ children }) => <div className='app-24'>{children}</div>
const Body = ({ children }) => <div className='body'>{children}</div>
const Card = ({ children }) => <div className='card'>{children}</div>
const CardHeader = ({ loading, header }) =>
  loading ? (
    <div className={`card-header  animated-bg`}>&nbsp;</div>
  ) : (
    <div className='card-header'>{header}</div> //
  )
const CardContent = ({ children }) => <div className='card-content'>{children}</div>
const Title = ({ loading, title }) =>
  loading ? (
    <h3 className='card-title animated-bg animated-bg-text'>&nbsp;</h3>
  ) : (
    <h3 className=''>{title}</h3> //
  )
const CardExcerpt = ({ loading, excerpt }) => {
  loading ? ( //
    <div className='card-excerpt'>
      &nbsp;
      <span className='animated-bg animated-bg-text' />
    </div>
  ) : (
    <div className='card-excerpt'>{excerpt}</div>
  )
}
const Author = ({ children }) => <div className='author'>{children}</div>
const ProfileImage = ({ loading, image }) => {
  loading ? (
    <div className='profile-img animated-bg'>&nbsp;</div> //
  ) : (
    <div className='profile-img'>{image}</div>
  )
}
const AuthorInfo = ({ children }) => <div className='author-info'>{children}</div>
const Name = ({ loading, nameText }) => {
  loading ? (
    <strong className='animated-bg animated-bg-text'>&nbsp;</strong> //
  ) : (
    <strong>{nameText}</strong>
  )
}
const Date = ({ loading, date }) => {
  loading ? (
    <small className='animated-bg animated-bg-text'>&nbsp;</small> //
  ) : (
    <small>{date}</small>
  )
}
