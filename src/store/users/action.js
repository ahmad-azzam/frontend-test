import { api } from "../../apis"
import { GET_USERS, LOADING_USERS } from "./actionType"

const setUsers = (payload) => {
    return {
        type: GET_USERS,
        payload
    }
}

const setLoading = (payload) => {
    return {
        type: LOADING_USERS,
        payload
    }
}

export const getUsers = () => {
    return async (dispacth) => {
        try {
            dispacth(setLoading(true))
            const { data } = await api({
                method: 'get',
                url: 'users'
            })
            dispacth(setUsers(data))
        } catch (err) {
            console.log(err)
        } finally {
            dispacth(setLoading(false))
        }
    }
}

export const addUser = (payload) => {
    return async (dispacth) => {
        try {
            dispacth(setLoading(true))
            const { data } = await api({
                method: 'post',
                url: 'users',
                data: payload
            })
            if (data) {
                dispacth(getUsers())
                return true
            }
        } catch (err) {
            console.log(err)
        } finally {
            dispacth(setLoading(false))
        }
    }
}

export const editUser = (payload, id) => {
    return async (dispacth) => {
        try {
            dispacth(setLoading(true))
            const { data } = await api({
                method: 'put',
                url: `users/${id}`,
                data: payload
            })
            if (data) {
                dispacth(getUsers())
                return true
            }
        } catch (err) {
            console.log(err)
        } finally {
            dispacth(setLoading(false))
        }
    }
}

export const deleteUser = (id) => {
    return async (dispacth) => {
        try {
            dispacth(setLoading(true))
            await api({
                method: 'delete',
                url: `users/${id}`
            })
            dispacth(getUsers())
            return true
        } catch (err) {
            console.log(err)
        } finally {
            dispacth(setLoading(false))
        }
    }
}
