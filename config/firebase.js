import firebase from 'firebase/app';
import 'firebase/auth';
import Constants from 'expo-constants';
import 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDPZWRuVcnb81L4Z2Jgj2VMVmRYgYxen4U",
  authDomain: "summerapp-c3722.firebaseapp.com",
  projectId: "summerapp-c3722",
  storageBucket:"summerapp-c3722.appspot.com",
  messagingSenderId: "1019891528438",
  appId: "1:1019891528438:web:a9ec2f91038e275623b2d7",
  measurementId: "G-B656LVH2ZC"
};

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore()
db.settings({timestampsInSnapshots: true});  

export default Firebase;