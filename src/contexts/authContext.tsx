"use client";

import React, { useState, createContext, useEffect } from 'react';
import AuthContextProps from '@/interfaces/AuthContextProps';

export const GlobalContext = React.createContext<AuthContextProps>({
    user: null,
    setUser: () => { },
    isLoading: true
});

export const AuthContextProvider = (props: any) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user && user != "undefined") {
            const userDetails = JSON.parse(user);
            if (userDetails._id) {
                setCurrentUser(userDetails);
            }
        }
        setLoading(false)
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                user: currentUser,
                setUser: setCurrentUser,
                isLoading: loading
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};
