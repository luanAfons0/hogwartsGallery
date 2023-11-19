import React, { useState, useEffect } from "react";
import NavBar from '../components/navBar/NavBar'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from "axios";
import { styled } from '@mui/material/styles';
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default () => {
    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState('')


    useEffect(() => {
        getAllCharacters()
    },[])

    const getAllCharacters = () => {
        axios.get('https://hp-api.onrender.com/api/characters/students').then((res) => setCharacters(res.data)).catch((err) => console.log(err))
    }

    const getByHouse = (house) =>{
        axios.get(`https://hp-api.onrender.com/api/characters/house/${house}`).then((res)=>setCharacters(res.data)).catch((err)=>console.log(err))
    }

    const setColor = (house) => {
        switch (house) {
            case 'Gryffindor':
                return '#d32f2f'
            case 'Slytherin':
                return '#388e3c'
            case 'Ravenclaw':
                return '#0288d1'
            case 'Hufflepuff':
                return '#ffa726'
        }
    }

    return (
        <>
            <NavBar setSearch={setSearch} getByHouse={getByHouse} getAllCharacters={getAllCharacters}/>
            <Container maxWidth={'xl'}>
                <Grid container spacing={3} sx={{ paddingTop: 3, paddingBottom: 3 }}>
                    {characters
                    .filter((item)=>{
                        if(search==='')
                            return item
                        else if (item.name.toLowerCase().includes(search.toLowerCase()))
                            return item
                    })
                    .map((character) => {
                        return (
                            <Grid item xs={3} key={character.id}>
                                <Item>
                                    <Box>
                                        <Box
                                            component="img"
                                            sx={{
                                                height: 250,
                                                width: 200,
                                                backgroundColor: 'white',
                                            }}
                                            src={character.image ? character.image : 'https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png'}
                                        />
                                        <Typography variant="h5">{character.name}</Typography>
                                        <Typography variant="h5" sx={{ backgroundColor: setColor(character.house), borderRadius:'5' }}>{character.house}</Typography>
                                    </Box>
                                </Item>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </>
    )
}