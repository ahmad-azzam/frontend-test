const { GET_USERS, LOADING_USERS } = require("./actionType")

const initialState = {
    users: [],
    loading: false
}

const reducerUser = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }
        case LOADING_USERS: {
            return {
                ...state,
                loading: action.payload
            }
        }
        default: return state
    }
}

export default reducerUser