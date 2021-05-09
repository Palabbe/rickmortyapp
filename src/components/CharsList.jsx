import React, { useEffect, useState } from "react";
import axios from "axios";
import CharCard from "./CharCard";
import "./CharsList.css";

export default function CharsList () {
const [active, setActive] = useState(false)
const handleChange = () => {
      setActive(!active)
    }
const [charsList, setCharsList] = useState([])
const [loading, setLoading] = useState(true)

const deleteChar = (id) => {
    const newListChars = charsList.filter((char) => char.id !== id)
    setCharsList(newListChars)
}

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
        <>
        {
            active ? (
                <button className="buttonDeadOnly" onClick={()=> handleChange()}>Return to whole list</button>
            ) : (
                <button className="buttonDeadOnly" onClick={()=> handleChange()}>Show dead only</button>
            )
        }
        <div className="charsList">            

            {
              ((charsList.length) && (charsList !== 0)) && active ? (
                charsList.filter((char) => char.status === "Dead")
                .map((char) => {
                  return (
                      <div>
                          <CharCard
                          key={char.id}
                          id={char.id}
                          name={char.name}
                          status={char.status}
                          image={char.image}
                          species={char.species}
                          gender={char.gender}
                          deleteChar={deleteChar}
                          />
                      </div>
                  )
                })
              ) : (
                  charsList.map((char) => {
                    return (
                        <div>
                            <CharCard
                            key={char.id}
                            id={char.id}
                            name={char.name}
                            status={char.status}
                            image={char.image}
                            species={char.species}
                            gender={char.gender}
                            deleteChar={deleteChar}
                            />
                        </div>
                    )  
                })
            )
        }
            
    </div>
    </>
)
}