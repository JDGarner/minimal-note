import React, { useState, createContext, useEffect } from "react";
import { onAuthStateChanged } from "../auth/firebase/authentication";
import { getUserByUID } from "../auth/firebase/firestore";

export const UserContext = createContext({ user: null });

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(async (userAuth) => {
      if (userAuth && userAuth.uid) {
        const userFromDb = await getUserByUID(userAuth.uid);
        if (userFromDb) {
          console.log("User logged in: ", userFromDb);
          setUser(userFromDb);
        }
      } else {
        setUser(null);
      }
    });
  }, []);

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export default UserProvider;
