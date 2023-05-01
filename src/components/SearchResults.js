import React, { useState } from 'react'
import Modal from './Modal';
import './SearchResults.css'

export default function SearchResults(props) {

const [Item,setItem]=useState();
const [show,setShow]=useState(false)
const {item, handleSaveBook} = props
let author = item.volumeInfo.authors;
let title = item.volumeInfo.title;
let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <div>
      <li className='result'>
      <img src={thumbnail} alt = "title" onClick={()=>{setShow(true);setItem(item)}}/>
          <h3>Title: {title}</h3>
          <p>Author:{author}</p>
          <button onClick={() => handleSaveBook()}>Save Book</button>
      </li>
    <Modal show={show} item={Item} onClose={()=>setShow(false)}/>
    </div>
  )
}
