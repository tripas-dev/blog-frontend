'use strict'

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: '1rem 0'
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  postDate: {
  }
})

export default function PostCard (props) {
  const classes = useStyles()

  return (
    <div className={classes.card}>
      <div>
        <Typography variant='h5' component='h2' noWrap>
          {props.title}
        </Typography>
        <Typography variant='body2' component='p'>
          {props.subtitle}
        </Typography>
        <Typography
          className={classes.postDate}
          variant='body2'
          component='p'
          noWrap>
          {props.createdAt}
        </Typography>
      </div>
    </div>
  )
}
