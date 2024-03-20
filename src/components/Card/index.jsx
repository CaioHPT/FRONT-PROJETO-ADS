import './index.css'
import { Link } from 'react-router-dom'

export default function Card(props) {

    return(
        <div className='card'>
            <Link to='/trips'>
                <img src={props.image} width={10}/>
                <div className='textcard'>
                    <h4>{props.title}</h4>
                    <span>{props.price}</span>
                </div>
            </Link>
        </div>
    )
}