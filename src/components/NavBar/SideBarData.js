import { FaInfoCircle, FaUserAlt } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { BsAirplaneFill } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa6";

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        className : 'nav-text'
    },
    {
        title: 'Viagens',
        path: '/viagens',
        icon: <BsAirplaneFill />,
        className : 'nav-text'
    },
    {
        title: 'Sobre',
        path: '#sobre',
        icon: <FaInfoCircle />,
        className : 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <FaUserAlt />,
        className : 'nav-text'
    },
    {
        title: 'Cadastrar-se',
        path: '/criar-conta',
        icon: <FaWpforms size={25} />,
        className : 'nav-text'
    }
]