import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import actions from 'actions'
import PageWrapper from 'components/PageWrapper'

export default () => {
  const dispatch = useDispatch()
  const params = useParams()
  const post = useSelector((state) => state.currentPost.data)

  useEffect(() => {
    if (parseInt(params.id, 10) !== post.id) {
      dispatch(actions.postsGetItem(params.id))
    }
  // eslint-disable-next-line
  }, [])

  return (
    <PageWrapper />
  )
}
