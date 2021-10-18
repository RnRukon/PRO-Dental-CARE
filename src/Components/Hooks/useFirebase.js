import initializeAuthentication from "../FireBase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut, onAuthStateChanged, deleteUser } from "firebase/auth";
import { useEffect, useState } from "react";



initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState([]);
    const [error, setError] = useState('')
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);



    // const registerUser = (email, password) => {
    //     const auth = getAuth();
    //     // console.log(email, password)
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in 
    //             const user = userCredential.user;
    //             console.log(user)

    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         });


    // }

    // const setUserName = (name) => {

    //     const auth = getAuth();
    //     updateProfile(auth.currentUser, { displayName: name })
    //         .then((result) => {
    //             // Profile updated!
    //             // ...
    //         }).catch((error) => {
    //             // An error occurred
    //             // ...
    //             console.log(error)
    //         });
    //     console.log(name)
    // }


    const signInEmailPassword = (email, password) => {
        setIsLoading(true);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false))

        console.log(email, password)

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
            console.log(error)
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
        // setUserName,
        // registerUser,
        user,
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