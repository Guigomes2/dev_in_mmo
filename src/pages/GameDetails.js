import React from "react"
import { useParams } from "react-router-dom";
import { getDetail } from "../service/Api";
import { useState } from "react";
import { useEffect } from "react";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Button, Container, Typography, Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';


const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Montserrat',
        ].join(','),
    },
});

const useStyles = makeStyles({
    root: {
        maxWidth: 900,
    },
    media: {
        height: 500,
    },
    text: {
        textAlign: "center",
    }
});

function GameDetails(props) {
    const [game, setGame] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        async function getGameDetails(id) {
            const res = await getDetail(id);
            setGame(res);
            setLoading(false);
        }
        getGameDetails(id);

    }, []);

    const classes = useStyles();


    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ pt: 4 }} >
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                                {game.title}
                            </Typography>
                            <CardMedia
                                className={classes.media}
                                image={game.thumbnail}
                                title={game.title}
                            />
                            <CardContent>


                                {game.description.replace((/(<([^>]+)>)/ig,""))}


                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Box>
            </ThemeProvider>
        </>
    )
}

export default GameDetails;