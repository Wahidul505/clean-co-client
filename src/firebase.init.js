// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBB2DFPXabQSxRJuI3wmUEwaofb-heQFVA",
    authDomain: "clean-co-b3ef2.firebaseapp.com",
    projectId: "clean-co-b3ef2",
    storageBucket: "clean-co-b3ef2.appspot.com",
    messagingSenderId: "1066699982324",
    appId: "1:1066699982324:web:c8cfbf7487e4dc949825a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;