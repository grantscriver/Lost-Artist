import firebase from "firebase";
import "firebase/storage";

export const app = firebase.initializeApp({
  projectId: "lost-artist",
  appId: "1:738809046732:web:6e0b8ef756829e062e4469",
  storageBucket: "lost-artist.appspot.com",
  locationId: "us-central",
  apiKey: "AIzaSyB9SFBEwL-WfaxGUQvswFwxUZpb3VPtMvQ",
  authDomain: "lost-artist.firebaseapp.com",
  messagingSenderId: "738809046732",
  measurementId: "G-C64RRKTCPD",
});
