import './index.css'

import InputTrips from '../../components/InputTrips'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../../components/Card'

export default function Trips() {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        getTrips()
    }, [])


    const getTrips = () => {
        axios.get(`http://127.0.0.1:5000/viagens`)
            .then(res => {
                const trip = res.data;
                setTrips(trip);
            })
            .catch(() => setTrips([]))
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