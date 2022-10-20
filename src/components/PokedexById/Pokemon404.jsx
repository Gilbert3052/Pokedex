import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Pokemon404 = () => {

    const navigate = useNavigate()

  return (
    <div>
        <h1>Pokemon not found.</h1>
        <Link to={"/pokedex"}>Return to Pokedex</Link>
    </div>
  )
}

export default Pokemon404