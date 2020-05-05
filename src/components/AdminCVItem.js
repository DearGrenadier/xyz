import React from 'react'
import { useDispatch } from 'react-redux'
import {
  ButtonGroup,
  Button,
  Elevation,
  H4
} from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'

import actions from 'actions'
import AdminStyledCard from 'components/AdminStyledCard'

export default ({ cv }) => {
  const dispatch = useDispatch()

  const onDeleteClick = () => dispatch(actions.cvsDelete(cv.id))

  return (
    <AdminStyledCard elevation={Elevation.ONE}>
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
    </AdminStyledCard>
  )
}
