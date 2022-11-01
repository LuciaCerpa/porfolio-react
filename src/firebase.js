import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHg6U46FiOWtOsQI0Yj-aMgBGFKT9EgI8",
  authDomain: "portafolio-react-4ee49.firebaseapp.com",
  projectId: "portafolio-react-4ee49",
  storageBucket: "portafolio-react-4ee49.appspot.com",
  messagingSenderId: "394324578168",
  appId: "1:394324578168:web:8546ffd1da759f986ac28d",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
