import { useContext } from 'react';
import { TripsContext } from '../../context/Trips';
import './index.css'

import axios from 'axios'

export default function InputTrips() {
    const { setTripsConsulta } = useContext(TripsContext)

    const onChanceSetDestino = event => {
        getTripsByDestino(event.target.value)
    }

    const getTripsByDestino = (destino) => {
        axios.get(`http://127.0.0.1:5000/viagem`, {
            params: {
                destino
            }
        })
            .then((res) => setTripsConsulta(res.data))
            .catch(() => alert("Servidor fora do ar!"))
    }

    return (
        <form className='formGetTrips'>
            <input type="text" name='viagem' onChange={onChanceSetDestino} />
            <input type="submit" value="Pesquisar" />
        </form>
    )
}