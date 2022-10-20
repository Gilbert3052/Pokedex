import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles/CardPokedex.css"

const CardPokedex = ({Url}) => {

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
      axios.get(Url)
        .then(res => setPokemon(res.data))
        .catch(err => console.log(err))          
    }, [])

    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }

  return (
    <div className={`Card__poke border-${pokemon?.types[0].type.name}`} onClick={handleClick}>
        <header className={`card__poke__header bg-${pokemon?.types[0].type.name}`}>
            <div className="poke__img">
                <img className='card__poke__header-img' src={pokemon?.sprites.other["official-artwork"].front_default} alt={pokemon?.name} />
            </div>
        </header>
        <main className="card__poke__main">
            <section className="card-poke__body">
                <h2 className={`card-poke__body__name letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
                <ul className='card-poke__types-container'>
                    {
                        pokemon?.types.map(type => (
                            <li key={type.type.url} className='card-poke__type'>{type.type.name}</li>
                        ))
                    }
                </ul>
                <p className='card-poke__type-label'>Type</p>
            </section>
            <div className="line"></div>
            <ul className='card-poke__stats-container'>
                {
                    pokemon?.stats.map(stat => (
                        <li key={stat.stat.url} className='card-poke__stat'>
                            <span className='card-poke__stat-label'>{stat.stat.name} </span>
                            <span className='card-poke__stat-number'>{stat.base_stat} </span>
                        </li>
                    ))
                }
            </ul>
        </main>
    </div>
  )
}

export default CardPokedex