import React from 'react'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'


export default ({ children, ...rest }) => {
  const dispatch = useDispatch()

  const onClick = (event) => {
    event.preventDefault()
    dispatch(push(event.target.pathname))
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <a onClick={onClick} {...rest} role="link" tabIndex={0}>
      {children}
    </a>
  )
}
