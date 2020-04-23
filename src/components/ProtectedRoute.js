import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Route
} from 'react-router-dom'

import actions from 'actions'

export default ({ children, ...rest }) => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)

  useEffect(() => {
    if (!token) {
      // eslint-disable-next-line no-alert
      const credentials = window.prompt('Please provide username:password pair')

      dispatch(actions.authGet(credentials))
    }
  // eslint-disable-next-line
  }, [])

  const render = () => token && children

  return (
    <Route
      {...rest}
      render={render}
    />
  )
}
