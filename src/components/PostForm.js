import React, { useRef, useState } from 'react'
import TextEditor from 'components/TextEditor'
import { Button, InputGroup } from '@blueprintjs/core'
import { convertToRaw } from 'draft-js'
import { IconNames } from '@blueprintjs/icons'

import AdminPageWrapper from 'components/AdminPageWrapper'
import ButtonsPanel from 'components/ButtonsPanel'

export default ({ onSave, initialContent, title }) => {
  const textEditorRef = useRef(null)
  const [titleValue, setTitleValue] = useState(title || '')

  const onSaveClick = () => {
    const content = textEditorRef.current.getEditorState().getCurrentContent()
    const json = JSON.stringify(convertToRaw(content))

    onSave({
      title: titleValue,
      body: json
    })
  }

  const handleTitleChange = (event) => setTitleValue(event.target.value)

  return (
    <AdminPageWrapper>
      <ButtonsPanel>
        <InputGroup
          value={titleValue}
          leftIcon={IconNames.ANNOTATION}
          onChange={handleTitleChange}
          placeholder="Title..."
        />
        <Button icon="saved" intent="primary" onClick={onSaveClick} text="Save" />
      </ButtonsPanel>
      <TextEditor ref={textEditorRef} initialContent={initialContent} />
    </AdminPageWrapper>
  )
}
