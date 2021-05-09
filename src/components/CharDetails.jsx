import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./Card.css";
import "./Link.css";

export default function CharDetails () {

const [charDetails, setCharDetails] = useState([])
const [loading, setLoading] = useState(true)

const { id } = useParams()
console.log("from detail", id)

useEffect(() => {
    const getCharDetails = async () => {
        try {
            const charDetailsData = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            setCharDetails(charDetailsData.data)
        } catch(err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    getCharDetails()
}, [id])


    if(loading) return <div>Loading...</div>

    console.log(charDetails)

    return (
        <>
            <Link className="link" to="/">Revenir à la home</Link>
            <div className="charCard">
                <h1>{charDetails.id}</h1>
                <h1>Salut je suis {charDetails.name}</h1>
                <img alt={charDetails.name} src={charDetails.image} />
                <span>{charDetails.genre}</span>
                <span>{charDetails.species}</span>
                <span>{charDetails.alive}</span>
                <p>You can see me in those episodes :</p>
                <ul>
                    {
                    charDetails.episode.map((episode, index) => {
                    return (
                    <li key={index}>{episode}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}