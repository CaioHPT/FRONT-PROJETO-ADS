import './index.css'

import Card from '../../components/Card'

import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Adm() {

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

    const sendTrip = event => {
        event.preventDefault();
        
        const target = event.target

        const trip = {
            destino: target.destino.value,
            valor: target.valor.value,
            origem: target.origem.value,
            urlFoto: target.urlimagem.value
        }

        axios.post(`http://127.0.0.1:5000/viagens`, trip)
            .then(() => window.location.reload())
            .catch(() => alert("Servidor fora do ar!"))
    }

    return(
        <main className='containerAdm'>
            <h1>Área de administração</h1>
            <section className='adm'>
                <div className='registerTrip'>
                    <h2>Cadastrar viagem</h2>
                    <div className='formTrips'>
                        <form onSubmit={sendTrip}>
                            <label htmlFor="destino">Destino</label>
                            <input type="text" name="destino" id="destino" checke={true} />
                            <label htmlFor="origem">Origem</label>
                            <input type="text" name="origem" id="origem" />
                            <label htmlFor="valor">Valor</label>
                            <input type="number" name="valor" id="valor" />
                            <label htmlFor="urlimagem">URL imagem</label>
                            <input type="text" name="urlimagem" id="urlimagem" />
                            <input type="submit" value="Criar" />
                        </form>
                    </div>
                </div>
                <div className='tripsAdm'>
                    <h2>Editar viagem</h2>
                    <div className='tripsEdit'>
                        {
                            trips.length === 0  
                            ? <h1>Nenhuma viagem cadastrada</h1> 
                            : trips.map(tripImpacta => 
                                <Card image={tripImpacta.urlFoto} title={tripImpacta.destino} price={tripImpacta.valor} key={tripImpacta.id} />
                            )
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}