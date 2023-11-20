import React from 'react'
// import Card from './Card'

const Cards = ({item}) => {
  return (
    <div>
        <div className='card' style={{width:"18rem"}}>
       <img src={item.Poster} alt="" />
       <div className='card-body'>
        <p className='card-text'><b>name :</b> {item.Title}</p>
        <p><b>Year :</b>{item.Year}</p>
       </div>
    </div>
    </div>
  )
}

export default Cards