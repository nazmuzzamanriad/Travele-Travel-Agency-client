import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initialAuthentication from "../Firebase/firebase.init";

initialAuthentication();


// providers
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const auth = getAuth();
    // user state-hold the users data
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [regError, setRegError] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [isLoading, setIsLoading] = useState(true);







    // Email 
    const emailInput = (e) => {

        setEmail(e.target.value)
    }

    // password value
    const passInput = (e) => {

        setPassword(e.target.value)

    }

    const displayUserName = (e) => {

        setDisplayName(e.target.value)


    }



    // registration submit button
    const registerButton = (e) => {

        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password, displayName)
            .then((result) => {
                // Signed in 
                console.log(result.user);
                setUser(result.user)
                // ...
            }).catch(error => {
                setRegError(error.message)
            })



    }

    // existing sign in method
    const existingUser = () => {



        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                console.log(user)
                // ...
            })
            .catch((error) => {

                setError(error.message);
            });
    }

    // google sign in methos
    const googleLogin = () => {
        setIsLoading(true);

        return signInWithPopup(auth, googleProvider)



    }

    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({})
        })
    }


    // user observer to hold the user when sign in and sign off a user
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])




    return {
        googleLogin, user, logOut, isLoading, emailInput, passInput, registerButton, displayUserName, existingUser, error, regError, setError, setIsLoading, email
    }


}

export default useFirebase;