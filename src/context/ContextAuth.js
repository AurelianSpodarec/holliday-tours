import React, { createContext, useEffect, useState } from 'react';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState();

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