import { Button, Modal, Spinner } from "flowbite-react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUser, deleteUser, editUser } from "../store/users/action"

const ModalSection = ({ show, onClose, type, user }) => {
    const dispacth = useDispatch()
    const { loading } = useSelector(state => state.user)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    const [status, setStatus] = useState("")

    const handleSubmit = async () => {
        let result
        const payload = { name, email, gender, status }

        if (!loading) {
            if (type === "add") {
                result = await dispacth(addUser(payload))
            } else if (type === 'edit') {
                result = await dispacth(editUser(payload, user.id))
            }

            if (result) {
                onClose()
                setName("")
                setEmail("")
                setGender("")
                setStatus("")
            }
        }
    }

    const handleDelete = async () => {
        const result = await dispacth(deleteUser(user.id))
        if (result) {
            onClose()
        }
    }

    useEffect(() => {
        if (type === 'edit') {
            setName(user?.name)
            setEmail(user?.email)
            setGender(user?.gender)
            setStatus(user?.status)
        }
    }, [type, user?.id])

    return (
        <>
            <Modal
                show={show}
                size="md"
                popup={true}
                onClose={() => {
                    onClose()
                    setName("")
                    setEmail("")
                    setGender("")
                    setStatus("")
                }}
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                        {
                            type === 'delete' ? (
                                <>
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                        Are you sure want to delete this user?
                                    </h3>
                                    <div className="flex space-x-2">
                                        <Button color={"failure"} onClick={handleDelete}>
                                            {
                                                loading ? (
                                                    <Spinner
                                                        color="info"
                                                        aria-label="Info spinner example"
                                                    />
                                                ) : (
                                                    "Delete"
                                                )
                                            }
                                        </Button>
                                        <Button onClick={onClose}>
                                            Cancel
                                        </Button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                        {type === "add" ? "Add User" : "Edit User"}
                                    </h3>

                                    <input type="text" className="w-full focus:outline-none rounded-lg" placeholder="type name" value={name} onChange={e => setName(e.target.value)} />
                                    <input type="text" className="w-full focus:outline-none rounded-lg" placeholder="type email" value={email} onChange={e => setEmail(e.target.value)} />
                                    <select value={gender} className="w-full focus:outline-none rounded-lg" onChange={e => setGender(e.target.value)}>
                                        <option value="" disabled>Choose your gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    <select value={status} className="w-full focus:outline-none rounded-lg" onChange={e => setStatus(e.target.value)}>
                                        <option value="" disabled>Choose your gender</option>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                    <div className="w-full">
                                        <Button onClick={handleSubmit}>
                                            {
                                                loading ? (
                                                    <Spinner
                                                        color="info"
                                                        aria-label="Info spinner example"
                                                    />
                                                ) : (
                                                    type === "add" ? "Add" : "Edit"
                                                )
                                            }
                                        </Button>

                                    </div>
                                </>
                            )
                        }

                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}
export default ModalSection