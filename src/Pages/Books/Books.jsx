import React from 'react'
import "../Books/Books.css"
import { fetchBooks } from '../../api/bookApi'
import { useState, useEffect } from 'react'
function Books (){
  const [books, setbooks] = useState([]);

  useEffect(()=>{
    const getBooks = async () =>{
      try{
        const booksData = await fetchBooks()
        setbooks(booksData)
        console.log(booksData)
      } catch(error){
        console.error("kitob olishda xatolik:",error);
      }
    };
    
    getBooks();
  },[])
  return (
    <>
    <div className="book-search">
          <input type="text" id='search'  placeholder='book search' />
          <button>search</button>
        </div>
      <section className='card-books'>
        <h1>Kitoblar ro'yxati</h1>
        {books.length ===0 ?(<p>kitoblar mavjud emas</p>):(
          Array.isArray(books) && books.map((i)=>{
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
          })
        )}
        
      </section>
    </>
  )
}

export default Books