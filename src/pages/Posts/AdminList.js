import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router'
import { Button } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'

import actions from 'actions'
import AdminPostItem from 'components/AdminPostItem'
import AdminPageWrapper from 'components/AdminPageWrapper'
import ButtonsPanel from 'components/ButtonsPanel'

export default () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.postsList.data)

  useEffect(() => {
    dispatch(actions.postsGetList())
  }, [dispatch])

  const onNewClick = () => dispatch(push('/admin/posts/new'))

  return (
    <AdminPageWrapper>
      <ButtonsPanel>
        <Button icon={IconNames.PLUS} text="New Post" intent="primary" onClick={onNewClick} />
      </ButtonsPanel>
      {posts.map((post) => <AdminPostItem key={post.id} post={post} />)}
    </AdminPageWrapper>
  )
}
