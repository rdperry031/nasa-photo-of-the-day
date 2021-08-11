import React from "react";

export default function Photo(props){
const {photo} = props

return(
    <div>
        
      
        <h2>{photo.title}</h2>
    
    <p>{photo.date}</p>
        <img src={photo.url} alt = {photo.title} />     
    
        <figcaption class = 'credit'>Credit and copyright:{photo.copyright}</figcaption>
        <figcaption class = 'explanation'>{photo.explanation}</figcaption>
    
   
        
    </div>
)
}