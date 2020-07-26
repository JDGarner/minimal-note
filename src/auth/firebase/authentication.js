import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { updateUserInFirestore, addNewUserFromSignUp } from "./firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDddpbJ8oGUruQ20djwEhMKyj9Sg_f9NQM",
  authDomain: "minimalnote-81d93.firebaseapp.com",
  databaseURL: "https://minimalnote-81d93.firebaseio.com",
  projectId: "minimalnote-81d93",
  storageBucket: "minimalnote-81d93.appspot.com",
  messagingSenderId: "691311707524",
  appId: "1:691311707524:web:14ce7c083992ffa0ab89d1",
  measurementId: "G-0DYRYF3VL4",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const signIn = async ({ email, password }) => {
  try {
    const result = await auth.signInWithEmailAndPassword(email, password);
    return result;
  } catch (error) {
    return { error: true, ...error };
  }
};

export const signInWithGoogle = async () => {
  try {
    const result = await auth.signInWithPopup(googleAuthProvider);
    if (result && result.user && result.user.uid) {
      updateUserInFirestore(result);
    }
    return result;
  } catch (error) {
    console.log("Sign in with Google error");
    return { error: true, ...error };
  }
};

export const signOut = () => {
  auth.signOut();
};

export const onAuthStateChanged = (callback) => {
  auth.onAuthStateChanged((authState) => callback(authState));
};

export const signUpUser = async ({ email, password, firstName, lastName }) => {
  try {
    const result = await auth.createUserWithEmailAndPassword(email, password);
    addNewUserFromSignUp(result.user, { firstName, lastName });
    return result;
  } catch (error) {
    return { error: true, ...error };
  }
};

export const sendResetEmail = async (email) => {
  try {
    const result = await auth.sendPasswordResetEmail(email);
    return result;
  } catch (error) {
    return { error: true, ...error };
  }
};
