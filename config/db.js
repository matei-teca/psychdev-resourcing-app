import firebase from 'firebase/app'
import 'firebase/firestore';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDPZWRuVcnb81L4Z2Jgj2VMVmRYgYxen4U",
  authDomain: "summerapp-c3722.firebaseapp.com",
  projectId: "summerapp-c3722",
  storageBucket:"summerapp-c3722.appspot.com",
  messagingSenderId: "1019891528438",
  appId: "1:1019891528438:web:a9ec2f91038e275623b2d7",
  measurementId: "G-B656LVH2ZC"
};

firebase.initializeApp(config);


const db = firebase.firestore()

export default db;