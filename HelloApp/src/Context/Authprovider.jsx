import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebasae/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider

const Authprovider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    //createuser
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    //updateProfile
    const updateUserProfile = (name, photo) => {
        setLoader(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    //googlesignin
    const googleSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }


    const signin = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
      }

    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {
        //this part will execute once the component is mounted.
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        })

        return () => {
            //this part will execute once the component is unmounted.
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        googleSignIn,
        updateUserProfile,
        logOut,
        signin,
        setLoader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;