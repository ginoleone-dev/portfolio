// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCxcHXGjeoe2Ngdtqac4JBCpUnmPZ34lzc',
  authDomain: 'portfolio-64c98.firebaseapp.com',
  projectId: 'portfolio-64c98',
  storageBucket: 'portfolio-64c98.appspot.com',
  messagingSenderId: '72010189886',
  appId: '1:72010189886:web:db009aa163cd98137bd56f',
  measurementId: 'G-F0MYLLDR1Y',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
