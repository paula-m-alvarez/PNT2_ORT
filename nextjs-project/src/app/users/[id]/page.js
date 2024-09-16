"use client";
import {useState, useEffect} from "react";
import User from "../User";

export default function PageDetail({params}){
    const { id } = params;
    const [user, setUser] = useState({});

    useEffect(() => {  
        fetch("https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Users.json")
        .then(response => response.json())
        .then(data => {
            setUser(data.find(user => user["Object Id"] == id));
        })
        .catch(error => console.log(error));
    }, []);

    return(
        <>
            <User
                Id={user["Object Id"]}
                UserName={user["Display name"]} 
                Picture={user.Picture}
                Title={user.Title}
                City={user.City}
            />
        </>
    )
}