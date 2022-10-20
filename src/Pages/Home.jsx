import React from 'react'
import FormHome from '../components/Home/FormHome'
import "./styles/Home.css"

const Home = () => {
  return (
    <div className='Pokedex'>
        <div className="poked__img">
          <img src='/images/Pokedex.png' className='pokedex__img'/>
        </div>
        <h2 className='pokedex__subtitle'>Hi Trainer!</h2>
        <p className='pokedex__text'>First of all, give me your name</p>
        <FormHome />
    </div>
  )
}

export default Home