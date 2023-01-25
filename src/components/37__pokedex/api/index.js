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

const pokemonPromises = []
for (let i = 1; i <= 150; i++) {
  pokemonPromises.push(
    new Promise(async (resolve, reject) => {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`
      try {
        const apiResonse = await fetch(url)
        const serialized = await apiResonse.json()

        const img = serialized.sprites.front_default
        const name = serialized.name[0].toUpperCase() + serialized.name.slice(1)
        const id = serialized.id.toString().padStart(3, '0')

        const poke_types = serialized.types.map((type) => type.type.name)
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

export default pokemonPromises
