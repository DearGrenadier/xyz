import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router'
import { Button } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import styled from 'styled-components'

import actions from 'actions'
import PostItem from 'components/PostItem'
import AdminPageWrapper from 'components/AdminPageWrapper'

const ButtonsPanel = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 40vw;
  margin-top: 36px;
  margin-bottom: 24px;
`

const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.postsList.data)

  useEffect(() => {
    dispatch(actions.postsGetList())
  // eslint-disable-next-line
  }, [])

  const onNewClick = () => dispatch(push('/admin/posts/new'))

  return (
    <AdminPageWrapper>
      <ButtonsPanel>
        <Button icon={IconNames.PLUS} text="New Post" intent="primary" onClick={onNewClick} />
      </ButtonsPanel>
      {posts.map((post) => <PostItem key={post.id} post={post} />)}
    </AdminPageWrapper>
  )
}

export default PostsList
