import { createSelector } from "@reduxjs/toolkit"

export const selectContacts =(state) => state.contacts.contacts


export const selectorIsLoading = state => state.contacts.isLoading;

export const selectorError = state => state.contacts.error;

export const selectFilter = (state) => state.filter

export const selectVisibleContacts = createSelector(
    [ selectContacts, selectFilter],
    (contacts, filter) => {
     return contacts.filter((contact) => 
     contact.name.toLowerCase()
            .includes(filter.toLowerCase()))
            
    }
  )