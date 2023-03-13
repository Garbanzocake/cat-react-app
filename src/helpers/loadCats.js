import { collection,  getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/firebase-config"

 export const loadCats= async()=>{

    const collectionRef= collection(FirebaseDB,`cats`);
    const docs= await getDocs(collectionRef);

    const cats=[];
    docs.forEach(doc=>{
            cats.push({idDoc:doc.id,...doc.data()});
    });


    return cats;

 }