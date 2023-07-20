import {  createSlice } from "@reduxjs/toolkit";

 export const compteurSlice = createSlice({
    name : "compteur",
    initialState : 0,  // étét initial de mon stagiaire
    reducers : {              // l'ensemble qui agit sur le state du stagiaire 
        plus: (state, action) => { /*  ajouter un stagiaire */},
        moins: (state, action) => { /*  editer un stagiaire */},
        
    }

})

