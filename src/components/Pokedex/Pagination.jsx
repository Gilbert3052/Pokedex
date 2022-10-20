import React, { useEffect, useState } from 'react'
import 'boxicons'
import "./styles/Pagination.css"


const Pagination = ({page, pokemonesLength, pokePerPage, setPage}) => {

    const pagesPerBlock = 5
    const currentBlock = Math.ceil(page / pagesPerBlock)
    const pokeLength = Math.ceil(pokemonesLength / pokePerPage)
    const blockLength = Math.ceil(pokeLength / pagesPerBlock)

    const arrPages = []
    const initialPage = (currentBlock - 1) * pagesPerBlock + 1
    const limitPage = blockLength === currentBlock ? pokeLength : initialPage + (pagesPerBlock - 1)

    for(let i = initialPage; i <= limitPage; i++){
        arrPages.push(i)
    }

    const increase = () => {
        if(page < pokeLength){
            setPage(page + 1)
        }
    }
    const decrease = () => {
        if(page > 1){
            setPage(page - 1)
        }
    }

    const increaseBlock = () => {
        if(page < pokeLength){
            setPage(arrPages[0]+5) 
            console.log(page);
        }
    }
    const decreaseBlock = () => {
        if(page > pagesPerBlock){
            setPage(arrPages[0]-1)
            console.log(page);
        }
    }

    const ChangeValuePage = e => {
        if(page !== e.target.value){
            setPage(+e.target.value)
        }
        
    }

  return (
    <div className='Pagination'>
        {
            page > 5 &&
                <box-icon onClick={decreaseBlock} color="black" animation="fade-left-hover" name='chevrons-left'></box-icon>
        }
        
        {
            page !== 1 &&
                <box-icon animation="flashing-hover" onClick={decrease} name='left-arrow-circle' color="black"></box-icon>
        }
        
        {
            arrPages.map(pageBlock => (
                <button className={`btn__pagination ${page === pageBlock && "btn__active"}`} onClick={ChangeValuePage} key={pageBlock} value={pageBlock}>{pageBlock}</button>
            ))
        }
        {
            page !== pokeLength &&
                <box-icon animation="flashing-hover" onClick={increase} name='right-arrow-circle' color="black"></box-icon>
        }
        {
            currentBlock !== blockLength &&
                <box-icon box-icon onClick={increaseBlock} color="black" animation="fade-right-hover" name='chevrons-right'></box-icon>
        }
        
    </div>
  )
}

export default Pagination