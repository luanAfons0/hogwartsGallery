import React, { useState, useEffect } from "react";
import NavBar from '../components/navBar/NavBar'
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from "axios";
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
    const [characterColor, setCharacterColor] = useState('')

    useEffect(() => {
        getCharacters()
    })

    const getCharacters = () => {
        axios.get('https://hp-api.onrender.com/api/characters/students').then((res) => setCharacters(res.data)).catch((err) => console.log(err))
    }

    return (
        <>
            <NavBar />
            <Container maxWidth={'xl'}>
                <Grid container spacing={3} sx={{ paddingTop: 3, paddingBottom: 3 }}>
                    {characters.map((character) => {
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
                                        <Typography variant="h5">{character.house}</Typography>
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