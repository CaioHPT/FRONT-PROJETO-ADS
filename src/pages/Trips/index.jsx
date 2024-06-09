import './index.css'

import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import InputTrips from '../../components/InputTrips'
import Card from '../../components/Card'
import { TripsContext } from '../../context/Trips'

export default function Trips() {
    const [trips, setTrips] = useState([])

    const { tripsConsulta, setTripsConsulta, setInputTripValue } = useContext(TripsContext)

    useEffect(() => {
        getTrips()
    }, [])

    useEffect(() => {
        if (tripsConsulta != null) {
            setTrips(tripsConsulta)
        }
    }, [tripsConsulta])


    const getTrips = () => {
        const url = new URL(window.location.toString())

        if (url.searchParams.has('destino')) {
            const trip = url.searchParams.get('destino')
            setInputTripValue(trip)
            axios.get(`http://127.0.0.1:5000/viagem`, {
                params: {
                    destino: trip
                }
            })
                .then((res) => setTripsConsulta(res.data))
                .catch(() => alert("Servidor fora do ar!"))
        } else {
            axios.get(`http://127.0.0.1:5000/viagens`)
                .then(res => {
                    const trips = res.data;
                    setTrips(trips);
                })
                .catch(() => setTrips([]))
        }
    }

    return (
        <main className='containerTrips'>
            <section className='trips'>
                <h2>Pesquisar Viagem</h2>
                <InputTrips />
                <div>
                    {
                        trips.length === 0
                            ? <h3>Nenhuma viagem disponível no momento, volte aqui mais tarde!</h3>
                            : trips.map(tripImpacta =>
                                <Card
                                    image={tripImpacta.urlFoto}
                                    title={tripImpacta.destino}
                                    price={tripImpacta.valor}
                                    key={tripImpacta.id}
                                    isAdm={false}
                                    id={tripImpacta.id} />
                            )
                    }
                </div>
            </section>
        </main>
    )
}