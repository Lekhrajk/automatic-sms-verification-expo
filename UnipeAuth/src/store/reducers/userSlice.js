import { createSlice } from "@reduxjs/toolkit";
import { showMessage } from "react-native-flash-message";

const initialState = {
    userData: null,
    token: null,
    isAuthenticated: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        // add user details
        addUser: (state, action) => {
            return { ...state, userData: action.payload };
        },

        // remove user data and reset initial state
        removeUser: () => {
            showMessage({
                message: "Account deleted!",
                type: "danger",
                icon: "auto",
            });
            return { isAuthenticated: false, token: null, userData: null };
        },

        // update user data
        updateUser: (state, action) => {
            return { ...state, userData: action.payload };
        },

        // add token
        addToken: (state, action) => {
            return { ...state, token: action.payload };
        },

        // check user is authenticated or not
        checkAuthenticated: (state) => {
            const { token, userData } = state;
            if (token && userData?.token !== null && userData !== null) {
                return { ...state, isAuthenticated: true };
            }
            return { ...state, isAuthenticated: false };
        },

        // logout user, remove token
        logOut: (state) => {
            showMessage({
                message: "Logged out!",
                type: "info",
                icon: "auto",
            });
            return { ...state, isAuthenticated: false, token: null };
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    addUser,
    removeUser,
    logOut,
    checkAuthenticated,
    addToken,
    updateUser,
} = userSlice.actions;

// We export the reducer function so that it can be added to the store
export default userSlice.reducer;
