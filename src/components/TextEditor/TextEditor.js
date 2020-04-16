import React, { useState } from 'react'
import {
  EditorState, RichUtils, convertFromRaw
} from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createImagePlugin from 'draft-js-image-plugin'
// import createLinkPlugin from 'draft-js-anchor-plugin'
import Toolbar from './Toolbar'

import addLinkPlugin from './plugins/addLinkPlugin'

import './styles.css'

const imagePlugin = createImagePlugin()
const linkPlugin = addLinkPlugin

const plugins = [
  linkPlugin,
  imagePlugin
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

  return (
    <>
      <Toolbar
        editorState={editorState}
        setEditorState={setEditorState}
        imagePlugin={imagePlugin}
      />

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
