import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./styles/SelectByType.css"

const SelectByType = ({setUrl, setPage}) => {

    const [types, setTypes] = useState()

    useEffect(() => {
      axios.get("https://pokeapi.co/api/v2/type")
        .then(res => setTypes(res.data.results))
        .catch(err => console.log(err))
    }, [])
    
    const handleChange = e => {
        setUrl(e.target.value);
        setPage(1)
    }

  return (
    <select className='Select__pokedex' onChange={handleChange}>
        <option value="All Pokemon">All Pokemon</option>
        {
            types?.map(type => (
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelectByType