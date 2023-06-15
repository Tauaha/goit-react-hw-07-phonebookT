
import { filtersReducer } from "./filterSlice";

const { configureStore } = require("@reduxjs/toolkit");
const { contactsReducer } = require("./contactSlice");



  export const store = configureStore({
    reducer: {
   contacts: contactsReducer, 
    filter: filtersReducer,
      },

  })
  

