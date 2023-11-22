import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default ({character , setCharacterData}) => {
    const navigate = useNavigate()

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
        <Grid item xs={12} sm={6} md={4} lg={3} >
            <Item onClick={()=>{
                setCharacterData(character)
                navigate(`profile/${character.id}`)
            }} sx={{cursor:'pointer'}}>
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
                    <Typography variant="h5" sx={{ backgroundColor: setColor(character.house), borderRadius: '5' }}>{character.house}</Typography>
                </Box>
            </Item>
        </Grid>
    )
}