import { configureStore, applyMiddleware } from "@reduxjs/toolkit"
import thunk from "redux-thunk";
import reducerUser from "./users/reducer";


const store = configureStore({
    reducer: {
        user: reducerUser,
    },
}, applyMiddleware(thunk))

export default store
