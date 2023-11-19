import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDoNgZgwUD4OLFzQav6Yi7roKcjPTj6q5k",
    authDomain: "comfy-project-e7e2c.firebaseapp.com",
    projectId: "comfy-project-e7e2c",
    storageBucket: "comfy-project-e7e2c.appspot.com",
    messagingSenderId: "279685198247",
    appId: "1:279685198247:web:40fa777c4ae3019bca4682"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()

const provider = new GoogleAuthProvider()

export const signUpWithGoogleAccount = async () => {
    return signInWithPopup(auth, provider)
        .then((result) => {
            return result
        })
        .catch((error) => {
            return error
        })
}

export const signOutFromAccount = () => {
    signOut(auth)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
}