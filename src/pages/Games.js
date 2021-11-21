import Inputs from '../componets/Inputs';
import React, { useEffect, useState } from 'react';
import { getGames } from '../service/Api';
import Table from '../componets/Table';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Button, Container, Typography, Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
  },
});


export default function Games() {
    const [filter, setFilter] = useState("");
    const [games, setGames] = useState([{}]);
  
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function getAllGames() {
        const res = await getGames();
        setGames(res);
        setLoading(false);
      }
      getAllGames();
  
    }, []);
  
  
    const handleSetFilter = (e) => {
      setFilter(e.target.value);
      setGames(games.filter(game => game.title.includes(filter)));
    }
  
    const handleClearSearch = async () => {
      const res = await getGames();
      setGames(res);
      setFilter("");
    }


    return (
        <>
        <ThemeProvider theme={theme}>
        <Box sx={{ pt: 4 }} >
          <Grid container spacing={3}>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <TextField id="outlined-basic" label="O que você procura?"
                variant="outlined"
                value={filter}
                onChange={handleSetFilter} />
              <Button onClick={handleClearSearch} variant="outlined" >
                Limpar
              </Button>

            </Grid>
            <Grid container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Typography variant="h5" gutterBottom>

                Todos os resultados({games.length})
              </Typography>
            </Grid>
          </Grid>
          <Table games={games} loading={loading} />

        </Box >
      </ThemeProvider>
      </>
    )
}
