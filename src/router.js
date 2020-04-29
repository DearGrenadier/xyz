import React from 'react';

import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import ProtectedRoute from 'components/ProtectedRoute'
import Pages from 'pages'


export const history = createBrowserHistory()

const Router = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/">
        <Pages.Home />
      </Route>
      <Route exact path="/posts">
        <Pages.Posts.List />
      </Route>
      <Route path="/posts/:id">
        <Pages.Posts.Show />
      </Route>
      <ProtectedRoute exact path="/admin">
        <Redirect to="/admin/posts" />
      </ProtectedRoute>
      <ProtectedRoute path="/admin/posts/new">
        <Pages.Posts.New />
      </ProtectedRoute>
      <ProtectedRoute path="/admin/posts/:id/edit">
        <Pages.Posts.Edit />
      </ProtectedRoute>
      <ProtectedRoute path="/admin/posts">
        <Pages.Posts.AdminList />
      </ProtectedRoute>
      <ProtectedRoute exact path="/admin/cvs">
        <Pages.CVs.List />
      </ProtectedRoute>
      <ProtectedRoute path="/admin/cvs/new">
        <Pages.CVs.New />
      </ProtectedRoute>
    </Switch>
  </ConnectedRouter>
)

export default Router
