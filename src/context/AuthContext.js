import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
    let [currentUser, setUser] = useState()

    const value = {
        currentUser,
        setUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}