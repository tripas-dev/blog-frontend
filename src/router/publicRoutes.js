import Home from '../components/pages/home'
import About from '../components/pages/about'
import Posts from '../components/pages/posts'

const publicRoutes = {
  rootPath: "/",
  routes: [
    {
      root: true,
      name: 'home',
      path: '/',
      comp: Home
    },
    {
      name: 'posts',
      path: '/posts',
      comp: Posts
    },
    {
      name: 'about',
      path: '/about',
      comp: About
    }
  ]
}

export default publicRoutes;
