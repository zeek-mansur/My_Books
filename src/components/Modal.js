import React from 'react'
import './Modal.css'

export default function Modal({show,item,onClose}) {

    if(!show)
    {
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let isbnType =  item.volumeInfo.industryIdentifiers[0].type ;
    let isbnIdentifier = item.volumeInfo.industryIdentifiers[0].identifier;
  return (
    <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}>x</button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            <h1>{item.volumeInfo.title}</h1>
                            <h3>{item.volumeInfo.authors}</h3>
                            <h4>{item.volumeInfo.publisher}<span> {item.volumeInfo.publishedDate}</span></h4><br/>
                            <h4>{isbnType}: {isbnIdentifier}</h4>
                            <a href={item.volumeInfo.previewLink}><button>More</button></a>
                        </div>
                    </div>
                    <h4 className="description">{item.volumeInfo.description}</h4>
                </div>
            </div>

  )
}
