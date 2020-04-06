import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import actions from 'actions'

const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.posts)

  useEffect(() => {
    dispatch(actions.fetchPosts())
  }, [dispatch])

  // eslint-disable-next-line no-console
  console.log(process.env.NODE_ENV)

  return (
    <>
      List
      <p>{posts.length}</p>
    </>
  )
}


export default PostsList
