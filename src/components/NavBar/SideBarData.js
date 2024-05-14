import { FaUserAlt } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { BsAirplaneFill } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        className : 'nav-text'
    },
    {
        title: 'Viagens',
        path: '/trips',
        icon: <BsAirplaneFill />,
        className : 'nav-text'
    },
    {
        title: 'Login',
        path: '/signIn',
        icon: <FaUserAlt />,
        className : 'nav-text'
    },
    {
        title: 'Cadastrar-se',
        path: '/register',
        icon: <FaWpforms />,
        className : 'nav-text'
    },
    {
        title: 'ADM',
        path: '/adm',
        icon: <RiAdminFill />,
        className : 'nav-text'
    }
]