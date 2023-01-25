import { useEffect, useRef, useState } from 'react'
import './style/style.css'
export default function Pokedex() {
  const componentDidMount = useRef(false)
  const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#F4E7DA',
    rock: '#D5D5D4',
    fairy: '#FCEAFF',
    poison: '#98D7A5',
    bug: '#F8D5A3',
    dragon: '#97B3E6',
    psychic: '#EAEDA1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
  }

  const main_types = Object.keys(colors)

  const [pokemons, setPokemons] = useState(null)

  useEffect(() => {
    const pokemonPromises = []
    for (let i = 1; i <= 150; i++) {
      pokemonPromises.push(
        new Promise(async (resolve, reject) => {
          const url = `https://pokeapi.co/api/v2/pokemon/${i}`
          try {
            const r1 = await fetch(url)
            const pokemon = await r1.json()

            const img = pokemon.sprites.front_default
            const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
            const id = pokemon.id.toString().padStart(3, '0')

            const poke_types = pokemon.types.map((type) => type.type.name)
            const type = main_types.find((type) => poke_types.indexOf(type) > -1)
            const color = colors[type]
            const response = { id, img, name, type, color }
            resolve(response)
          } catch (err) {
            reject(err)
          }
        })
      )
    }
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
