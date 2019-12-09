import Home from '../components/pages/home'
import About from '../components/pages/about'
import Posts from '../components/pages/posts'
import Editor from '../components/pages/editor'

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
    },
    {
      name: 'editor',
      path: '/editor',
      comp: Editor
    }
  ]
}

export default publicRoutes;
