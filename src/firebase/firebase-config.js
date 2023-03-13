import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyCXvbBlz-d3HNodNz9aapPc2UrEDHBO1-A",
  authDomain: "cat-react-app.firebaseapp.com",
  projectId: "cat-react-app",
  storageBucket: "cat-react-app.appspot.com",
  messagingSenderId: "129463658579",
  appId: "1:129463658579:web:ded13606e9ab9a50ed3ea6"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);


// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey:           process.env.REACT_APP_APIKEY,
//     appId:            process.env.REACT_APP_APPID,
//     authDomain:       process.env.REACT_APP_AUTHDOMAIN,
//     // measurementId:    process.env.REACT_APP_MEASUREMENTID,
//     messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID,
//     projectId:        process.env.REACT_APP_PROJECTID,
//     storageBucket:    process.env.REACT_APP_STORAGEBUCKET,
// };
