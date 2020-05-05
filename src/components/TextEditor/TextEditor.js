import React, { useState, useEffect } from 'react'
import {
  EditorState, RichUtils, convertFromRaw, getDefaultKeyBinding, Modifier
} from 'draft-js'
import Immutable from 'immutable'
import Editor from 'draft-js-plugins-editor'
import createImagePlugin from 'draft-js-image-plugin'
import Prism from 'prismjs';
import createPrismPlugin from 'draft-js-prism-plugin'
import 'prismjs/themes/prism-okaidia.css'

import Toolbar from './Toolbar'
import CodeBlock from './CodeBlock'
import addLinkPlugin from './plugins/addLinkPlugin'
import './styles.css'


const imagePlugin = createImagePlugin()
const prismPlugin = createPrismPlugin({
  prism: Prism
});

const plugins = [
  addLinkPlugin,
  imagePlugin,
  prismPlugin
]

const TextEditor = React.forwardRef((props, ref) => {
  const { initialContent, showToolbar, ...rest } = props


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

  const blockRenderMap = Immutable.Map({
    'code-block': {
      element: 'code',
      wrapper: <CodeBlock />
    }
  })

  useEffect(() => {
    const selection = editorState.getSelection()
    const currentContent = editorState.getCurrentContent()
    const block = currentContent.getBlockForKey(selection.getStartKey())
    const blockBefore = currentContent.getBlockBefore(selection.getStartKey())

    if (block.getType() === 'code-block' && blockBefore && blockBefore.getType() === 'code-block') {
      const data = block.getData().merge({ language: blockBefore.getData().get('language') })
      const newBlock = block.merge({ data })

      const blockMap = editorState
        .getCurrentContent()
        .getBlockMap()
        .set(selection.getStartKey(), newBlock)

      const newContentState = editorState.getCurrentContent().merge({
        blockMap,
        selectionAfter: selection
      })

      setEditorState(EditorState.push(editorState, newContentState, 'change-block-data'))
    }
  }, [editorState]);

  const keyBindingFn = (event) => {
    if (event.keyCode === 9 /* `Tab` key */) {
      event.preventDefault()
      return 'tab'
    }

    return getDefaultKeyBinding(event);
  }

  const handleTab = (event) => {
    event.preventDefault()

    const newContentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      '  '
    )

    setEditorState(EditorState.push(editorState, newContentState, 'insert-characters'))
  }

  const toolbar = showToolbar && (
    <Toolbar
      editorState={editorState}
      setEditorState={setEditorState}
      imagePlugin={imagePlugin}
    />
  )

  return (
    <>
      {toolbar}

      <Editor
        ref={ref}
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        plugins={plugins}
        blockRenderMap={blockRenderMap}
        keyBindingFn={keyBindingFn}
        onTab={handleTab}
        spellCheck
        {...rest}
      />
    </>
  )
})

export default TextEditor
