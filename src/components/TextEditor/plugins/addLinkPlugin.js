import React from 'react';
import {
  RichUtils,
  KeyBindingUtil,
  EditorState
} from 'draft-js'

export const linkStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity()
      return (
        entityKey !== null
        && contentState.getEntity(entityKey).getType() === 'LINK'
      )
    },
    callback
  )
}

export const Link = (props) => {
  // eslint-disable-next-line react/prop-types
  const { contentState, entityKey, children } = props;

  // eslint-disable-next-line react/prop-types
  const { url } = contentState.getEntity(entityKey).getData();
  return (
    <a
      className="link"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={url}
    >
      {children}
    </a>
  );
}

const addLinkPluginPlugin = {
  keyBindingFn(event, { getEditorState }) {
    const editorState = getEditorState();
    const selection = editorState.getSelection();
    if (selection.isCollapsed()) {
      return;
    }
    if (KeyBindingUtil.hasCommandModifier(event) && event.which === 75) {
      // eslint-disable-next-line consistent-return
      return 'ADD_LINK';
    }
  },

  handleKeyCommand(command, editorState, _, { setEditorState }) {
    if (command !== 'ADD_LINK') {
      return 'not-handled';
    }
    const link = window.prompt('Paste the link -');
    const selection = editorState.getSelection();
    if (!link) {
      setEditorState(RichUtils.toggleLink(editorState, selection, null));
      return 'handled';
    }
    const content = editorState.getCurrentContent();
    const contentWithEntity = content.createEntity('LINK', 'MUTABLE', {
      url: link
    });
    const newEditorState = EditorState.push(
      editorState,
      contentWithEntity,
      'create-entity'
    );
    const entityKey = contentWithEntity.getLastCreatedEntityKey();
    setEditorState(RichUtils.toggleLink(newEditorState, selection, entityKey));
    return 'handled';
  },

  decorators: [
    {
      strategy: linkStrategy,
      component: Link
    }
  ]
}

export default addLinkPluginPlugin
