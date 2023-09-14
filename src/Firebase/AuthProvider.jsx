import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "./firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // login with email and password function
  const login = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // create user with email and password function
  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user data 
  const updateUserProfile = (name, photo)=>{
    return updateProfile(auth.currentUser, {
      displayName:name, photoURL: photo
    })
  }

  //   user log out function
  const logOut =()=>{
    setLoader(true)
    return signOut(auth)
  }

  //google login
  const googleLogin = ()=>{
    setLoader(true)
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('user email', currentUser?.email);

      if(currentUser){
        axios.post('http://localhost:5000/jwt', {email : currentUser?.email})
        .then(data=>{
          localStorage.setItem('access-token', data.data.token)
          setLoader(false);
        })
      }
      else{
        localStorage.removeItem('access-token')
        setLoader(false);
      }

    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loader,
    createUser,
    login,
    logOut,
    updateUserProfile,
    googleLogin
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
