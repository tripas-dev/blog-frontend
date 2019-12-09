'use strict'

import React from 'react'
import PostCard from '../../molecules/post-card'
import { Container, Grid } from '@material-ui/core'

export default function Home () {
  const posts = [
    {
      title: 'Creating a complete blog',
      subtitle: 'Using React, Redux and NestJS to create a blog',
      createdAt: '12/12/2019',
    }, {
      title: 'Micro frontend',
      subtitle: 'Bring micro service backend architecture to frontend',
      createdAt: '12/12/2019',
    },
  ]
  return (
    <Grid>
      {posts.map(post =>
        <PostCard
          title={post.title}
          subtitle={post.subtitle}
          createdAt={post.createdAt}
        />
      )}
    </Grid>
  )
}
