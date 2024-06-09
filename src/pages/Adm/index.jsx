import './index.css'

import Card from '../../components/Card'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { ModalContext } from '../../context/Modal'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
};


export default function Adm() {
    const { openModalDelete, setOpenModalDelete, idTripSelected } = useContext(ModalContext)
    const { openModalUpdate, setOpenModalUpdate, tripSelected } = useContext(ModalContext)
    const handleClose = () => setOpenModalDelete(false)
    const handleCloseUpdate = () => setOpenModalUpdate(false)

    const deleteTrip = () => {
        axios.delete(`http://127.0.0.1:5000/viagens/${idTripSelected}`)
            .then(() => {
                setOpenModalDelete(false)
                getTrips()
            })
            .catch(() => alert("Erro ao deletar"))
    }

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

    const updateTrip = event => {
        event.preventDefault();

        const target = event.target

        const trip = {
            destino: target.destino.value,
            valor: target.valor.value,
            origem: target.origem.value,
            urlFoto: target.urlimagem.value
        }

        axios.put(`http://127.0.0.1:5000/viagens/${tripSelected.id}`, trip)
            .then(() => window.location.reload())
            .catch(() => alert("Servidor fora do ar!"))
    }

    return (
        <main className='containerAdm'>
            <h1>Área de administração</h1>
            <section className='adm'>
                <div className='registerTrip'>
                    <h2>Cadastrar viagem</h2>
                    <div className='formTrips'>
                        <form onSubmit={sendTrip}>
                            <label htmlFor="destino">Destino</label>
                            <input type="text" name="destino" id="destino" />
                            <label htmlFor="origem">Origem</label>
                            <input type="text" name="origem" id="origem" />
                            <label htmlFor="valor">Valor</label>
                            <input type="number" name="valor" id="valor" step={0.010} />
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
                                    <Card
                                        title={tripImpacta.destino}
                                        trip={tripImpacta}
                                        image={tripImpacta.urlFoto}
                                        price={tripImpacta.valor}
                                        key={tripImpacta.id}
                                        isAdm={true}
                                        id={tripImpacta.id} />
                                )
                        }
                    </div>
                </div>
            </section>
            <Modal
                open={openModalDelete}
                onClose={handleClose}
            >
                <Box sx={styleModal}>
                    <h3>Deseja realmente excluir essa viagem?</h3>
                    <div className='modalDiv'>
                        <button style={{ background: 'red' }} onClick={deleteTrip}>
                            Sim
                        </button>
                        <button style={{ background: '#5E9FF2' }} onClick={handleClose}>
                            Não
                        </button>
                    </div>
                </Box>
            </Modal>
            <Modal
                open={openModalUpdate}
                onClose={handleCloseUpdate}
            >
                <Box sx={styleModal}>
                    <h3>Atualizar viagem</h3>
                    <div className='modalDiv formTrips'>
                        <form onSubmit={updateTrip}>
                            <label htmlFor="destino">Destino</label>
                            <input type="text" name="destino" id="destino" checked={true} defaultValue={tripSelected != null ? tripSelected.destino : null} />
                            <label htmlFor="origem">Origem</label>
                            <input type="text" name="origem" id="origem" defaultValue={tripSelected != null ? tripSelected.origem : null} />
                            <label htmlFor="valor">Valor</label>
                            <input type="number" name="valor" id="valor" defaultValue={tripSelected != null ? tripSelected.valor : null} step={0.010}/>
                            <label htmlFor="urlimagem">URL imagem</label>
                            <input type="text" name="urlimagem" id="urlimagem" defaultValue={tripSelected != null ? tripSelected.urlFoto : null} />
                            <input type="submit" value="Atualizar" />
                        </form>
                    </div>
                </Box>
            </Modal>
        </main>
    )
}