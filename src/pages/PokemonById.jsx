import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/PokedexId/Pokemon404'
import "./styles/pokemonById.css"

const PokemonById = () => {

const {id} = useParams()

const [pokemon, setPokemon] = useState()

const [hasError, setHasError] = useState(false)

const getPercentBarProgress = (valueStat) => {
  const maxValue = 200
  return `${(valueStat*100) / maxValue}%`
}

useEffect(() => {
const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
  axios.get(URL)
  .then(res => setPokemon(res.data))
  .catch(err => {
    console.log(err)
    setHasError(true)
  })
}, [])

if(hasError){
  return <Pokemon404 />
}

  return (
    <main className='pokemon'>
      <section className='pokemonId'>
        <header className={`pokemonId_header bg_${pokemon?.types[0].type.name}`}></header>
         <img className='pokemonId_img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <h3 className='pokemonId_id'># {pokemon?.id}</h3>
        <h2 className='pokemonId_name'>{pokemon?.name}</h2>
        <section className='pokemonId_features'>
          <div className='pokemonId_feature'>
            <p className='pokemonId_feature_name'>Weight</p>
            <p className='pokemonId_feature_value'>{pokemon?.weight}</p>
          </div>
          <div className='pokemonId_feature'>
            <p className='pokemonId_feature_name'>Height</p>
            <p className='pokemonId_feature_value'>{pokemon?.height}</p>
          </div>
        </section>

        <section className='pokemonId_info'>
          <div className='pokemonId_info_container'>
            <h4 className='pokemonId_info_title'>Types</h4>
            <div className='pokemonId_info_data'>
              {
                pokemon?.types.map((type)=>
                <p className={`pokemonId_info_value bg_${pokemon?.types[0].type.name}`} key={type.type.name}>{type.type.name}</p>
                )
              }
            </div>
          </div>
          <div className='pokemonId_info_container'>
            <h4 className='pokemonId_info_title'>Abilities</h4>
          <div className='pokemonId_info_data'>
            {
              pokemon?.abilities.map((ability) => 
              <p className='pokemonId_info_value' key={ability.ability.url}>{ability.ability.name}</p>
              )
            }
            </div>
          </div>
        </section>
        <section className='pokemonId_stats'>
          <h3 className='pokemonId_stats_title'>Stats</h3>
          <div className='pokemonId_stats_container'>
            {
              pokemon?.stats.map((stat)=>(
            <div className='pokemonId_stat'>
              <div className='pokemonId_stat_header'>
                <p className='pokemonId_stat_name'>{stat.stat.name}</p>
                <p className='pokemonId_stat_value'>{stat.base_stat}/200</p>
              </div>
              <div className='pokemonId_stat_bar'>
                <div style={{width: getPercentBarProgress(stat.base_stat)}} className='pokemonId_stat_barProgress'></div>
              </div>
            </div>

              ))
            }
          </div>
        </section>
        
      </section>
    </main>
  )
}

export default PokemonById