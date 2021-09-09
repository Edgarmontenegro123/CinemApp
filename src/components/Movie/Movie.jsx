import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getMovieDetail} from '../../actions/index'
import {Card, CardContent, Typography,makeStyles} from '@material-ui/core'
import './Movie.css'

const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    background: 'rgba(83,83,83,0.7)',
    marginTop: '1rem',
    margin: 'auto',
    width: '80%',
    [theme.breakpoints.down('xs')]:{
      flexDirection: 'column',
      marginLeft: '5rem'
    },
    [theme.breakpoints.up('sm')]:{
      flexDirection: 'column'
    },
    [theme.breakpoints.up('md')]:{
      flexDirection: 'row'
    }
  },
  details:{
    display: 'flex',
    flexDirection: 'column'
  },
  content:{
    flex: '1 0 auto',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: 'whitesmoke',
    marginTop: '1rem',
    [theme.breakpoints.down('xs')]:{
      marginTop: '0.1rem'
    }
  },
  info:{
    lineHeight: '2.8rem',
    fontSize: '1.4rem',
    [theme.breakpoints.down('xs')]:{
      lineHeight: '2rem',
      fontSize: '1.2rem'
    }
  },
  img:{
    width: 400,
    height: 550,
    margin: '1rem',
    padding: '1rem',
    [theme.breakpoints.down('xs')]:{
      width: 200,
      height: 300,
      display: 'flex',
      justtifyContent: 'center',
      alignItems: 'center',
      margin: 'auto'
    },
    [theme.breakpoints.up('sm')]:{
      width: 300,
      height: 400,
      display: 'flex',
      justtifyContent: 'center',
      alignItems: 'center',
      margin: 'auto'
    },
    [theme.breakpoints.up('md')]:{
      width: 400,
    height: 550,
    margin: '1rem',
    padding: '1rem'
    }
  }
}))

export default function Movie(props){
  const idMovie = props.match.params.id

  const dispatch = useDispatch()
  const movieDetail = useSelector((state) => state.movieDetail)
  const loading = useSelector((state) => state.loading)
  const classes = useStyles()

  useEffect(() => {
    dispatch(getMovieDetail(idMovie))
  }, [dispatch, idMovie])

  function detail(){
    return(
      <Card className = {classes.root}>
        <Link to = '/'>
          <img
            src = {movieDetail.Poster}
            alt = {movieDetail.Title}
            className = {classes.img}
          />
        </Link>
        <div className = {classes.details}>
          <CardContent className = {classes.content}>
            <Typography className = {classes.info}>
              <b>Original Title:</b> {movieDetail.Title}
            </Typography>
            <Typography className = {classes.info}>
              <b>Year:</b> {movieDetail.Year}
            </Typography>
            <Typography className = {classes.info}>
              <b>Genres:</b> {movieDetail.Genre}
            </Typography>
            <Typography className = {classes.info}>
              <b>Runtime:</b> {movieDetail.Runtime}
            </Typography>
            <Typography className = {classes.info}>
              <b>Popularity:</b> {movieDetail.Metascore}
            </Typography>
            <Typography className = {classes.info}>
              <b>Awards:</b> {movieDetail.Awards}
            </Typography>
            <Typography className = {classes.info}>
              <b>Storyline:</b> {movieDetail.Plot}
            </Typography>
            <Typography className = {classes.info}>
              <b>Actors:</b> {movieDetail.Actors}
            </Typography>
            <Typography className = {classes.info}>
              <b>Director:</b> {movieDetail.Director}
            </Typography>
          </CardContent>
        </div>
      </Card>
    )
  }
  return(
    <div>
      {loading ? 
        <div id = 'spinnerBox'>
          <i className = 'fas fa-spinner fa-spin spinner' id = 'spinner'></i>
        </div> : detail()}
    </div>
  )
}



