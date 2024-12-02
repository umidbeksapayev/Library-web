import React from 'react'
import "../Footer/Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-logo'>
        <h1>BookLogo</h1>
      </div>

      <nav className='footer-nav'>
        <ul>
          <h3 className='footer-h2'>web sahifalarimiz</h3>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <div className="social-media">
        <ul>
          <h3 className='footer-h2'>ijtimoy tarmoqlarimiz</h3>
          <li><a href="/">Instagram</a></li>
          <li><a href="/">You Tube</a></li>
          <li><a href="/">Telegram</a></li>
          <li><a href="/">Facebook</a></li>

        </ul>
      </div>

    </footer>
  )
}

export default Footer