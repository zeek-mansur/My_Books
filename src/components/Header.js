import React, { useState } from 'react'
import { useFetch } from '../Hooks/useFetch'
// styles
import './Header.css'
// components
import SearchResults from './SearchResults'

export default function Header() {

  const [term , setTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [book, setBook] = useState([])

  const { isPending, error} = useFetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&key=AIzaSyAu2a9a18TPFSx-6Vo4RpK4AdpX8Hy8FBk`)


  // const getSearchResults = async () => {
  //     const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&key=AIzaSyAu2a9a18TPFSx-6Vo4RpK4AdpX8Hy8FBk`)
  //     const data = await response.json()

  //     setSearchResults(data.items)
  //   console.log(data.items)
  // }

//console.log(data)
 
        const getSearchResults = () => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&key=AIzaSyAu2a9a18TPFSx-6Vo4RpK4AdpX8Hy8FBk`)
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              setSearchResults(data.items);
            console.log(data.items)
            })
            .catch((err) => {
              console.log(err)
            });
            
            }
            
const handleKeyDown = (e)  => {

      if(e.key=== 'Enter') { 
        getSearchResults()
      } 
}

const handleSaveBook = (searchResults) => {
  if (book.indexOf(searchResults) !== -1) 
  return setBook([...book, searchResults])
  
 }
  
  return (
    <div>
      <div className='body'>
        <h1 className='name'>Search Books</h1>
        <input onKeyDown={handleKeyDown} onChange={(e) => setTerm(e.target.value)} type='search' placeholder='Search Book Name' />  
      </div>
      
      <main>
        {isPending && <div>Loading...</div>}
        {!error && <div>{error}</div>}
        {searchResults &&  <ul className='search-result'>
          {searchResults.map(each=> <SearchResults key ={each.id} item ={each} handleSaveBook = {handleSaveBook}/> )}
      </ul>}
    </main>
   </div>
  )
}
