import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import ShowMovies from '../ShowMovies/ShowMovies.jsx'
import {deleteMovieList, sendTitle} from '../../actions/index.js'
import {Button, InputBase, alpha, makeStyles} from '@material-ui/core'
import 'font-awesome/css/font-awesome.min.css'
import './SearchBar.css'

const useStyles = makeStyles((theme) => ({
  grow:{
    flexGrow: 1
  },
  menuButton:{
    marginRight: theme.spacing(2)
  },
  title:{
    display: 'none',
    [theme.breakpoints.up('sm')]:{
      display: 'block'
    }
  },
  search:{
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover':{
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]:{
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  inputRoot:{
    backgroundColor: 'darkgrey',
    color: 'rgb(83, 83, 83)',
    borderRadius: '5px', 
    fontSize: 'larger'
  },
  inputInput:{
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]:{
      width: '20ch'
    }
  },
  sectionDesktop:{
    display: 'none',
    [theme.breakpoints.up('md')]:{
      display: 'flex'
    }
  },
  sectionMobile:{
    display: 'flex',
    [theme.breakpoints.up('md')]:{
      display: 'none'
    }
  }
}))

export default function Buscador(){
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(sendTitle(title))
    setTitle('')
  }

  const deleteMovies = () => {
    dispatch(deleteMovieList())
    setTitle('')
  }
 
  const classes = useStyles()
  return(
      <div id = 'container'>
        <div id = 'divContainer'>
          <form className = 'form-container' onSubmit = {handleSubmit}>
            <div className = {classes.search}>            
              <InputBase
                id = 'searchBar'
                placeholder = 'Search…'
                classes = {{
                  root: classes.inputRoot,
                  input: classes.inputInput 
                }}
                value={title}
                inputProps = {{'aria-label': 'search'}}
                onChange = {handleChange}
              />
            </div>
            <Button id = 'search' type = 'submit'>Search</Button>
            <Button id = 'delete' onClick = {deleteMovies}>Remove</Button>
          </form>
        </div>
        <ShowMovies/>
      </div>
  )
}
