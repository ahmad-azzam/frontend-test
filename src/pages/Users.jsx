import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getUsers } from "../store/users/action"

const Users = () => {
    const dispacth = useDispatch()
    const { users } = useSelector(state => state.user)
    console.log(users)

    useEffect(() => {
        dispacth(getUsers())
    }, [])
    return (
        <>
            This is Users Page
        </>
    )
}

export default Users