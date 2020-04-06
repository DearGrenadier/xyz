import React, { useState } from 'react'
import { EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createImagePlugin from 'draft-js-image-plugin'
import styled from 'styled-components'
import {
  Icon, Button
} from "@blueprintjs/core"

import './styles.css'

import addLinkPlugin from './plugins/addLinkPlugin'

const Toolbar = styled('div')`
  width: 40vw;
  margin: auto;
`

const plugins = [
  addLinkPlugin
]

const TextEditor = () => {
  const content = window.localStorage.getItem('content')

  const initialContent = content ? EditorState.createWithContent(convertFromRaw(JSON.parse(content))) : EditorState.createEmpty()
  const [editorState, setEditorState] = useState(initialContent)

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
    const content = editorState.getCurrentContent()
    const contentWithEntity = content.createEntity('LINK', 'MUTABLE', { url: link })
    const newEditorState = EditorState.push(editorState, contentWithEntity, 'create-entity')
    const entityKey = contentWithEntity.getLastCreatedEntityKey()

    setEditorState(RichUtils.toggleLink(newEditorState, selection, entityKey))
  }

  const onSave = () => {
    const contentState = editorState.getCurrentContent()
    window.localStorage.setItem('content', JSON.stringify(convertToRaw(contentState)))
  }

  return (
    <>
      <Toolbar>
        <Icon icon="bold" onClick={onBoldClick} />
        <Icon icon="italic" onClick={onItalicClick} />
        <Icon icon="underline" onClick={onUnderlineClick} />
        <Icon icon="link" onClick={onAddLink} />
        <Button icon="saved" intent="primary" onClick={onSave}>Save</Button>
      </Toolbar>

      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        plugins={plugins}
        spellCheck
      />
    </>
  )
}

export default TextEditor
