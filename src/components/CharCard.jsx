import React, { useState } from "react";

export default function CharCard ({name, status, image, species, gender, active, handleChange}) {
    
const [favorite, setFavorite] = useState(false)

const handleFavorite = () => {
  setFavorite(!favorite)
}
    
    return (
    <div className="charCard">
        <img className="charImage" src={image} alt="character"/>
        <h2 className="charName">{name}</h2>
        <p className="charStatus">{status}</p>
        <p className="charSpecies">{species}</p>
        <p className="charGender">{gender}</p>

        {
            favorite ? (
                <div onClick={()=> handleFavorite()}><i class="fas fa-heart fa-lg" style={{color:"pink"}}></i></div>
            ) : (
                <div onClick={()=> handleFavorite()}><i class="far fa-heart fa-lg" style={{color:"pink"}}></i></div>
            )
        }

    </div>
    )
}