import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthConext";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, SetLoading] = useState(true);

  const signUpUser = (email, password) => {
    SetLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    SetLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    SetLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const updateUser = (profile) =>{
    return updateProfile(auth.currentUser, profile)
  }
  const signOutUser = ()=>{
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      SetLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    signUpUser,
    updateUser,
    signInUser,
    googleSignIn,
    signOutUser,
    user,
    loading
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
