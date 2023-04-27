import React, { useState } from 'react'
import Modal from './Modal';
import './SearchResults.css'

export default function SearchResults(props) {

const [Item,setItem]=useState();
const [show,setShow]=useState(false)
const {item} = props
let author = item.volumeInfo.authors;
let imageLink = item.volumeInfo.imageLinks.thumbnail;
let title = item.volumeInfo.subtitle;
//console.log(bookDetails)

  return (
    <div>
      <li className='result'>
      <img src={imageLink} alt = "title" onClick={()=>{setShow(true);setItem(item)}}/>
          <h3>Title: {title}</h3>
          <p>Author:{author}</p>
      </li>
    <Modal show={show} item={Item} onClose={()=>setShow(false)}/>
    </div>
  )
}
