import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { updateUserInFirestore } from "./firestore";

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

export const signIn = ({ email, password }) => {
  auth.signInWithEmailAndPassword(email, password).catch((error) => {
    console.error("Error signing in with password and email", error);
    return "Error signing in with password and email!";
  });
};

export const signInWithGoogle = async () => {
  let data = null;
  let error = null;

  let result = await auth.signInWithPopup(googleAuthProvider).catch((e) => {
    error = "Sign in with Google failed";
  });

  if (result && result.user && result.user.uid) {
    data = result;
    updateUserInFirestore(result);
  }

  return { data, error };
};

export const signOut = () => {
  auth.signOut();
};

export const onAuthStateChanged = (callback) => {
  auth.onAuthStateChanged((authState) => callback(authState));
};

// TODO:
export const createUser = async ({ email, password, firstName, lastName }) => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    console.log(">>> Created user: ", user);
    // generateUserDocument(user, { firstName, lastName });
  } catch (error) {
    console.log(">>> error: ", error);
  }
};
