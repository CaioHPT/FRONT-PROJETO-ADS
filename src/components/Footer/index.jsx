import { useState } from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
    const [footerAberto, setFooterAberto] = useState(true)

    const alternarFooter = () => setFooterAberto(!footerAberto)

    return (
        <footer className="footer">
            <div className="conteudo-rodape">

                <div className="info-contato" onClick={alternarFooter}>
                    <FaEnvelope className="icone" /> <span>RODRIGO_LINDO@email.com</span> 
                </div>

                <div className="info-contato" onClick={alternarFooter}>
                    <FaPhone className="icone" /> <span>(123) 4002-8922</span>
                </div>

            </div>
           
            <p>&copy; 2024 Projeto Impacta - Em andamento - Travel Impacta</p>

        </footer>
    )
}
