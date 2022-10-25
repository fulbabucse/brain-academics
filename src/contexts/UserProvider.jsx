import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInGoogleUser = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  const signInGithubUser = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const signInFacebookUser = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
    });
    return () => unSubscribe();
  }, []);

  const userInfo = {
    user,
    createUser,
    signInUser,
    signOutUser,
    signInGoogleUser,
    signInGithubUser,
    signInFacebookUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default UserProvider;
