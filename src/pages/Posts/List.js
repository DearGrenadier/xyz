import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import actions from 'actions'
import PageWrapper from 'components/PageWrapper'

const PostsList = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: 64px;
  max-width: 630px;
  margin-left: auto;
  margin-right: auto;
`
const PostItemWrapper = styled('article')`
  margin-top: 36px;
`

const Title = styled('header')`

`
const TitleLink = styled('a')`
  color: #77e577;
  font-size: 24px;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
`

const CreatedAt = styled('small')`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 12px;
  margin-top: 4px;
`

const PostItem = ({ post }) => (
  <PostItemWrapper>
    <Title>
      <TitleLink href={`/posts/${post.id}`}>{post.title}</TitleLink>
    </Title>
    <CreatedAt>
      {post.createdAt}
    </CreatedAt>

  </PostItemWrapper>
)

export default () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.postsList.data)

  useEffect(() => {
    dispatch(actions.postsGetList({ status: 'published' }))
  // eslint-disable-next-line
  }, [])

  return (
    <PageWrapper>
      <PostsList>
        {posts.map((post) => <PostItem key={post.id} post={post} />)}
      </PostsList>
    </PageWrapper>
  )
}
