import React from 'react'

const linkStrategy = (contentBlock, callback, contentState) => {
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

const Link = ({ contentState, entityKey, children }) => {
  const { url } = contentState.getEntity(entityKey).getData()

  return (
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={url}
    >
      {children}
    </a>
  )
}

export default {
  decorators: [
    {
      strategy: linkStrategy,
      component: Link
    }
  ]
}
