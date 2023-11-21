import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDX-MxGZojncwRzZEKgz4FKzsmmUH0xPU4",
  authDomain: "cs340-6b07e.firebaseapp.com",
  projectId: "cs340-6b07e",
  storageBucket: "cs340-6b07e.appspot.com",
  messagingSenderId: "972591131749",
  appId: "1:972591131749:web:fd7db6ad4d203c8a442a8c"
};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { 
  db 
}
