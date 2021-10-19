import initializeAuthentication from "../FireBase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut, onAuthStateChanged, deleteUser } from "firebase/auth";
import { useEffect, useState } from "react";



initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState([]);
    const [error, setError] = useState('')
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);


    const signInEmailPassword = (email, password) => {
        setIsLoading(true);
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)


    }


    const signInUsingGoogle = () => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)

    }



    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                // An error happened.
                console.log(error)
            }).finally(() => setIsLoading(false));
    }

    const handleDeleteAccount = () => {
        // setIsLoading(true);
        const auth = getAuth();
        const user = auth.currentUser;

        deleteUser(user).then(() => {
            // User deleted.
        }).catch((error) => {
            // An error ocurred
            // ...

        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false);;
        });
    }, [auth])
    return {
        user,
        setUser,
        signInEmailPassword,
        signInUsingGoogle,
        handleDeleteAccount,
        logOut,
        setIsLoading,
        isLoading,
        setError,
        error
    }
};

export default useFirebase;