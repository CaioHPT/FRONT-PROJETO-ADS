import { FaEnvelope, FaPhone } from 'react-icons/fa'
import './index.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="conteudo-rodape">

                <div className="info-contato">
                    <FaEnvelope className="icone" /> <span>travelimpacta@email.com</span>
                </div>

                <div className="info-contato">
                    <FaPhone className="icone" /> <span>(123) 4002-8922</span>
                </div>

            </div>
            <p>&copy; 2024 Projeto Impacta - Travel Impacta</p>
        </footer>
    )
}
