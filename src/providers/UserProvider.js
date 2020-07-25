import React, { useState, createContext, useEffect } from "react";
import { onAuthStateChanged } from "../auth/firebase/authentication";

export const UserContext = createContext({ user: null });

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    onAuthStateChanged(async (userAuth) => {
      console.log(">>> onAuthStateChanged: ", userAuth);
      // const u = await getUser(userAuth);
      // setUser(u);
    });
  }, []);

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export default UserProvider;
