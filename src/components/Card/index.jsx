import './index.css'

import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ImBin } from "react-icons/im";
import { ModalContext } from '../../context/Modal'

export default function Card(props) {
    const { setOpenModal, setIdTripSelected } = useContext(ModalContext);
    const handleOpen = (id) => {
        setOpenModal(true)
        setIdTripSelected(id)
    };

    return (
        <div className='card'>
            <Link to={props.isAdm ? '' : '/trips'}>
                <img src={props.image} width={10} />
                <div className='textcard'>
                    <h4>{props.title}</h4>
                    <span>{props.price}</span>
                    {props.isAdm
                        ? <ImBin className='binIconAdm' onClick={() => handleOpen(props.id)} />
                        : <></>
                    }
                </div>
            </Link>
        </div>
    )
}