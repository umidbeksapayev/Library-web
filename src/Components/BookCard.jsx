import React from 'react'
import {data} from "./data"
function BookCard() {
  return (
    <>
      {data.map((i)=>{
        return(
          <section className='card' key={i.id}>
        <img className='card-img' src={i.img} alt={i.title} />
        <div className="card-detailes">
          <h3 className='card-title'>{i.title}</h3>
          <p>{i.author}</p>
        </div>
        <button className='c-btn' id='more-btn'>Ko'proq</button>
      </section>
        )
      })}
    </>
  )
}

export default BookCard