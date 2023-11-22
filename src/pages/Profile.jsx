import React, { useEffect } from "react";
import NavBar from "../components/navBar/NavBar";
import { useNavigate } from 'react-router-dom';

export default ({characterData}) =>{
    useEffect(()=>{
        console.log(characterData)
    },[])

    const navigate = useNavigate()

    return(
        <>
            <NavBar hiddeButton backButton useNavigate={navigate}/>
        </>
    )
}