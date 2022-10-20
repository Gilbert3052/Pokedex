import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPokedex from '../components/Pokedex/CardPokedex'
import InputSearch from '../components/Pokedex/InputSearch'
import Pagination from '../components/Pokedex/Pagination'
import SelectByType from '../components/Pokedex/SelectByType'
import "./styles/pokedex.css"

const Pokedex = () => {

  const userName = useSelector(state => state.userName)
  const [pokemones, setPokemones] = useState()
  const [Url, setUrl] = useState("All Pokemon")

  useEffect(() => {
    if(Url !== "All Pokemon"){
      axios.get(`${Url}`)
        .then(res => {
          const poke = res.data.pokemon.map(e => e.pokemon)
          setPokemones(poke)
        })
        .catch(err => console.log(err))
    }else{
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
        .then(res => setPokemones(res.data.results))
        .catch(err => console.log(err))
    }
    
  }, [Url])

  //Pagination

  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(16)
 
  return (
    <div className='Pokedex__in'>
      <header className='header__pokedex'>
        <div className="header__red">
          <div className="pokede__img">
            <img src='/images/Pokedex.png' className='pokedex__img'/>
          </div>
            <div className="header__black"></div>
            <div className="header__circle">
                <div className="header__circle-int"></div>
            </div>
        </div>
        <p className='p__header'><span className='span__header'>Welcome {userName},</span> here you can find your favorite Pokemon.</p>
        <div className="Search">
          <InputSearch />
          <SelectByType 
            setUrl = {setUrl}
            setPage = {setPage}
          />
        </div>
        <Pagination 
          page = {page}
          pokemonesLength = {pokemones?.length}
          pokePerPage = {pokePerPage}
          setPage = {setPage}
        />
      </header>
      <main className='pokedex__main'>
        <div className="card__contain">
          {
            pokemones?.slice(((page-1) * pokePerPage), (pokePerPage*page)).map(pokemon => (
              <CardPokedex 
                key ={pokemon.url}
                Url = {pokemon.url}
              />
            ))
          }
        </div>
      </main>
      <Pagination 
          page = {page}
          pokemonesLength = {pokemones?.length}
          pokePerPage = {pokePerPage}
          setPage = {setPage}
        />
    </div>
  )
}

export default Pokedex