import { configureStore } from "@reduxjs/toolkit";


import { stagiairesSlice } from "./stagiaireStore";
import { compteurSlice } from "./compteurStore";


export const store = configureStore({  // configuration du store
    reducer : {

        stagiaires : stagiairesSlice.reducer,
        compteur: compteurSlice.reducer ,
            },

});