"use client";
import "./User.css";
import {useState} from "react";
import Link from "next/link";

function User(props){
    const [contador, setContador] = useState(0);

    return(
        <li className='user-item'>
            <div className='card user-item__content'>
                <Link href={`/users/${props.Id}`}>
                    <div className='user-item__image avatar'>
                        <img src={props.Picture} alt={props.Username}/>
                    </div>
                    <div className='user-item__info'>
                        <h2>{ props.UserName }</h2>
                        <h2>{ props.Title }</h2>
                        <h3>{ props.City }</h3>
                    </div>
                </Link>
            </div>
        </li>
    );
}

export default User;