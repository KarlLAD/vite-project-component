import React ,{useEffect, useState} from 'react'

import { useSelector } from 'react-redux';


// const stagiaires = [
//     { id:1 , prenom: 'Betsy' , note: 10},
//     { id:2 , prenom: 'Didier', note: 10},
//     { id:3 , prenom: 'Yannick', note: 2},
//     { id:4 , prenom: 'Hervé',  note: 0},
//     { id:5 , prenom: 'Ludmilla', note: 10},
//     { id:6 , prenom: 'Steeven' ,note: 20},
//     { id:7 , prenom: 'Cléry' ,note: 3},

// ];

const StagiaireItem = ({stagiaire}) => { 
    return  ( <tr className="bg-base-200">
    <th>1</th>
    <td>Cy Ganderton</td>
    <td>Quality Control Specialist</td>
    <td><button className="btn btn-circle btn-outline">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button></td>
  </tr>)
 }

const ListItem = () => {

    
    // const [allStagiaires, setAllStagiaires] = useState(stagiaires) ;

      const { stagiaires } = useSelector(state=> state) ;  // déstructuration 
      console.log("state", stagiaires);
    

 

  return (
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Prenom </th>
        <th>Note</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
      {stagiaires.map(item => 

            <StagiaireItem key={item.id} stagiaire={item}/>


            )}
     
    </tbody>
  </table>
</div>

  )
}

export default ListItem