import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBE1E558AjTa2UU218uS56YNU58-MABEvw",
    authDomain: "irctc-reactproject.firebaseapp.com",
    projectId: "irctc-reactproject",
    storageBucket: "irctc-reactproject.appspot.com",
    messagingSenderId: "862332702423",
    appId: "1:862332702423:web:3527adb3587e087ac36a92",
    measurementId: "G-KQ8YWDPJJ6"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

  const auth = getAuth(app);
  export { auth };