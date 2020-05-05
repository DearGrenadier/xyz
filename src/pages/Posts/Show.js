import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import actions from 'actions'
import PageWrapper from 'components/PageWrapper'
import TextEditor from 'components/TextEditor'

const Title = styled('h1')`
  color: #77e577;
  font-size: 36px;
  font-weight: bold;
  font-family: 'Montserrat';
  margin: 28px 0 8px 0;
  line-height: 1;
`
const LastTimeUpdated = styled('small')`
  font-family: 'Merriweather';
  font-size: 12px;
  font-style: italic;
  margin-bottom: 32px;
  display: block;
`

export default () => {
  const dispatch = useDispatch()
  const params = useParams()
  const post = useSelector((state) => state.currentPost.data)

  useEffect(() => {
    if (parseInt(params.id, 10) !== post.id) {
      dispatch(actions.postsGetItem(params.id))
    }
  }, [dispatch, params.id, post.id])

  if (!post.id) return null

  return (
    <PageWrapper>
      <Title>
        {post.title}
      </Title>
      <LastTimeUpdated>
        {`Last time updated at: ${post.updatedAt}`}
      </LastTimeUpdated>
      <TextEditor
        initialContent={post.body}
        readOnly
      />
    </PageWrapper>
  )
}
