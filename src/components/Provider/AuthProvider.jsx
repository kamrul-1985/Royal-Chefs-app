import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../Firebase/firebase-config';

export const AuthContext = createContext(null);
const auth = getAuth(app); 

const AuthProvider = ({children}) => {

      const [user, setUser] = useState([]);
      const [loading, setLoading] = useState(true);

     const createUser = (email, password) => {
      return  createUserWithEmailAndPassword(auth, email, password);
     };

     const signIn = (email, password) =>{
      return signInWithEmailAndPassword(auth, email, password);
     };
     const logOut = () =>{
      return signOut(auth);
     };
     
     useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, loggedUser => {
      console.log('on auth state changed user:', loggedUser);
      setUser(loggedUser);
      setLoading(false);
      })
      return() => {
            unSubscribe();
      }
     }, [])

      const authInfo = {
            user,
            createUser,
            signIn,
            logOut
      }


      return (
            <div>
                 <AuthContext.Provider value={authInfo} >
                  {children}
                 </AuthContext.Provider>
            </div>
      );
};

export default AuthProvider;