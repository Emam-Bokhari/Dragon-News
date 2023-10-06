import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import auth from './../firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()

    // signup with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin with email and password
    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // signout
    const handleSignout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])





    const authInfo = { createUser, signin, handleSignout, user }
    return (
        <div>

            <AuthContext.Provider value={authInfo} >
                {children}
            </AuthContext.Provider>

        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;