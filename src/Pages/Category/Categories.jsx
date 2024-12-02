import React from 'react'
import "../Category/Categories.css"
import BookCard from '../../Components/BookCard.jsx'
import { useState } from 'react'
import { data } from '../../Components/data.jsx'
function Categories (){
  const [selectedTopic, setSelectedTopic] = useState("Jahon adabiyotlar")
  const button = ["Jahon adabiyotlar", "Diniy adabiyotlar", 'Ilmiy adabiyotlar',"Bolalar adabiyoti"]
  const filterBooks = data.filter((i) => i.category === selectedTopic)
  return (
    <>
      <section>
        {button.map((i)=>{
          return(
            <button key={i} className={`c-btn ${i===selectedTopic ? 'active':""}`} onClick={()=>setSelectedTopic(i)}> 
            {i}
          </button>
          )
        })}
      </section>
      <section className='card-container'>
        {filterBooks.map((i)=>{
          return(
            <section className='card' key={i.id}>
          <img className='card-img' src={i.img} alt={i.title} />
          <div className="card-detailes">
            <h3 className='card-title'>{i.title}</h3>
            <p className='author'>{i.author}</p>
          </div>
          <button className='c-btn' id='more-btn'>More</button>
        </section>
          )
        })}
      </section>
    </>
  )
}

export default Categories