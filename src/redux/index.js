import { configureStore } from "@reduxjs/toolkit";


import { stagiairesSlice } from "./stagiaireStore";
import { compteurSlice } from "./compteurStore";

// actions creator
export const { plus, moins, reset } = compteurSlice.actions ;
export const { addStagiaire, editStagiaire , deleteStagiaire} =stagiairesSlice.actions ;


export const store = configureStore({  // configuration du store
    reducer : {

        stagiaires : stagiairesSlice.reducer,
        compteur: compteurSlice.reducer ,
            },

});