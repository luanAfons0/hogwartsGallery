import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material'

export default ({ character }) => {
    console.log(character.wand)

    const renderWandInfos = (wand) => {
        return (
            <>
                <TableCell>Core : {wand.core}</TableCell>
                <TableCell>Wood : {wand.wood}</TableCell>
                <TableCell>Length : {wand.length}</TableCell>
            </>
        )
    }
    return (
        <Box sx={{ marginTop: 3.5, display: 'flex' }}>
            <Box
                component="img"
                sx={{
                    height: 250,
                    width: 200,
                    backgroundColor: 'white',
                }}
                src={character.image ? character.image : 'https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png'}
            />
            <TableContainer component={Paper} sx={{}}>
                <Table aria-label="simple table">
                    <TableBody>
                        <TableRow
                            key={character.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" align='center'>
                                Names:
                            </TableCell>
                            <TableCell component="th" align='center'>
                                {character.name}
                            </TableCell>
                            {character.alternate_names ? character.alternate_names.map((altName) => {
                                return (
                                    <TableCell component="th" align='center' key={altName}>
                                        {altName}
                                    </TableCell>
                                )
                            }) : null}
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" align='center'>
                                Specie:
                            </TableCell>
                            <TableCell component="th" align='center'>
                                {character.species}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" align='center'>
                                Gender:
                            </TableCell>
                            <TableCell component="th" align='center'>
                                {character.gender}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" align='center'>
                                Year of Birth:
                            </TableCell>
                            <TableCell component="th" align='center'>
                                {character.yearOfBirth}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" align='center'>
                                Wand:
                            </TableCell>
                                {character.wand ?
                                    renderWandInfos(character.wand)
                                    : null}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

{ }
/*
    {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" align='center'>
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.calories}</TableCell>
                            </TableRow>
                        ))}
*/