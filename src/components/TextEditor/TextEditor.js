import React, { useState } from 'react'
import {
  EditorState, RichUtils, convertFromRaw
} from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import styled from 'styled-components'
import {
  Icon
} from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'

import './styles.css'

import addLinkPlugin from './plugins/addLinkPlugin'

const Toolbar = styled('div')`
  width: 40vw;
  margin: auto;
`

const plugins = [
  addLinkPlugin
]

const TextEditor = React.forwardRef((props, ref) => {
  const { initialContent } = props

  const content = initialContent
    ? EditorState.createWithContent(convertFromRaw(JSON.parse(initialContent)))
    : EditorState.createEmpty()

  const [editorState, setEditorState] = useState(content)

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)

    if (newState) {
      setEditorState(newState)

      return 'handled'
    }

    return 'not-handled'
  }

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))
  }

  const onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))
  }

  const onUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'))
  }

  const onAddLink = () => {
    const selection = editorState.getSelection()
    const link = window.prompt('Paste the link')
    if (!link) {
      setEditorState(RichUtils.toggleLink(editorState, selection, null))
      return 'handled'
    }
    const currentContent = editorState.getCurrentContent()
    const contentWithEntity = currentContent.createEntity('LINK', 'MUTABLE', { url: link })
    const newEditorState = EditorState.push(editorState, contentWithEntity, 'create-entity')
    const entityKey = contentWithEntity.getLastCreatedEntityKey()

    setEditorState(RichUtils.toggleLink(newEditorState, selection, entityKey))
    return null
  }

  return (
    <>
      <Toolbar>
        <Icon icon={IconNames.BOLD} onClick={onBoldClick} />
        <Icon icon={IconNames.ITALIC} onClick={onItalicClick} />
        <Icon icon={IconNames.UNDERLINE} onClick={onUnderlineClick} />
        <Icon icon={IconNames.LINK} onClick={onAddLink} />
      </Toolbar>

      <Editor
        ref={ref}
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        plugins={plugins}
        spellCheck
      />
    </>
  )
})

export default TextEditor
