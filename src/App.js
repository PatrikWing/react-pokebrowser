import { Background } from "./components/Background"
import { PokemonCard } from "./components/PokemonCard"
import {useEffect, useState} from 'react'

function App() {
  document.title = "Poke Browser"

  const nrOfPokemonsToGet = 200
  const [pokemons, setPokemons] = useState([])
  const [filteredPokemons, setFilteredPokemons] = useState([])
  const [input, setInput] = useState("")


  // fetch pokemon everytime limit changes
  useEffect( () => {
    const getPokemonWithLimit = async (nrOfPokemonsToGet) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${nrOfPokemonsToGet}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const json = await response.json()
      setPokemons(json.results)
      setFilteredPokemons(json.results)
    }
    try{
      getPokemonWithLimit(nrOfPokemonsToGet)
    }catch(error){
      console.error("Failed getting pokemon: ", error)
    }
    
  },[])

  // filter pokemon by name when input changes, or new pokemon
  useEffect( () => {
    const filterPokemon = () => {
      setFilteredPokemons(pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(input.toLowerCase())))
    }
    filterPokemon()
  },[input, pokemons])


  return (
    <Background>
        <nav className="flex items-center w-4/5 overflow-x-auto bg-gray-800 h-14 gap-x-2 drop-shadow-xl">
          <img src={require("./img/pokemon_browse.png")} alt="pokemon_fetch" className="w-48 px-2"/>
          <input type="text" className="w-56 h-8 rounded-sm" placeholder="Name of pokemon?" value={input} onInput={e => setInput(e.target.value)}/>
        </nav>
        <ul className="flex flex-wrap justify-center w-4/5 h-full gap-8 p-10 overflow-y-auto bg-indigo-400 shadow-xl">
          {filteredPokemons.map((pokemon, index) => (<PokemonCard key={pokemon.name} pokemon={pokemon}/>))}
        </ul>
    </Background>
  )
}

export default App
