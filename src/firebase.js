import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { useCollection } from 'vuefire';
import { collection } from 'firebase/firestore';




// Your web app's Firebase configuration
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAzJiHVoBJfFY7Gjc_TgaCVp0L6FB49dT8",
  authDomain: "tienda-online-be3ea.firebaseapp.com",
  projectId: "tienda-online-be3ea",
  storageBucket: "tienda-online-be3ea.appspot.com",
  messagingSenderId: "149827716035",
  appId: "1:149827716035:web:f9e823fb6ed096e2387376"
});

// Initialize Firebase
export const db = getFirestore(firebaseApp);

// Usuarios
export const auth = getAuth(firebaseApp)

// productos
export var productos = useCollection(collection(db, 'notas'));
