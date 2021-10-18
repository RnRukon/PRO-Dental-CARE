import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

// import useFoodDetails from '../Hooks/useFoodDetails';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const allContext = useFirebase();
    // const i = useFoodDetails()

    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;