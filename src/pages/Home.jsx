import React, { useState, useEffect } from "react";
import NavBar from '../components/navBar/NavBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import axios from "axios";
import CharacterCard from "../components/characterCard/CharacterCard";

export default ({setCharacterData}) => {
    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState('')


    useEffect(() => {
        getAllCharacters()
    }, [])

    const getAllCharacters = () => {
        axios.get('https://hp-api.onrender.com/api/characters/students').then((res) => setCharacters(res.data)).catch((err) => console.log(err))
    }

    const getByHouse = (house) => {
        axios.get(`https://hp-api.onrender.com/api/characters/house/${house}`).then((res) => setCharacters(res.data)).catch((err) => console.log(err))
    }

    return (
        <>
            <NavBar setSearch={setSearch} getByHouse={getByHouse} getAllCharacters={getAllCharacters} />
            <Container maxWidth={'xl'}>
                <Grid container spacing={3} sx={{ paddingTop: 3, paddingBottom: 3 }}>
                    {characters
                        .filter((item) => {
                            if (search === '')
                                return item
                            else if (item.name.toLowerCase().includes(search.toLowerCase()))
                                return item
                        })
                        .map((character) => {
                            return (
                                <CharacterCard character={character} key={character.id} setCharacterData={setCharacterData}/>
                            )
                        })}
                </Grid>
            </Container>
        </>
    )
}