import React from 'react'
import "../Home/Home.css"
import { data } from '../../Components/data.jsx'
import BookCard from '../../Components/BookCard'
export default function Home(){
  return (
    <div>
      <div className='home'>
        <div className="home-text">
          <h1>Kitoblar dunyosiga xush kelibsiz!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus minus iure natus quasi quis dign!</p>
        </div>
        <div className="home-img">
          <img src="../src/assets/Colorful-books-on-transparent-background-PNG.png" alt="kj" />
        </div>
      </div>
      <h2 className='home-h2'>New book</h2>
      <section className='card-books'>
        {data.map((i)=>{
          return(
            <section className='card-book' key={i.id}>
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
    </div>
    
  )
}
