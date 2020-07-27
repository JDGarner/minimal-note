import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { updateUserInFirestore, addNewUserFromSignUp } from "./firestore";
import { firebaseConfig, actionCodeSettings } from "./config";

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
    await auth.sendSignInLinkToEmail(email, actionCodeSettings);
    window.localStorage.setItem("emailToVerify", email);
    return result;
  } catch (error) {
    return { error: true, ...error };
  }
};

// export const sendVerificationEmail = async ({ email, password, firstName, lastName }) => {
//   try {
//     await auth.sendSignInLinkToEmail(email, actionCodeSettings);
//     addNewUserFromSignUp(result.user, { firstName, lastName });
//     window.localStorage.setItem("emailToVerify", email);
//     return { success: true };
//   } catch (error) {
//     return { error: true, ...error };
//   }
// };

export const isEmailLink = (link) => {
  return auth.isSignInWithEmailLink(link);
};

export const sendResetEmail = async (email) => {
  try {
    const result = await auth.sendPasswordResetEmail(email);
    return result;
  } catch (error) {
    return { error: true, ...error };
  }
};

export const signInWithEmailLink = async (email, link) => {
  try {
    const result = await auth.signInWithEmailLink(email, link);
    window.localStorage.removeItem("emailToVerify");
    return result;
  } catch (error) {
    return { error: true, ...error };
  }
};
