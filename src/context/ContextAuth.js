import React, { createContext, useEffect, useState } from 'react';
import firebase from './../firebase';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState(
        {
            user: {},
            isAuthenticated: false
        }
    );

    function onAuthStateChange(callback) {
        // firebase.auth().onAuthStateChanged(user => {
        //     if (user) {
        //         callback({ isAuthenticated: true, user });
        //     } else {
        //         callback({ isAuthenticated: false });
        //     }
        // });
    }

    useEffect(() => {
        //code
    }, [])

    return (
        <AuthContext.Provider value={{ authData }}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider
}