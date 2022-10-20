import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles/InputSearch.css"

const InputSearch = () => {

    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
    }

  return (
    <form className='pokedex__in__form' onSubmit={submit}>
        <input className='pokedex__in__input' id='search' type="text" placeholder='Search Your Pokemon...'/>
        <button className='pokedex__in__btn' ><box-icon name='search-alt-2' color="#D93F3F"></box-icon></button>
    </form>
  )
}

export default InputSearch