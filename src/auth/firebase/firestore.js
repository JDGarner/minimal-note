import firebase from "firebase/app";
import { firestore } from "./authentication";

export const getUserByUID = async (uid) => {
  let doc = await firestore
    .collection("users")
    .doc(uid)
    .get()
    .catch((e) => console.log("Firestore error"));

  if (doc && doc.exists) {
    return doc.data();
  } else {
    return null;
  }
};

export const updateUserInFirestore = async (user) => {
  let doc = await firestore
    .collection("users")
    .doc(user.user.uid)
    .get()
    .catch((e) => console.log("Firestore error"));

  if (doc && doc.exists) {
    updateUserLastLoginTime(user);
  } else {
    addNewUserFromGoogle(user);
  }
};

const updateUserLastLoginTime = (user) => {
  const details = {
    lastLoginTime: firebase.firestore.FieldValue.serverTimestamp(),
  };

  firestore.collection("users").doc(user.user.uid).update(details);
};

const addNewUserFromGoogle = (user) => {
  const { profile } = user.additionalUserInfo;
  const details = {
    firstName: profile.given_name || "",
    lastName: profile.family_name || "",
    email: profile.email || "",
    createdTime: firebase.firestore.FieldValue.serverTimestamp(),
    lastLoginTime: firebase.firestore.FieldValue.serverTimestamp(),
  };

  firestore.collection("users").doc(user.user.uid).set(details);
};

export const addNewUserFromSignUp = async (user, { firstName, lastName }) => {
  const details = {
    firstName,
    lastName,
    email: user.email,
    createdTime: firebase.firestore.FieldValue.serverTimestamp(),
    lastLoginTime: firebase.firestore.FieldValue.serverTimestamp(),
  };

  firestore.collection("users").doc(user.uid).set(details);
};
