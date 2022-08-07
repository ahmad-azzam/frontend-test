import { useEffect, useState } from "react"
import useResizeWindow from "../hooks/useResizeWindow"
import Navbar from "./Navbar"
import SideBar from "./Sidebar"

const Layout = ({ children }) => {
    const [show, setShow] = useState(false)
    const size = useResizeWindow();

    useEffect(() => {
        if (size < 768) {
            setShow(false)
        } else {
            setShow(true)
        }
    }, [size])

    return (
        <>
            <div className="flex font-poppins">
                <SideBar show={show} />
                <div className="flex flex-col grow">
                    <Navbar setShow={() => setShow(!show)} />
                    <div className="w-full px-3 py-5">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout