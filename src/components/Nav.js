import React from 'react'
import { Link } from 'react-router-dom'
// styles
import './Nav.css'
//logo
import logo from '../Assets/book_logo.jpeg'

export default function Nav() {
  return (
    <div>
      <nav>
      <h2>My Books</h2>
        <ul >
            <li> <Link to = '/'> Home</Link></li>
            <li><Link to = '/about'>About</Link></li>
            <li><Link to = '/SavedBooks'>Saved Books</Link></li>
        </ul>
      </nav>
    </div>
  )
}
