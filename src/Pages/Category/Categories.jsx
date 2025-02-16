import React from 'react'
import "../Category/Categories.css"
import BookCard from '../../Components/BookCard.jsx'
import { useState } from 'react'
import { fetchBooks } from '../../api/bookApi.jsx'
function Categories (){
  const [selectedTopic, setSelectedTopic] = useState("Jahon adabiyotlar")
  const button = ["Jahon adabiyotlar", "Diniy adabiyotlar", 'Ilmiy adabiyotlar',"Bolalar adabiyoti"]
  const filterBooks = fetchBooks.filter((i) => i.category === selectedTopic)
  return (
    <>
      <section className='bar-buttons'>
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