import ProfileImg from '../assets/profile.png'

const Navbar = ({ setShow }) => {
    return (
        <>
            <div className="w-full h-14 border-b sticky top-0 z-30 bg-white flex justify-between items-center  px-3">
                <div onClick={setShow} className="flex flex-col space-y-1 cursor-pointer">
                    <div className="w-5 bg-gray-400 h-[2px]" />
                    <div className="w-5 bg-gray-400 h-[2px]" />
                    <div className="w-5 bg-gray-400 h-[2px]" />
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-full border">
                        <img src={ProfileImg} alt="profile" className="w-full h-full object-contain" />
                    </div>
                    <div className="text-xs">
                        user@mail.com
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar