import './index.css'

import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ImBin, ImPencil } from "react-icons/im";
import { ModalContext } from '../../context/Modal'

export default function Card(props) {
    const { setOpenModalDelete, setIdTripSelected } = useContext(ModalContext);
    const { setOpenModalUpdate, setTripSelected } = useContext(ModalContext);

    const handleOpen = () => {
        setOpenModalDelete(true)
        setIdTripSelected(props.id)
    };

    const handleOpenUpdate = () => {
        setOpenModalUpdate(true)
        setTripSelected(props.trip)
    }

    return (
        <div className='card'>
            <Link to={props.isAdm ? '' : '/trips'}>
                <img src={props.image} width={10} />
                <div className='textcard'>
                    <h4>{props.title}</h4>
                    <span>{props.price}</span>
                    {props.isAdm
                        ? <>
                            <ImBin className='binIconAdmDelete' onClick={handleOpen} />
                            <ImPencil className='binIconAdmUpdate' onClick={props.isAdm ? handleOpenUpdate : null}/>
                        </>
                        : <></>
                    }
                </div>
            </Link>
        </div>
    )
}