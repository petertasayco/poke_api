import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/Pokedex/CardPoke'
import InputSearch from '../components/Pokedex/InputSearch'
import Pagination from '../components/Pokedex/Pagination'
import SelectByType from '../components/Pokedex/SelectByType'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()

  const [typeSelected, setTypeSelected] = useState('All pokemons')

  useEffect(() => {
  if(typeSelected !== 'All pokemons'){
    axios.get(typeSelected)
    .then(res => {
      const result = res.data.pokemon.map(e => e.pokemon )
      setPokemons(result)
    })
    .catch(err => console.log(err))
  }else{
    
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  
      axios.get(URL)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
    }
  }, [typeSelected])
    
  

const username =  useSelector(state => state.username)

const [page, setPage] = useState(40)
const [pokePerPage, setPokePerPage] = useState(8)
const initialPoke = (page - 1) * pokePerPage
const finalPoke = page * pokePerPage

  return (
    <div>
      <header>
        <h1>POKEDEX</h1>
        <p>Welcome <span>{username}</span>, here you can find your favorite pokemon</p>
      </header>
      <aside>
        <InputSearch />
        <SelectByType  setTypeSelected={setTypeSelected} setPage={setPage}/>
        <Pagination 
          page={page}
          pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
          setPage = {setPage}
        />
      </aside>
      <main>
        <div className='card_container'>
            {
              pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
                <CardPoke 
                  key={pokemon.url}
                  url={pokemon.url}
                />
              ))
            }
        </div>
      </main>
    </div>
  )
}

export default Pokedex