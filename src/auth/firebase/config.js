export const firebaseConfig = {
  apiKey: "AIzaSyDddpbJ8oGUruQ20djwEhMKyj9Sg_f9NQM",
  authDomain: "minimalnote-81d93.firebaseapp.com",
  databaseURL: "https://minimalnote-81d93.firebaseio.com",
  projectId: "minimalnote-81d93",
  storageBucket: "minimalnote-81d93.appspot.com",
  messagingSenderId: "691311707524",
  appId: "1:691311707524:web:14ce7c083992ffa0ab89d1",
  measurementId: "G-0DYRYF3VL4",
};

export const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be whitelisted in the Firebase Console.
  url: "http://localhost:8080/signInWithLink",
  // This must be true.
  handleCodeInApp: true,
  // iOS: {
  //   bundleId: "com.example.ios",
  // },
  // android: {
  //   packageName: "com.example.android",
  //   installApp: true,
  //   minimumVersion: "12",
  // },
  // dynamicLinkDomain: "example.page.link",
};
