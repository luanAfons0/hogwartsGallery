import React, { useEffect , useState} from "react";
import NavBar from "../components/navBar/NavBar";
import Container from '@mui/material/Container';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import TableCharacter from "../components/tableCharacter/tableCharacter";

export default () => {
    const { id } = useParams()
    const [character,setCharacter] = useState([])

    useEffect(() => {
        getById(id)
    }, [])

    const getById = (id) =>{
        axios.get(`https://hp-api.onrender.com/api/character/${id}`).then((res)=>setCharacter(res.data[0])).catch((error)=>console.log(error))
    }

    const navigate = useNavigate()

    return (
        <>
            <NavBar hiddeButton backButton useNavigate={navigate} />
            <Container maxWidth={'xl'}>
                <TableCharacter character={character}/>
            </Container>
        </>
    )
}