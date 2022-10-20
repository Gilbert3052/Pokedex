import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../../store/slices/userName.slice'
import "./FormHome.css"

const FormHome = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submit = e => {
    e.preventDefault()
    dispatch(setUserNameGlobal(e.target.firstChild.value.trim()))
    navigate("/pokedex")
  }

  const userName = useSelector(state => state.userName)
  console.log(userName);


  return (
    <form onSubmit={submit} className="pokedex__form">
        <input className='pokedex__input' 
          type="text" 
          placeholder='Your Name...'
        />
        <button className='pokedex__btn'>Catch Them All!</button>
    </form>
  )
}

export default FormHome