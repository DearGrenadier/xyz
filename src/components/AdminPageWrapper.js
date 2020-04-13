import React from 'react'
import { Navbar, Button } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import styled from 'styled-components'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'

const PageWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledNavbar = styled(Navbar)`
  margin-top: 2px;
  width: 40vw;
`

export default ({ children }) => {
  const dispatch = useDispatch()

  return (
    <PageWrapper>
      <StyledNavbar>
        <Navbar.Group>
          <Button
            minimal
            text="Posts"
            onClick={() => dispatch(push('/admin/posts'))}
            icon={IconNames.MANUALLY_ENTERED_DATA}
          />
        </Navbar.Group>
      </StyledNavbar>

      {children}
    </PageWrapper>
  )
}
