import React from 'react'
import styled from 'styled-components'

const CodeBlock = styled('pre')`
  border-radius: 10px;
`

export default ({ children }) => {

  return (
    <CodeBlock className="language-">
      {children}
    </CodeBlock>
  )
}
