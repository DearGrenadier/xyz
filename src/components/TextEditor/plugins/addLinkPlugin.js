import React from 'react'
import styled from 'styled-components'

const StyledLink = styled('a')`
  color: #77e577;
  text-decoration: underline;

  :hover {
    color: #000;
  }
`

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
    <StyledLink
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={url}
    >
      {children}
    </StyledLink>
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
