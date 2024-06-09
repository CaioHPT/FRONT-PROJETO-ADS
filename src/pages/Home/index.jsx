import './index.css'

import HomeSearch from '../../components/HomeSearch'
import Card from '../../components/Card'
import Paris from '../../assets/paris.jpg'
import Maldivas from '../../assets/maldivas.jpg'
import Disney from '../../assets/disney.jpg'
import RioDeJaneiro from '../../assets/riodejaneiro.jpg'
import NovaZelandia from '../../assets/novazelandia.jpg'
import About from '../../components/About'

export default function Home() {
    return (
        <main className='containerHome'>
            <HomeSearch />
            <section className='sugestionTrips'>
                <h3>Algumas das nossas viagens</h3>
                <div className='tripsHome'>
                    <Card image={Paris} title='Paris' price='R$400,0' />
                    <Card image={Maldivas} title='Maldivas' price='R$2300,0' />
                    <Card image={Disney} title='Disney' price='R$700,0' />
                    <Card image={RioDeJaneiro} title='Rio De Janeiro' price='R$800,0' />
                    <Card image={NovaZelandia} title='Nova Zelandia' price='R$1000,0' />
                </div>
            </section>
            <About />
        </main>
    )
}