import React from 'react'
import {NavLink} from 'react-router-dom'
import {Typography} from '@material-ui/core'
import Logo from '../../Images/film.png'
import './NavBar.css'

export default function NavBar(){
    return(
        <header className = 'navBar'>
            <NavLink to = '/' style = {{textDecoration: 'none'}}>
                <Typography style = {{display: 'flex'}}>
                    <span id = 'movies'>CinemApp</span> 
                <img id = 'logo' 
                     src = {Logo} 
                     width = '35' 
                     height = '35' 
                     alt='' 
                />
                </Typography>
            </NavLink>
            <div >
                <NavLink exact to = '/' style = {{textDecoration: 'none', color: 'whitesmoke', margin: 'auto 1rem', fontSize: 'x-large', fontWeight: '900'}}>Home</NavLink>
                <NavLink to = '/favourites' style = {{textDecoration: 'none', color: 'whitesmoke', margin: 'auto 1rem', fontSize: 'x-large', fontWeight: '900'}}>Favourites</NavLink>
            </div>
        </header>
    )
}
