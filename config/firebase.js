import firebase from 'firebase/app';
import 'firebase/auth';
import Constants from 'expo-constants';
import 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDPZWRuVcnb81L4Z2Jgj2VMVmRYgYxen4U",
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId
};

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore()


export default Firebase; db;