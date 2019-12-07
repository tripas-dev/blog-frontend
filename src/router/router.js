'use strict'

import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import publicRoutes from './publicRoutes'

export default function Router () {
  return (
    <BrowserRouter>
      <Header/>
      <main style={{padding: '5rem'}}>
        <Switch>
          {publicRoutes.routes.map((route, index) => {
            return (
              <Route
                key={route.name}
                exact={route.root}
                path={route.path}
                render={() => <route.comp />}
              />
            )
          })}
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
