import React from 'react'
import './Footer.css'
import {IconButton} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import MailIcon from '@material-ui/icons/Mail'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

export default function Footer(){
  return(
    <div className = 'Footer'>
      <div id = 'icons'>
        <IconButton href = 'https://twitter.com/MontenegroCode' target='_blank' rel='noreferrer' color='inherit' aria-label='open drawer'>
          <TwitterIcon id = 'icons' />
        </IconButton >
        <IconButton href = 'mailto:edgarmontenegro321@gmail.com' target='_blank' rel='noreferrer'>
          <MailIcon id = 'icons'/>
        </IconButton>
        <IconButton href = 'https://www.linkedin.com/in/edgarmontenegro/' target='_blank' rel='noreferrer'>
          <LinkedInIcon id = 'icons'/>
        </IconButton>
        <IconButton href = 'https://github.com/Edgarmontenegro123' target='_blank' rel='noreferrer'>
          <GitHubIcon id = 'icons'/>
        </IconButton>
      </div>
      <span id = 'created'>Made with love by Edgar Montenegro!</span>
    </div>
  )
}
