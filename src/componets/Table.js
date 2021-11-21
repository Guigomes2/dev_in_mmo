import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';



const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});



export default function Table({ games, loading }) {

    const classes = useStyles();

    const handleOnClick = (id) => {
        console.log(id);
    }

    const renderGames = () => {
        if (loading === false && games.length === 0) {
            return (
                <Grid container
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://imagensemoldes.com.br/wp-content/uploads/2020/07/%C3%8Dcone-Lupa-PNG-1280x720.pngz"
                                title="Contemplative Reptile"
                            />
                            <CardContent>

                                <Typography gutterBottom variant="h5" component="h2">
                                    Nenhum jogo encontrado
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            )
        }

        else if (loading === false) {
            return (
                <Grid container
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch">
                    {games.map(game => (
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={game.thumbnail}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {game.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {game.short_description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <Link to={`details/${game.id}`} >  Veja mais sobre </Link>
                                </Button>
                            </CardActions>
                        </Card>
                    ))}

                </Grid>
            );
        }
        else {
            return <div>Loading...</div>;
        }
    };

    return (
        <div>
            {renderGames()}
        </div>
    )
}
