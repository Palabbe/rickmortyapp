import React, { useEffect, useState } from "react";
import axios from "axios";
import CharCard from "./CharCard";

export default function CharsList ({active, handleChange}) {
const [charsList, setCharsList] = useState([])
const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getCharsList = async () => {
            try {
                const charsList = await axios.get('https://rickandmortyapi.com/api/character')
                setCharsList(charsList.data.results)
            } catch(err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        getCharsList()
    }, [loading])

    console.log(charsList)

    if(loading) return <div>Loading...</div>
    
    return (
        <div>            
            {
                active ? (
                    <button onClick={()=> handleChange()}>Clicked</button>
                ) : (
                    <button onClick={()=> handleChange()}>Click me</button>
                )
            }
            {
              ((charsList.length) && (charsList !== 0)) && (
              charsList.map((char) => {
                  return (
                      <div>
                          <CharCard
                          key={char.id}
                          name={char.name}
                          status={char.status}
                          image={char.image}
                          species={char.species}
                          gender={char.gender}
                          />
                      </div>
                  )
                })
              )  
            }
            
            
        </div>
    )
}