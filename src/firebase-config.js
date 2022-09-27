import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCSzLilkHmKmLV0les2PNgke-tDtWBKcsA",
  authDomain: "tu-gerente-challenge-5066d.firebaseapp.com",
  projectId: "tu-gerente-challenge-5066d",
  storageBucket: "tu-gerente-challenge-5066d.appspot.com",
  messagingSenderId: "34765458521",
  appId: "1:34765458521:web:16f36af52d3f8255dcf548",
  measurementId: "G-EWKT19GRG0",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
