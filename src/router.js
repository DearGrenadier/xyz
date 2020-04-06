import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Pages from './pages'


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Pages.Home />
      </Route>
      <Route exact path="/admin">
        <Pages.AdminHome />
      </Route>
      <Route path="/admin/posts/new">
        <Pages.Posts.New />
      </Route>
      <Route path="/admin/posts">
        <Pages.Posts.List />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Router
