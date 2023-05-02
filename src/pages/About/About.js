import React from 'react'

// styles
import './About.css'

export default function About() {
  return (
    <div className='about'>
      <h3>About</h3>
        <p>
        This is a single-page web application that allows users to search for and view information about books.
        The app was built using React, CSS and Google Books API.
       </p> 
       <p>
        This application allows users to search for books by title, author, or ISBN.
        Users can also click on searched books to view its details, including its description, publisher, publication date, and ISBN.
        This application also have a navigation menu that allows users to switch between the search page and the saved books page.
       </p>
    </div>
  )
}
