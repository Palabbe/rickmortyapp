import React from "react";
import { Link } from "react-router-dom";
import "./Link.css"

export default function Home () {
    return (
        <div>
        <h1>Bienvenue sur le site de Rick et Morty !</h1>
        <Link className="link" to="/characters">Voir tous les personnages</Link>
        </div>
    )
}