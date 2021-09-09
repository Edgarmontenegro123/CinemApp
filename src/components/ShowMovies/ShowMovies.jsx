import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {addMovieFavorite, getMovies} from '../../actions'
import {Card, CardContent, CardMedia, Typography,Button, Grid, makeStyles} from '@material-ui/core'
import swal from 'sweetalert'
import './ShowMovies.css'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
    height: 450,
    background: 'rgba(0,0,0,0.1)',
    margin: '2.5rem',
    [theme.breakpoints.down('xs')]:{
      margin: '1rem auto 6rem '
    },
    [theme.breakpoints.up('sm')]:{
      marginLeft: 'auto'
    },
    [theme.breakpoints.up('md')]:{
      maxWidth: 200,
      height: 450,
      background: 'rgba(0,0,0,0.1)',
      margin: '2.5rem'
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
  }
}))

const ShowMovies = () => {
  const movies = useSelector((state) => state.moviesLoaded)
  const favorites = useSelector((state) => state.moviesFavourites)
  const title = useSelector((state) => state.movieTitle)
  const dispatch = useDispatch()

  useEffect(() => {
    if (title !== '') {
      dispatch(getMovies(title))
    }
  }, [dispatch, title])

  const handlerFavorites = (movie) => {
    if (favorites.find((e) => e.imdbID === movie.imdbID)){
      swal({
        title: 'Warning!',
        text: 'This movie is already among your favourites!',
        icon: 'warning'
      })
    } 
    else{
      swal({
        title: 'OK',
        text: 'Movie added to your favourites!',
        icon: 'success'
      })
      dispatch(addMovieFavorite(movie))
    }
  }

  const classes = useStyles()
  return(
    <Grid container>
      {movies.length ? (
        movies.map((movie) => (
          <Grid item xs = {12} md = {6} lg = {3} className = {classes.responsive} >
            <Card className = {classes.root} >
              <Link to = {`/movie/${movie.imdbID}`} >
                <CardMedia className = {classes.media}
                           image = {movie.Poster}
                           title = {movie.Title}
                />
              </Link>
              <Button variant = 'contained'
                              id = 'buttonFav'
                              onClick = {() => handlerFavorites(movie)}
                              style = {{width: '200px', fontSize: '0.8rem'}}
                      >
                        Add to Favourites
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
            <br/>
            <br/>
            <br/>
          </Grid>
        ))
        ) : (<span id = 'showMovies'> Search your favourite movies! </span>
      )}
    </Grid>
  )
}
export default ShowMovies