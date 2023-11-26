import React, { useEffect } from "react";
import NavBar from "../components/navBar/NavBar";
import Container from '@mui/material/Container';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography } from "@mui/material";
import axios from "axios";
import Button from '@mui/material/Button';
import { useState } from "react";

export default () => {
    const { id } = useParams()
    const [character,setCharacter] = useState([])

    useEffect(() => {
        getById(id)
    }, [])

    const getById = (id) =>{
        axios.get(`https://hp-api.onrender.com/api/character/${id}`).then((res)=>setCharacter(res.data)).catch((error)=>console.log(error))
    }

    const navigate = useNavigate()

    return (
        <>
            <NavBar hiddeButton backButton useNavigate={navigate} />
            <Container maxWidth={'xl'}>
                <Typography variant="h5">{id}</Typography>
                <Button variant="text" onClick={()=>console.log(character)}>Teste </Button>
            </Container>
        </>
    )
}