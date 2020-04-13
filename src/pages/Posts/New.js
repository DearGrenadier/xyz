import React from 'react'
import { useDispatch } from 'react-redux'

import actions from 'actions'
import PostForm from 'components/PostForm'

const PostsNew = () => {
  const dispatch = useDispatch()

  const onSave = (params) => {
    dispatch(actions.postsCreate(params))
  }

  return (
    <PostForm onSave={onSave} />
  )
}

export default PostsNew
