// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDKTKcTvWbU53ytG4J_YTeALECm_8-jDOc',
  authDomain: 'twitter-clone-e2027.firebaseapp.com',
  projectId: 'twitter-clone-e2027',
  storageBucket: 'twitter-clone-e2027.appspot.com',
  messagingSenderId: '249337779650',
  appId: '1:249337779650:web:932c961e98790e932cb25b',
  measurementId: 'G-0TL0GJYSBN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default getFirestore();


