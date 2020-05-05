import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import actions from 'actions'
import PageWrapper from 'components/PageWrapper'
import PseudoLink from 'components/PseudoLink'

const PostsList = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 630px;
  margin-left: auto;
  margin-right: auto;
`
const PostItemWrapper = styled('article')`
  margin-top: 32px;

  :first-child {
    margin-top: 28px;
  }
`

const Title = styled('header')`

`
const TitleLink = styled(PseudoLink)`
  color: #77e577;
  font-size: 28px;
  font-family: Montserrat;
  font-weight: bold;
`

const LastTimeUpdated = styled('small')`
  font-family: 'Merriweather';
  font-size: 12px;
  margin-top: 4px;
  font-style: italic;
  display: block;
`

const PostItem = ({ post }) => (
  <PostItemWrapper>
    <Title>
      <TitleLink href={`/posts/${post.id}`}>{post.title}</TitleLink>
    </Title>
    <LastTimeUpdated>
      {`Last time updated at: ${post.updatedAt}`}
    </LastTimeUpdated>
  </PostItemWrapper>
)

export default () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.postsList.data)

  useEffect(() => {
    dispatch(actions.postsGetList({ status: 'published' }))
  }, [dispatch])

  return (
    <PageWrapper>
      <PostsList>
        {posts.map((post) => <PostItem key={post.id} post={post} />)}
      </PostsList>
    </PageWrapper>
  )
}
