import { useEffect, useRef, useState } from 'react'
import './style/style.css'
import pokemonPromises from './api'

export default function Pokedex() {
  const [pokemons, setPokemons] = useState(null)
  const componentDidMount = useRef(false)

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await Promise.all(pokemonPromises)
      setPokemons(data)
    }

    if (componentDidMount.current === false) {
      fetchPokemons()
      componentDidMount.current = true
    }
  }, [])

  return (
    <div className='app-37'>
      <div className='body'>
        <h1>Pokedex</h1>
        {pokemons && (
          <div
            className='poke-container'
            id='poke-container'>
            {pokemons.map(({ id, img, name, type, color }) => (
              <div
                key={id}
                className='pokemon'
                style={{ backgroundColor: color }}>
                <div className='img-container'>
                  <img
                    src={img}
                    alt={name}
                  />
                </div>
                <div className='info'>
                  <span className='number'>{id}</span>
                  <h3 className='name'>{name}</h3>
                  <small className='type'>
                    Type: <span>{type}</span>
                  </small>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
