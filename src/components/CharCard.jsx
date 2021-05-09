import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css"

export default function CharCard ({id, name, status, image, species, gender, deleteChar}) {
    
const [favorite, setFavorite] = useState(false)

const handleFavorite = () => {
  setFavorite(!favorite)
}
    
    return (
    <div className="charCard">
        <img src={image} alt="character"/>
        <h2>{name}</h2>
        <p>{status}</p>
        <p>{species}</p>
        <p>{gender}</p>
        
        <div className="cardFooter">
        {
            favorite ? (
                <div onClick={()=> handleFavorite()}><i class="fas fa-heart fa-lg" style={{color:"red"}}></i></div>
            ) : (
                <div onClick={()=> handleFavorite()}><i class="far fa-heart fa-lg" style={{color:"red"}}></i></div>
            )
        }

        <div onClick={()=> deleteChar(id)}><i class="fas fa-trash-alt"></i></div>

        <Link to={`/characters/${id}`}>Voir plus</Link>
        </div>

    </div>
    )
}