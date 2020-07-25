import firebase from "firebase/app";
import { firestore } from "./authentication";

export const updateUserInFirestore = async (user) => {
  let doc = await firestore
    .collection("users")
    .doc(user.user.uid)
    .get()
    .catch((e) => console.log("Firestore error"));

  if (doc && doc.exists) {
    updateUserLastLoginTime(user);
  } else {
    addNewUserToFirestore(user);
  }
};

const updateUserLastLoginTime = (user) => {
  const details = {
    lastLoginTime: firebase.firestore.FieldValue.serverTimestamp(),
  };

  firestore.collection("users").doc(user.user.uid).update(details);
};

const addNewUserToFirestore = (user) => {
  const { profile } = user.additionalUserInfo;
  const details = {
    firstName: profile.given_name || "",
    lastName: profile.family_name || "",
    fullName: profile.name || "",
    email: profile.email || "",
    createdDtm: firebase.firestore.FieldValue.serverTimestamp(),
    lastLoginTime: firebase.firestore.FieldValue.serverTimestamp(),
  };

  firestore.collection("users").doc(user.user.uid).set(details);
};
