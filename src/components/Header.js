import React, { useState } from 'react'
//import {v4} from 'uuid'
// styles
import './Header.css'
import SearchResults from './SearchResults'
// components
//import SearchResults from './SearchResults'



export default function Header() {

  const [term , setTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])


  const getSearchResults = async () => {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&key=AIzaSyAu2a9a18TPFSx-6Vo4RpK4AdpX8Hy8FBk`)
      const data = await response.json()

      setSearchResults(data.items)
    console.log(data.items)
  }

// console.log(data)

  const handleKeyDown = (e)  => {
  
      if(e.key=== 'Enter') {
        getSearchResults()
      }
  
  }
  return (
    <div>
    <div className='body'>
       <h1 className='name'>My Books</h1>
       <input onKeyDown={handleKeyDown} onChange={(e) => setTerm(e.target.value)} type='search' placeholder='Search Book Name' />  
    </div>
     <main>
     <ul className='search-result'>
         {searchResults.map(each=> <SearchResults key ={each.id} item ={each} /> )}
     </ul>
   </main>
   </div>
  )
}
