import React, { useState } from 'react'
import {
  Icon, ButtonGroup, Button
} from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import styled from 'styled-components'
import { RichUtils, EditorState } from 'draft-js'
import EditorUtils from 'draft-js-plugins-utils'
import { getSelectedBlocksList } from 'draftjs-utils'

import ToolbarPopover from './ToolbarPopover'

const Toolbar = styled('div')`
  width: 40vw;
  margin-bottom: 12px;
`

export default React.forwardRef((props, ref) => {
  const { editorState, setEditorState, imagePlugin } = props
  const [language, setLanguage] = useState('javascript')

  const onLinkSubmit = (url) => setEditorState(EditorUtils.createLinkAtSelection(editorState, url))

  const toggleBlockType = (type) => setEditorState(RichUtils.toggleBlockType(editorState, type))

  const toggleInlineStyle = (style) => setEditorState(RichUtils.toggleInlineStyle(editorState, style))

  const onCodeBlockClick = () => {
    const currentContent = editorState.getCurrentContent()
    const blocks = getSelectedBlocksList(editorState)
    let blockMap = currentContent.getBlockMap()

    blocks.forEach((block) => {
      const data = block.getData().merge({ language })
      const newBlock = block.merge({ data, type: 'code-block' })
      blockMap = blockMap.set(block.getKey(), newBlock)
    })

    const newContentState = currentContent.merge({ blockMap })

    setEditorState(EditorState.push(editorState, newContentState, 'toggle-code-block'))
  }

  const onLanguageChange = (event) => setLanguage(event.target.value)

  const onUndoClick = () => setEditorState(EditorState.undo(editorState))
  const onRedoClick = () => setEditorState(EditorState.redo(editorState))

  return (
    <Toolbar ref={ref}>
      <ButtonGroup>
        <Button icon={<Icon icon={IconNames.UNDO} />} onClick={onUndoClick} />
        <Button icon={<Icon icon={IconNames.REDO} />} onClick={onRedoClick} />
        <Button icon={<Icon icon={IconNames.BOLD} />} onClick={() => toggleInlineStyle('BOLD')} />
        <Button icon={<Icon icon={IconNames.ITALIC} />} onClick={() => toggleInlineStyle('ITALIC')} />
        <Button icon={<Icon icon={IconNames.UNDERLINE} />} onClick={() => toggleInlineStyle('UNDERLINE')} />
        <Button icon={<Icon icon={IconNames.HEADER} />} onClick={() => toggleBlockType('header-two')} />
        <ToolbarPopover
          contentText="Put image URL"
          onSubmit={(url) => setEditorState(imagePlugin.addImage(editorState, url))}
          icon={IconNames.MEDIA}
        />
        <ToolbarPopover
          contentText="Put your URL"
          onSubmit={onLinkSubmit}
          icon={IconNames.LINK}
        />
        <Button icon={<Icon icon={IconNames.PROPERTIES} />} onClick={() => toggleBlockType('unordered-list-item')} />
        <Button icon={<Icon icon={IconNames.NUMBERED_LIST} />} onClick={() => toggleBlockType('ordered-list-item')} />

        <select value={language} onChange={onLanguageChange}>
          <option value="javascript">Javascript</option>
          <option value="css">CSS</option>
        </select>
        <Button icon={<Icon icon={IconNames.CODE} />} onClick={onCodeBlockClick} />

      </ButtonGroup>
    </Toolbar>
  )
})
