import { Table } from "flowbite-react"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Layout from "../components/Layout"
import ModalSection from "../components/ModalSection"
import { getUsers } from "../store/users/action"

const Users = () => {
    const dispacth = useDispatch()
    const { users } = useSelector(state => state.user)

    const [showModal, setShowModal] = useState(false)
    const [type, setType] = useState("add")
    const [user, setUser] = useState({})

    const showEditModal = (type, user) => {
        setType(type)
        setUser(user)
        setShowModal(true)
    }

    useEffect(() => {
        dispacth(getUsers())
    }, [])
    return (
        <>
            <Layout>
                <div className="flex space-x-3 items-center mb-4">
                    <h1>Table User</h1>
                    <div className="w-max bg-teal-500 text-white rounded-xl px-5 py-1 cursor-pointer" onClick={() => showEditModal("add", {})}>
                        Add User
                    </div>
                </div>
                <div className="overflow-x-auto w-[90vw] sm:w-full">
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>
                                Name
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Email
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Gender
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Status
                            </Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">
                                    Action
                                </span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                users.map(user => (
                                    <Table.Row key={user.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {user.name}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {user.email}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {user.gender}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {user.status}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <div className="font-medium text-blue-600 hover:underline cursor-pointer" onClick={() => showEditModal('edit', user)}>
                                                Edit
                                            </div>
                                            <div className="font-medium text-red-600 hover:underline cursor-pointer" onClick={() => showEditModal('delete', user)}>
                                                Delete
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                ))
                            }

                        </Table.Body>
                    </Table>
                </div>
            </Layout>
            <ModalSection show={showModal} onClose={() => setShowModal(!showModal)} type={type} user={user} />
        </>
    )
}

export default Users