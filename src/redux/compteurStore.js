import {  createSlice } from "@reduxjs/toolkit";

 export const compteurSlice = createSlice({
    name : "compteur",
    initialState : 0,  // étét initial de mon stagiaire
    reducers : {              // l'ensemble qui agit sur le state du stagiaire 
        plus: (state, action) => { return state + 1 ; /*  ajouter un stagiaire */},
        moins: (state, action) => { return state > 1 ? state - 1: 0 ; /* si state > 1 je décrémente sinon je retourne 0*/},
        reset: (state, action) => { return  0  ; /* reset */},
        
    }

})

