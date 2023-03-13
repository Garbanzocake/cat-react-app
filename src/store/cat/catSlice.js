import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({
  name: "cats",
  initialState: {
    page: 0,
    isSaving: false,
    catsLibrary: [],
    activeCat: [],
    isLoading: true,
  },
  reducers: {
    addNewCat: (state, action) => {
      state.catsLibrary.push(action.payload);
      state.isSaving = true;
    },
    setCat: (state) => {
      state.isSaving = false;
    },
    setActiveCat: (state, action) => {
      state.isLoading = false;
      state.activeCat = action.payload;
    },

    setCats: (state, action) => {
      state.catsLibrary = action.payload;
    },
    savingNewCat: (state, action) => {
      state.isSaving = true;
    },
    clearCats: (state) => {
      state.isSaving = false;
      state.isLoading = true;
      state.catsLibrary = [];
      state.activeCat = [];
    },
    deleteCatByIdDoc: (state, action) => {
      state.activeCat = [];
      state.catsLibrary = state.catsLibrary.filter(cat => cat.idDoc !== action.payload)
      
    },
  },
});

export const {
  addNewCat,
  clearCats,
  deleteCatByIdDoc,
  savingNewCat,
  setActiveCat,
  setCats,
  setCat,
  } = catSlice.actions;
