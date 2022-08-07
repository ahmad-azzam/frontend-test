import Logo from '../assets/logo.png'
import Menu from './Menu'

const SideBar = ({ show }) => {
    return (
        <>
            <div className={`min-h-screen border-r ${show ? 'flex flex-col w-72' : 'hidden'} `}>
                <div className="flex space-x-2 items-center justify-center h-14 px-3">
                    <div className="w-8">
                        <img src={Logo} className="w-full" alt="" />
                    </div>
                    <div className="">
                        zam's
                    </div>
                </div>
                <hr />
                <div className="flex flex-col space-y-3 justify-center items-center pt-3">
                    <Menu title={'Users'} path="/" />
                </div>
            </div>
        </>
    )
}

export default SideBar