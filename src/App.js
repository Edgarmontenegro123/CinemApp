import React from 'react'
import NavBar from './components/NavBar/NavBar'
import SearchBar from './components/SearchBar/SearchBar'
import Favourites from './components/Favourites/Favourites'
import Movie from './components/Movie/Movie'
import Footer from './components/Footer/Footer'
import {Route} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import './App.css'

const useStyles = makeStyles((theme) => ({
  root:{
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}))
function App(){
  const classes = useStyles()
  return(
      <div className={classes.root}>
          <NavBar />
          <Route exact path='/' component = {SearchBar} />
          <Route exact path='/'component = {Footer}/>
          <Route path='/favourites' component = {Favourites} />
          <Route path='/movie/:id' component = {Movie} />
      </div>
  )
}
export default App
