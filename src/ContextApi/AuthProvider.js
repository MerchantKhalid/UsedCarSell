import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config'
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google
    const providerLogin =(provider)=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    // //FB
    // const facebookLogin =(provider)=>{
    //     setLoading(true)
    //     return signInWithPopup(auth, provider)
    // }

    // //GitHub
    // const gitLogin  =(provider)=>{
    //     setLoading(true)
    //     return signInWithPopup(auth, provider)
    // }


    //Createuser
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //signIn
    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //update user
    const updateUser = (userinfo) =>{
        setLoading(true);
        return updateProfile(auth.currentUser,userinfo)
    }


    //logout
    const logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    // forgot password
    const forgotPassword = (email)=>{
        setLoading(true)
        return sendPasswordResetEmail(auth,email)    
    }



    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user, 
        loading,
        createUser, 
        login,
        logout,
        providerLogin,
        forgotPassword,
        updateUser,
         
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

