import {  createSlice } from "@reduxjs/toolkit";

 export const stagiairesSlice = createSlice({
    name : "stagiaires",
    initialState : [{id:1, prenom:"Didier", note:0}],  // étét initial de mon stagiaire
    reducers : {              // l'ensemble qui agit sur le state du stagiaire 
        addStagiaire: (state, action) => { 
            /*  ajouter un stagiaire */

            console.log( " action:", action.payload);

            return [  ...state , action.payload] ;
                        },  //end addStagiaire
        editStagiaire: (state, action) => {
             /*  editer un stagiaire */

                            }, /// end editStagiaire
        deleteStagiaire: (state, action) => {
             /*  del (effacer) un stagiaire */

            return state.filter(item=>item.id != action.payload ); //je retourne le state précédent filtré de l'élément de l'id de lélément que je souhaite supprimer


                    }, // end deleteStagiaire

    }

})

