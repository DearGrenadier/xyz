import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


import actions from 'actions'
import PostForm from 'components/PostForm'

export default () => {
  const dispatch = useDispatch()
  const params = useParams()
  const post = useSelector((state) => state.currentPost.data)
  const isProcessing = useSelector((state) => state.currentPost.processing)

  useEffect(() => {
    if (parseInt(params.id, 10) !== post.id) {
      dispatch(actions.postsGetItem(params.id))
    }
  // eslint-disable-next-line
  }, [])

  const onSave = (postParams) => {
    dispatch(actions.postsUpdate({
      id: post.id,
      params: postParams
    }))
  }


  if (!post.id || isProcessing) return null

  return (
    <PostForm onSave={onSave} initialContent={post.body} title={post.title} />
  )
}
