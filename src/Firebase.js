import firebase from "firebase";

const config = {
  apiKey: "AIzaSyA2aqnJvB-ceYkGqz0diepCDEeiMWiEnPQ",
  authDomain: "first-flight-a3b08.firebaseapp.com",
  databaseURL: "https://first-flight-a3b08.firebaseio.com",
  projectId: "first-flight-a3b08",
  storageBucket: "",
  messagingSenderId: "941546995805"
};
firebase.initializeApp(config);

export default firebase;
export const database = firebase.database();
