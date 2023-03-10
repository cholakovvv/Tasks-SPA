import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA7NwHAda2jbABvnw_QMeNYTnpVOXuZo60",
    authDomain: "internship-project-5625e.firebaseapp.com",
    projectId: "internship-project-5625e",
    storageBucket: "internship-project-5625e.appspot.com",
    messagingSenderId: "291030268329",
    appId: "1:291030268329:web:6ffd4e89a026ae07a46cb8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);