import React from 'react'
import { useSelector } from 'react-redux'

const AfficheCompteur = () => {
    const { compteur } = useSelector(state => state); // Récupère le compteur dans le state
    console.log("state", compteur);
    return (
        <div>AfficheCompteur : { compteur } </div>
    )
}

export default AfficheCompteur