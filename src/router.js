import React from 'react';

import {
  Switch,
  Route
} from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import Pages from './pages'

export const history = createBrowserHistory()

const Router = () => (
  <ConnectedRouter history={history}>
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
      <Route path="/admin/posts/:id/edit">
        <Pages.Posts.Edit />
      </Route>
      <Route path="/admin/posts">
        <Pages.Posts.List />
      </Route>
    </Switch>
  </ConnectedRouter>
)

export default Router
