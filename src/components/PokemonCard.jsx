import { useEffect, useState } from "react"


export const PokemonCard = ({pokemon}) => {

  // each pokemon has a type, which also has a specific color
  const typeColors = {
    bug: "bg-green-500",
    dark: "bg-gray-800",
    dragon: "bg-indigo-500",
    electric: "bg-yellow-500",
    fairy: "bg-pink-500",
    fighting: "bg-red-500",
    fire: "bg-orange-500",
    flying: "bg-indigo-500",
    ghost: "bg-purple-500",
    grass: "bg-green-500",
    ground: "bg-orange-500",
    ice: "bg-blue-500",
    normal: "bg-gray-500",
    poison: "bg-purple-500",
    psychic: "bg-pink-500",
    rock: "bg-gray-500",
    steel: "bg-blue-500",
    water: "bg-blue-500"
  }

  const [details, setDetails] = useState({})

  // get details of received pokemon
  useEffect(() => {
    const getPokemonDetails = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      const json = await response.json()
      setDetails(json)
    }
    try{
      getPokemonDetails()
    }catch(error){
      console.error("Failed getting pokemon details", error)
    }
  }, [pokemon])

  return (
  <div className={`flex flex-col w-64 h-fit group ${details?.types ? typeColors[details.types[0].type.name] : typeColors.normal} rounded-xl drop-shadow-xl`}>
    <p className="text-center py-2w-full">{pokemon.name.toUpperCase()}</p>
    <img src={details?.sprites?.other?.dream_world?.front_default} alt={pokemon.name} className="h-56 p-2 transition group-hover:translate-x-2"/>
    
    {/* TODO: Pokemon stats (working but looks uggly)
    <ul className="flex flex-wrap w-full gap-2 py-2 overflow-auto border-t-2 h-fit">
      {details?.stats?.map(stat => <li key={stat.stat.name} className="p-2 text-xs border rounded-full">{`${stat.stat.name.toUpperCase()}: ${stat.base_stat}`}</li>)}
    </ul>
    */}
  </div>
  )
}