// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth,signInWithPopup} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOOAQvKJel0PHraDKW06qltHqcfntVjx8",
  authDomain: "myfirst-reactproject.firebaseapp.com",
  projectId: "myfirst-reactproject",
  storageBucket: "myfirst-reactproject.appspot.com",
  messagingSenderId: "1004666270467",
  appId: "1:1004666270467:web:7028c421c71cedc2f32f36",
  measurementId: "G-1FSWQHQ7DR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const SignInWithGoogle = () =>{
  signInWithPopup(auth, provider)
  .then((result)=>{
    console.log(result);
    const name = result.user.displayName;
    const email = result.user.email;
    // const profilePic= result.user.photoURL;

    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    // localStorage.setItem("profilePic",profilePic);
  })
  .catch((error)=>{
    console.log(error);
  })


};



