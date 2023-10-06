import { createContext } from "react";
import PropTypes from "prop-types"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import auth from './../firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin with email and password
    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    const authInfo = { createUser, signin }
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