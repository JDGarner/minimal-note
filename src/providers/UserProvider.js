import React, { useState, createContext, useEffect } from "react";
import { onAuthStateChanged } from "../auth/firebase/authentication";

export const UserContext = createContext({ user: null });

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    onAuthStateChanged(async (userAuth) => {
      console.log(">>> onAuthStateChanged: ", userAuth);
      // TODO: get user document with userAuth?
      // const u = await getUser(userAuth);
      setUser(userAuth);
    });
  }, []);

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export default UserProvider;
