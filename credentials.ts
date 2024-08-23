// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWDlRPE885w5NmXZuW-Eg3CQFLke1_jwI",
  authDomain: "solarsportapp-12431.firebaseapp.com",
  projectId: "solarsportapp-12431",
  storageBucket: "solarsportapp-12431.appspot.com",
  messagingSenderId: "19199565510",
  appId: "1:19199565510:web:d8581e8c59f85d3b37c1c7"
};



const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default auth; 