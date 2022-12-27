import React from 'react'
import  Form  from '../components/Home/Form'
import './styles/home.css'

const Home = () => {
  return (
    <article className='pokedex'>
      <img className='pokedex_img' src="/images/home/pokedex.png" alt="" />
      <header className='pokedex_header'>
        <h2 className='pokedex_subtitle'>Hi trainer</h2>
        <p className='pokedex_text'>Give me your name to see the pokedex</p>
      </header>
      <Form />
    </article>
  )
}

export default Home