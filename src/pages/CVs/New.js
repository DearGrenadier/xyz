import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FileInput, Button } from '@blueprintjs/core'

import actions from 'actions'
import AdminPageWrapper from 'components/AdminPageWrapper'
import ButtonsPanel from 'components/ButtonsPanel'

export default () => {
  const [upload, setUpload] = useState(null)
  const dispatch = useDispatch()

  const onInputChange = (event) => {
    const file = event.target.files[0]
    setUpload(file)
  }

  const onSaveClick = () => dispatch(actions.cvsCreate(upload))

  return (
    <AdminPageWrapper>
      <ButtonsPanel>
        <FileInput
          text={(upload && upload.name) || 'Choose File...'}
          buttonText="Browse"
          onInputChange={onInputChange}
        />
        <Button icon="saved" intent="primary" onClick={onSaveClick} text="Save" />
      </ButtonsPanel>

    </AdminPageWrapper>
  )
}
