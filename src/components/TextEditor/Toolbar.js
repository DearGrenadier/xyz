import React from 'react'
import {
  Icon, ButtonGroup, Button
} from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import styled from 'styled-components'
import { RichUtils } from 'draft-js'
import EditorUtils from 'draft-js-plugins-utils'

import ToolbarPopover from './ToolbarPopover'

const Toolbar = styled('div')`
  padding: 5px;
  width: 40vw;
  margin: auto;
`

export default (props) => {
  const { editorState, setEditorState, imagePlugin } = props

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))
  }

  const onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))
  }

  const onUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'))
  }

  const onLinkSubmit = (url) => {
    setEditorState(EditorUtils.createLinkAtSelection(editorState, url))
  }

  const onUnorderedClick = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, 'unordered-list-item'))
  }

  const onOrderedClick = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, 'ordered-list-item'))
  }

  const onCodeBlockClick = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, 'code-block'))
  }

  return (
    <Toolbar>
      <ButtonGroup>
        <Button icon={<Icon icon={IconNames.BOLD} />} onClick={onBoldClick} />
        <Button icon={<Icon icon={IconNames.ITALIC} />} onClick={onItalicClick} />
        <Button icon={<Icon icon={IconNames.UNDERLINE} />} onClick={onUnderlineClick} />
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
        <Button icon={<Icon icon={IconNames.PROPERTIES} />} onClick={onUnorderedClick} />
        <Button icon={<Icon icon={IconNames.NUMBERED_LIST} />} onClick={onOrderedClick} />
        <Button icon={<Icon icon={IconNames.CODE} />} onClick={onCodeBlockClick} />
      </ButtonGroup>
    </Toolbar>
  )
}
