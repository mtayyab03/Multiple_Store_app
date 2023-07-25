import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvF61jOwb2JFkrxB_PGq3UODX9GZdVf_Y",
  authDomain: "bizhunt-e1412.firebaseapp.com",
  projectId: "bizhunt-e1412",
  storageBucket: "bizhunt-e1412.appspot.com",
  messagingSenderId: "600375611199",
  appId: "1:600375611199:web:bd16503b95ba7a0d334d8a",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export const auth = firebase.auth();

const storage = firebase.storage();

export { db, storage };
