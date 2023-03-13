import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/firebase-config";
import { catsApi } from "../../api/catsApi";

import {
  addNewCat,
  setActiveCat,
  savingNewCat,
  setCats,
  clearCats,
  deleteCatByIdDoc,
  setCat,
} from "./catSlice";
import { loadCats } from "../../helpers";

export const getCat = () => {
  return async (dispatch) => {
    const { data } = await catsApi.get("");

    // establecer gato actual
    dispatch(setCat());
    dispatch(setActiveCat(data));
  };
};

export const saveNewCat = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewCat());

    const { activeCat } = getState().cats;

    const newCat = {
      id: "",
      url: "",
      title: "",
      description: "",
      date: new Date().getTime(),
    };

    activeCat.map(({ id, url }) => {
      newCat.id = id;
      newCat.url = url;
    });

    const newDoc = doc(collection(FirebaseDB, `cats`));
    await setDoc(newDoc, newCat);

    newCat.id = newDoc.id;

    dispatch(addNewCat(newCat));
  };
};

export const startLoadingCats = () => {
  return async (dispatch) => {
    // const { activeCat } = getState().cats;

    const cats = await loadCats();
    dispatch(setCats(cats));
  };
};

export const startSaveCat = () => {
  return async (dispatch, getState) => {
    const { activeCat } = getState().cats;

    const { id, idDoc, url, title, description, date } = activeCat;
    const newCat = {
      id,
      idDoc,
      url,
      title,
      description,
      date,
    };

    const catToFirestore = { ...newCat };
    delete catToFirestore.idDoc;
    delete catToFirestore.id;
    delete catToFirestore.date;

    // console.log(catToFirestore);

    const docRef = doc(FirebaseDB, `cats/${idDoc}`);
    await setDoc(docRef, catToFirestore, { merge: true });

    dispatch(startLoadingCats());
  };
};

export const startClear = () => {
  return async (dispatch) => {
    dispatch(clearCats());
  };
};

export const startDeletingCat = () => {
  return async (dispatch, getState) => {
    const { activeCat } = getState().cats;

    const { idDoc } = activeCat;

    const docRef = doc(FirebaseDB, `cats/${idDoc}`);
    await deleteDoc(docRef);

    dispatch(deleteCatByIdDoc(idDoc));
    dispatch(startLoadingCats());
  };
};
