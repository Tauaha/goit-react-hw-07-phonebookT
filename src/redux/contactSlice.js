import {createSlice} from "@reduxjs/toolkit";
import { addContact, contactsApi, deleteContact } from "./contactsApi";

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchContactFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = action.payload;
};

const addContactFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts.push(action.payload);
};

const deleteContactFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
  state.contacts.splice(index, 1);
};



const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(contactsApi.pending, pendingReducer)
      .addCase(contactsApi.fulfilled, fetchContactFulfilledReducer)
      .addCase(contactsApi.rejected, rejectedReducer)
      .addCase(addContact.pending, pendingReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(addContact.rejected, rejectedReducer)
      .addCase(deleteContact.pending, pendingReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
      .addCase(deleteContact.rejected, rejectedReducer)
 
});


export const contactsReducer = contactsSlice.reducer;
export const { addContacts, deleteContacts } = contactsSlice.actions;



