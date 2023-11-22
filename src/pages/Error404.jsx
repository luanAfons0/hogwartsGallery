import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';

export default function Error() {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h1">
              404
            </Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Button variant="contained" onClick={()=>navigate('/')}>Back Home</Button>
          </Grid>
          <Grid item xs={6}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/92/Caution_sign_used_on_roads_pn.svg"
              alt="Wrong page !!!"
              width={250} height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}