import React, { useRef, useState } from 'react'
import TextEditor from 'components/TextEditor'
import { Button, InputGroup } from '@blueprintjs/core'
import { convertToRaw } from 'draft-js'
import { IconNames } from '@blueprintjs/icons'

import ButtonsPanel from 'components/ButtonsPanel'
import styled from 'styled-components'

const StyledInputGroup = styled(InputGroup)`
  flex: 1;
  margin-right: 8px;
  input {
    font-size: 18px;
    font-family: 'Montserrat';
    font-weight: bold;
  }
`

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
    <>
      <ButtonsPanel>
        <StyledInputGroup
          value={titleValue}
          leftIcon={IconNames.ANNOTATION}
          onChange={handleTitleChange}
          placeholder="Title..."
        />
        <Button icon="saved" intent="primary" onClick={onSaveClick} text="Save" />
      </ButtonsPanel>
      <TextEditor
        ref={textEditorRef}
        initialContent={initialContent}
        showToolbar
      />
    </>
  )
}
