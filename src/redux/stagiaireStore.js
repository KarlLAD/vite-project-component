import {  createSlice } from "@reduxjs/toolkit";

 export const stagiairesSlice = createSlice({
    name : "stagiaires",
    initialState : [{id:1, prenom:"Didier", note:0}],  // étét initial de mon stagiaire
    reducers : {              // l'ensemble qui agit sur le state du stagiaire 
        addStagiaire: (state, action) => { /*  ajouter un stagiaire */},
        editStagiaire: (state, action) => { /*  editer un stagiaire */},
        deleteStagiaire: (state, action) => { /*  del (effacer) un stagiaire */},

    }

})

