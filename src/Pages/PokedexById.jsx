import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Pokemon404 from '../components/PokedexById/Pokemon404'
import "./styles/PokedexById.css"

const PokedexById = () => {

  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)
  const {id} = useParams()

  useEffect(() => {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon/"

    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => setPokemon(res.data))
      .catch(err => {
        console.log(err)
        setHasError(true)
      })

  }, [])


  
  if(hasError){
    return <Pokemon404 />
  }else {
    return (
      <article className='PokedexById'>
        <header className="header__red">
          <div className="pokede__img">
            <img src='/images/Pokedex.png' className='pokedex__img'/>
          </div>
          <div className="header__black"></div>
          <div className="header__circle">
              <div className="header__circle-int"></div>
          </div>
        </header> 
        <section className='back'>
          <Link to={"/pokedex"}><box-icon name='arrow-back'></box-icon></Link>
        </section>
        <main className='poke__indiv'>
          <header className={`indiv__poke__header bg-${pokemon?.types[0].type.name}`}>
            <div className="poke__indiv__img">
                <img className='individ__poke__header-img' src={pokemon?.sprites.other["official-artwork"].front_default} alt={pokemon?.name} />
            </div>
          </header>
          <section className='number__poke'>
            <h2 className='number__poke-title'>#{pokemon?.id}</h2>
          </section>
          <section className='name__poke'>
            <div className="line"></div>
            <h2 className={`letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
            <div className="line"></div>
          </section>
          <section className='weight__height__poke'>
            <div className="weight">
              <p className="weight__label">Weight</p>
              <p className="weight__value">{pokemon?.weight}</p>
            </div>
            <div className="height">
              <p className="height__label">Height</p>
              <p className="height__value">{pokemon?.height}</p>
            </div>
          </section>
          <section className="type__abilities__poke">
            <div className="type">
              <h3>Type</h3>
              <div className="types__poke">
                {
                  pokemon?.types.map(type => (
                    <div key={type.type.url} className={`type__poke bg-${type.type.name}`}>
                      <p >{type.type.name}</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="ability">
              <h3>Abilities</h3>
              <div className="abilities_poke">
                {
                  pokemon?.abilities.map(ability => (
                    <div key={ability.ability.url} className="ability__poke">
                      <p>{ability.ability.name}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </section>
          <section className="Stats">
            <div className="stats__title__poke">
              <h2>Stats</h2>
              <div className="line"></div>
            </div>
            <div className="stats__poke">
            {
              pokemon?.stats.map(stat => (
                <div key={stat.stat.url} className="stat__poke">
                  <p className="stat__poke-label">{`${stat.stat.name}:`}</p>
                  <p className="stat__poke-value">{stat.base_stat}/150</p>
                </div>
              ))
            }
            </div>
          </section>
        </main>
        
      </article>
    )
  }
}

export default PokedexById