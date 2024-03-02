import { useState } from 'react'
import './index.css'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { SideBarData } from './SideBarData'
import { IconContext } from 'react-icons' 

export default function NavBar() {
    const [sidebar, setSidebar] = useState(true)

    const showSideBar = () => setSidebar(!sidebar)
    
    return (
        <div>
            <IconContext.Provider value={{className: 'icons'}}>
                <div className="navBar">
                    <FaBars onClick={showSideBar} className='iconNav' />
                    <h1>Travel Impacta</h1>
                </div>
                <nav className={!sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle'>
                            <a href="#" className='menu-bars'>
                                <AiOutlineClose onClick={showSideBar} />
                            </a>
                        </li>
                        {
                            SideBarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.className}>
                                        <a href={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </a>
                                    </li>
                                )    
                            })
                        }
                    </ul>
                </nav>
            </IconContext.Provider>
        </div>
    )
}