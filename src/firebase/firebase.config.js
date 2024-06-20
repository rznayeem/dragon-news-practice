// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBy3iyhXR0oudxdm9atpjf6hQMd_c661FM',
  authDomain: 'dragon-news-practice-cc83f.firebaseapp.com',
  projectId: 'dragon-news-practice-cc83f',
  storageBucket: 'dragon-news-practice-cc83f.appspot.com',
  messagingSenderId: '84415795538',
  appId: '1:84415795538:web:2de70b6ea46f2d08a3ea8b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
