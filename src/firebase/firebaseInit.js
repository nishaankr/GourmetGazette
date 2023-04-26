import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC89CrknD3LmR7_fwgzJ5rG9Zr_w6vMr1s",
  authDomain: "foodblog-d88ec.firebaseapp.com",
  projectId: "foodblog-d88ec",
  storageBucket: "foodblog-d88ec.appspot.com",
  messagingSenderId: "873178481440",
  appId: "1:873178481440:web:cec9a06290a5b3543e4d45",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
