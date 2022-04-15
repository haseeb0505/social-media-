export const loginStart = (userCredentials) => ({
    type: "Login_Start"
});
export const loginSuccess = (user) => ({
    type: "Login_Success",
    payload: user
});
export const loginError = (error) => ({
    type: "Login_Error",

});
export const Follow = (userId) => ({

    type: "Follow",
    payload: userId

});
export const unFollow = (userId) => ({

    type: "unFollow",
    payload: userId

});