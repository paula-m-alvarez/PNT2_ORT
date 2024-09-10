import './User.css';
import { useState } from "react";
import { Link } from 'react-router-dom';

function User(props){
    const [contador, setContador] = useState(0);

    const Hanlder_ClickUser = () => {
       setContador(contador + 1);
    };

    return(
        <li className='user-item' onClick={Hanlder_ClickUser}>
            <div className='card user-item__content'>
                <Link to={`/users/${props.Id}`}>
                    <div className='user-item__image avatar'>
                        <img src={props.Picture} alt={props.Username}/>
                    </div>
                    <div className='user-item__info'>
                        <h2>{ props.UserName }</h2>
                        <h2>{ props.Title }</h2>
                        <h3>{ props.City }</h3>
                        <h3>{ contador }</h3>
                    </div>
                </Link>
            </div>
        </li>
    );
}

export default User;