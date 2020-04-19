import React from 'react'
import { useDispatch } from 'react-redux'

import actions from 'actions'
import PostForm from 'components/PostForm'
import AdminPageWrapper from 'components/AdminPageWrapper'

const PostsNew = () => {
  const dispatch = useDispatch()

  const onSave = (params) => {
    dispatch(actions.postsCreate(params))
  }

  return (
    <AdminPageWrapper>
      <PostForm onSave={onSave} />
    </AdminPageWrapper>
  )
}

export default PostsNew
