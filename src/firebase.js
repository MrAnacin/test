import { initializeApp } from "firebase/app";
import RegisterPage from './components/registartion/reg';
import LoginPage from './components/registartion/login';

const firebaseConfig = {
  apiKey: "AIzaSyB-QzO4rIQgzEashkMMdaZKaBbrvSg3Voc",
  authDomain: "fitness-pro-team5.firebaseapp.com",
  databaseURL: "https://fitness-pro-team5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fitness-pro-team5",
  storageBucket: "fitness-pro-team5.appspot.com",
  messagingSenderId: "35316317842",
  appId: "1:35316317842:web:5e369ceb8252e73e5f304b"
};

const app = initializeApp(firebaseConfig);

