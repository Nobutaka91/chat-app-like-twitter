import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCV_a-vuRRotBobWsD9sc3zF2jX3OxofLI',
  authDomain: 'twitter-clone-udemy-c7b1d.firebaseapp.com',
  projectId: 'twitter-clone-udemy-c7b1d',
  storageBucket: 'twitter-clone-udemy-c7b1d.appspot.com',
  messagingSenderId: '972965719247',
  appId: '1:972965719247:web:60a6720ab8878343369bba',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
