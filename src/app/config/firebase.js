import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPLk0BGR87z-w_e53WUxEDt6slA0dThGY",
  authDomain: "revents-221722.firebaseapp.com",
  databaseURL: "https://revents-221722.firebaseio.com",
  projectId: "revents-221722",
  storageBucket: "revents-221722.appspot.com",
  messagingSenderId: "1016171479517"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export default firebase;
