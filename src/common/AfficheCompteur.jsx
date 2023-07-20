import React from 'react'
import { useSelector } from 'react-redux'

const AfficheCompteur = () => {
    const { compteur } = useSelector(state=> state);  // récupération de la valeur dans le store

  return (
    <div>AfficheCompteur : { compteur }</div>
  )
}

export default AfficheCompteur