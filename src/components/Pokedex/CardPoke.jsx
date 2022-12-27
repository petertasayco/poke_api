import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/cardPoke.css'

const CardPoke = ({url}) => {

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(url)
        .then(res => setPokemon(res.data))
        .catch(err => console.log(err))
       }, [])
    
       const navigate = useNavigate()

       const handleClick = () => {
        navigate(`/pokedex/${pokemon.id}`)
       }

  return (
    <article className={`card_poke border_${pokemon?.types[0].type.name}`} onClick={handleClick}>
        <header className={`card_poke_header bg_${pokemon?.types[0].type.name}`}>
            <img className='card_poke_sprite' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className='card_poke_body'>
            <h3 className={`card_poke_name letter_${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
            <ul className='card_poke_types_container'>
                {   
                    pokemon?.types.map(type => (
                        <li key={type.slot} className='card_poke_type'>{type.type.name}</li>
                    ))
                }
            </ul>
            <p className='card_poke_type_label'>Type</p>
        </section>
        <ul className='card_poke_stats_container'>
                {
                    pokemon?.stats.map(stat => (
                        <li key={stat.stat.name} className='card_poke_stat'>
                            <span className='card_poke_stat_label'>{stat.stat.name}</span>
                            <span className={`card_poke_stat_number letter_${pokemon?.types[0].type.name}`}>{stat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
    </article>
  )
}

export default CardPoke