import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import actions from 'actions'

// eslint-disable-next-line no-console
console.log(process.env.REACT_APP_API_HOST)

const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.posts)

  useEffect(() => {
    dispatch(actions.fetchPosts())
  }, [])

  return (
    <>
      List
      <p>{posts.length}</p>
    </>
  )
}


export default PostsList
