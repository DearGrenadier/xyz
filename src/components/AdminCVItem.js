import React from 'react';
import { useDispatch } from 'react-redux'
import {
  ButtonGroup,
  Button,
  Card,
  Elevation,
  H4
} from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import styled from 'styled-components'

import actions from 'actions'

const StyledCard = styled(Card)`
  width: 40vw;
  margin-bottom: 14px;
`

export default ({ cv }) => {
  const dispatch = useDispatch()

  const onDeleteClick = () => dispatch(actions.cvsDelete(cv.id))

  return (
    <StyledCard elevation={Elevation.ONE}>
      <H4><a href={cv.fileUrl} target="_blank" rel="noopener noreferrer">{cv.fileName}</a></H4>
      <p>{cv.createdAt}</p>
      <ButtonGroup minimal>
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
