import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../../Store/slices/username.slice'

const Form = () => {

const dispatch = useDispatch()
const navigate = useNavigate()

const submit = (e) => {
    e.preventDefault()
    dispatch(setUserNameGlobal(e.target.firstChild.value.trim()))
    navigate('/pokedex')
}

  return (
    <form onSubmit={submit} className='pokedes_form'>
        <input className='pokedex_input' type="text" />
        <button className='pokedex_btn'>Catch them all!</button>
    </form>
    
  )
}

export default Form