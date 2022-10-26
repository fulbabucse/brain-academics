import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInGoogleUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signInGithubUser = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const signInFacebookUser = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const updatesUserProfile = (updatesInfo) => {
    return updateProfile(auth.currentUser, updatesInfo);
  };

  const changeUserPassword = (newPassword) => {
    return updatePassword(auth.currentUser, newPassword);
  };

  const deleteUserAccount = () => {
    return deleteUser(auth.currentUser);
  };

  const verifyUserEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const userPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const userInfo = {
    user,
    loading,
    auth,
    createUser,
    signInUser,
    signOutUser,
    verifyUserEmail,
    userPasswordReset,
    signInGoogleUser,
    signInGithubUser,
    deleteUserAccount,
    signInFacebookUser,
    updatesUserProfile,
    changeUserPassword,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default UserProvider;
