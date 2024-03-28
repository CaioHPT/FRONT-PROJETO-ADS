import { useState } from 'react'
import './index.css'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { SideBarData } from './SideBarData'
import { IconContext } from 'react-icons' 
import { Link } from 'react-router-dom'

export default function NavBar() {
    const [sidebar, setSidebar] = useState(true)

    const showSideBar = () => setSidebar(!sidebar)
    
    const closeSideBar = () => setSidebar(true)

    return (
        <header>
            <IconContext.Provider value={{className: 'icons'}}>
                <nav className="navbar">
                    <FaBars onClick={showSideBar} className='iconNav' />
                    <Link to="/">
                        <h1>Travel Impacta</h1>
                    </Link>
                </nav>
                <aside className={!sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle'>
                            <span href="" className='menu-bars'>
                                <AiOutlineClose onClick={closeSideBar} />
                            </span>
                        </li>
                        {
                            SideBarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.className}>
                                        <Link to={item.path} onClick={closeSideBar}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )    
                            })
                        }
                    </ul>
                </aside>
            </IconContext.Provider>
        </header>
    )
}