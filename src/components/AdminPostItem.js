import React from 'react';
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { Link } from 'react-router-dom'
import {
  ButtonGroup,
  Button,
  Card,
  Elevation,
  H4,
  Colors,
  Icon
} from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import styled from 'styled-components'

import actions from 'actions'

const StyledCard = styled(Card)`
  width: 40vw;
  margin-bottom: 14px;
`

const StatusButton = styled(Button)`
  color: ${(props) => (props.isPublished ? Colors.ORANGE3 : Colors.GREEN3)} !important;
`

export default ({ post }) => {
  const dispatch = useDispatch()

  const statusTextMapping = {
    published: 'Unpublish',
    unpublished: 'Publish'
  }

  const reverseStatusMapping = {
    published: 'unpublished',
    unpublished: 'published'
  }

  const statusText = (status) => statusTextMapping[status]

  const isPublished = post.status === 'published'

  const onStatusChangeClick = () => {
    dispatch(actions.postsUpdate({
      id: post.id,
      params: {
        status: reverseStatusMapping[post.status]
      }
    }))
  }

  const onEditClick = () => dispatch(push(`/admin/posts/${post.id}/edit`))

  const onDeleteClick = () => dispatch(actions.postsDelete(post.id))

  return (
    <StyledCard elevation={Elevation.ONE}>
      <H4><Link to={`/posts/${post.id}`}>{post.title}</Link></H4>
      <ButtonGroup minimal>
        <StatusButton
          icon={
            <Icon icon={IconNames.CHANGES} color={isPublished ? Colors.ORANGE3 : Colors.GREEN3} />
          }
          text={statusText(post.status)}
          isPublished={isPublished}
          onClick={onStatusChangeClick}
        />
        <Button
          icon={IconNames.EDIT}
          text="Edit"
          onClick={onEditClick}
        />
        <Button
          icon={IconNames.TRASH}
          text="Delete"
          intent="danger"
          onClick={onDeleteClick}
        />
      </ButtonGroup>
    </StyledCard>
  )
}
