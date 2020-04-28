/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'

export default ({ children, target, ...rest }) => {
  const dispatch = useDispatch()

  const onClick = (event) => {
    if (target === '_blank') return

    event.preventDefault()
    event.stopPropagation()
    dispatch(push(event.target.pathname))
  }

  return (
    <a onClick={onClick} {...rest} role="link">
      {children}
    </a>
  )
}
