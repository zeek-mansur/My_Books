import React, { useState } from 'react'
// styles
import './Header.css'
// components
import SearchResults from './SearchResults'

export default function Header() {

  const [term , setTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

    // function to fetch data from google api
        const getSearchResults =  () => {
           fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&key=AIzaSyAu2a9a18TPFSx-6Vo4RpK4AdpX8Hy8FBk`)
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              setSearchResults(data.items);
               // console.log(data.items)
            })
            .catch((err) => {
              console.log(err)
            }); 
            }

// search function            
const handleKeyDown = (e)  => {

      if(e.key=== 'Enter') { 
        getSearchResults()
      } 
}
 
  return (
    <div>
      <div className='body'>
        <h1 className='name'>Search Books</h1>
        <input onKeyDown={handleKeyDown} onChange={(e) => setTerm(e.target.value)} type='search' placeholder='Search Book Name' />  
      </div>
      
      <main>
        {searchResults &&  <ul className='search-result'>
          {searchResults.map(each=> <SearchResults key ={each.id} item ={each}/> )}
      </ul>}
    </main>
   </div>
  )
}
