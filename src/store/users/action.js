import { api } from "../../apis"
import { GET_USERS } from "./actionType"

const setUsers = (payload) => {
    return {
        type: GET_USERS,
        payload
    }
}

export const getUsers = () => {
    return async (dispacth) => {
        try {
            const { data } = await api({
                method: 'get',
                url: 'users'
            })
            dispacth(setUsers(data))
        } catch (err) {
            console.log(err)
        }
    }
}