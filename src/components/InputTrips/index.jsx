import { useContext } from 'react';
import { TripsContext } from '../../context/Trips';
import './index.css'

import axios from 'axios'

export default function InputTrips() {
    const { setTripsConsulta, inputTripValue, setInputTripValue} = useContext(TripsContext)

    const getTrip = (event) => {
        event.preventDefault()

        const isCurrentTravelPage = window.location.pathname === "/trips"
        const path = isCurrentTravelPage ? "" : "trips"
        const url = new URL(window.location.href + path)

        if (inputTripValue.trim() !== "") {
            url.searchParams.set('destino', inputTripValue)
        }

        window.location.href = url
    }

    const onChanceSetDestino = event => {
        setInputTripValue(event.target.value)
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
        <form className='formGetTrips' onSubmit={getTrip}>
            <input type="text" name='viagem' onChange={onChanceSetDestino} defaultValue={inputTripValue}/>
            <input type="submit" value="Pesquisar" />
        </form>
    )
}