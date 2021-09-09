import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Grid, Card, CardContent, CardMedia, Typography, Button, makeStyles} from '@material-ui/core'
import {removeMovieFavorite, getMovieFavorite} from '../../actions/index'
import './Favourites.css'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
    height: 450,
    background: 'rgba(0,0,0,0.1)',
    margin: '2.5rem',
    [theme.breakpoints.down('xs')]:{
      marginLeft: 'auto'
    }
  },
  media: {
    height: 300,
    width: 200
  },
  title: {
    fontWeight: 'bold', 
    fontSize: '1rem',
    color: 'whitesmoke'
  },
  noMovies:{
    color: 'rgb(83,83,83)',
    fontWeight: 'bold',
    margin: 'auto',
    marginTop: '3rem',
    fontSize: '3rem',
    [theme.breakpoints.down('xs')]:{
      fontSize: '1.5rem',
      marginLeft: '5rem'
    }
  }
}))

export default function ConnectedList(){
  const dispatch = useDispatch()
  const moviesR = useSelector(state => state.moviesFavourites)
  const movies = localStorage.getItem('fav') ? localStorage.getItem('fav') : moviesR

  useEffect(() => {
    dispatch(getMovieFavorite())
  }, [dispatch])

  const classes = useStyles()

    return(
      <div>
        <Grid container className = {classes.container}>
          {movies.length ? (
            movies.map((movie) => (
              <Grid item xs = {12} md = {6} lg = {3} className = {classes.responsive}>
                <Card className = {classes.root} >
                  <Link to = {`/movie/${movie.imdbID}`} >
                    <CardMedia className = {classes.media}
                               image = {movie.Poster}
                               title = {movie.Title}
                    />
                  </Link>
                  <Button variant = 'contained'
                              id = 'buttonFav'
                              onClick = {() => dispatch(removeMovieFavorite(movie.imdbID))}
                              style = {{width: '200px', fontSize: '0.7rem'}}
                  >
                    Remove from Favourites
                  </Button>
                  <br/>
                  <br/>
                  <CardContent>
                    <div id = 'title'>
                      <Typography gutterBottom
                                  variant = 'h5'
                                  component = 'h1'
                                  className = {classes.title}
                      >
                        {movie.Title}
                      </Typography>
                    </div>
                    <Typography variant = 'body2'
                                color = 'textSecondary'
                                component = 'p'
                                className = {classes.title}
                    >
                      {movie.Year}
                    </Typography> 
                  </CardContent>     
                </Card>
              </Grid>
            ))
          ) : <span className = {classes.noMovies} style = {{textAlign: 'center'}}>Select your favourite movies to watch them here!</span>
          }
        </Grid>
      </div>
    )
}