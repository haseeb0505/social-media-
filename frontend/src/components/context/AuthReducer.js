const AuthReducer = (state, action) => {

    switch (action.type) {

        case "Login_Start":
            return {
                user: null,
                isFetching: true,
                error: false
            };
        case "Login_Sucess":
            return {
                user: action.payload,
                isFetching: true,
                error: false
            };
        case "Login_Error":
            return {
                user: null,
                isFetching: false,
                error: true
            };

        case "Follow":
            return {
                ...state,
                user: {
                    ...state.user,
                    following: [...state.user.following, action.payload]
                }
            };
        case "unFollow":
            return {
                ...state,
                user: {
                    ...state.user,
                    following: state.user.following.filter((following) => following !== action.payload)
                }
            };
        default:
            return state;
    }
}

export default AuthReducer;