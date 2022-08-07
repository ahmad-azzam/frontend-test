import { useLocation, Link } from 'react-router-dom'

const Menu = ({ title, path }) => {
    const { pathname } = useLocation()

    return (
        <>
            <Link to={path} className={`${path === pathname ? 'bg-teal-500 text-white' : ''} text-sm cursor-pointer py-3 hover:bg-teal-500 hover:text-white w-full text-center duration-200`}>
                {title}
            </Link>
        </>
    )
}

export default Menu