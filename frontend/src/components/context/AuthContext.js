/* eslint-disable no-unused-vars */
import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';
const INITIAL_STATE = {
    user: {
        _id: "61fba8561fcadcc9d844013b",
        username: "jan",
        email: "jan@example.com",
        password: "$2b$10$lTadvYdrOaYQ4b.KwosfFudSDhf7MF9VIlsImLF9qn0nR9etMj6kG",
        profilePicture: "person/2.jpeg",


        followers: [],

        following: []
    },
    isFetching: false,
    error: false
}
export const AuthContext = createContext(INITIAL_STATE);
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
    return (

        <AuthContext.Provider value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}