import './index.css'

import Card from '../../components/Card'
import Paris from '../../assets/paris.jpg'
import Maldivas from '../../assets/maldivas.jpg'
import Disney from '../../assets/disney.jpg'
import RioDeJaneiro from '../../assets/riodejaneiro.jpg'
import NovaZelandia from '../../assets/novazelandia.jpg'

import axios from 'axios'

export default function Adm() {

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
            .then(res => {console.log(res)})
    }

    return(
        <main>
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
                        <Card image={Paris} title='Paris' price='R$400,0'/>
                        <Card image={Maldivas} title='Maldivas' price='R$2300,0' />
                        <Card image={Disney} title='Disney' price='R$700,0' />
                        <Card image={RioDeJaneiro} title='Rio De Janeiro' price='R$800,0' />
                        <Card image={NovaZelandia} title='Nova Zelandia' price='R$1000,0' />
                    </div>
                </div>
            </section>
        </main>
    )
}