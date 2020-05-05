import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import logo from 'images/logo.svg'
import device from 'config/size'
import Footer from 'components/Footer'
import PseudoLink from 'components/PseudoLink'
import actions from 'actions'
import Hamburger from 'components/Hamburger'

const PageWrapper = styled('div')`
  margin-left: auto;
  margin-right: auto;
  max-width: 768px;
  padding: 0 6px;
`

const Header = styled('nav')`
  display: flex;
  justify-content: center;
  height: 50px;
  line-height: 50px;
  margin-top: 4px;

  @media ${device.mobile} {
    justify-content: space-between;
  }
`

const HomeLink = styled(PseudoLink)`
  margin: 0 24px;

  @media ${device.mobile} {
    margin: 0;
  }

  img {
    pointer-events: none;
  }
`

const MenuLink = styled(PseudoLink)`
  font-size: 20px;
  font-family: 'Montserrat';
  font-weight: bold;
  color: #000;
  flex: 1;

  :hover {
    color: #77e577;
  }

  @media ${device.mobile} {
    display: ${(props) => (props.show ? 'block' : 'none')};
    padding: 8px 0;
  }
`

const MobileMenu = styled('nav')`
  display: none;

  @media ${device.mobile} {
    display: ${(props) => (props.show ? 'flex' : 'none')};
    margin-top: 8px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export default ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const dispatch = useDispatch()
  const [cv] = useSelector((state) => state.cvs.data)

  useEffect(() => {
    if (!cv) {
      dispatch(actions.cvsGetList({ limit: 1 }))
    }
  }, [])

  return (
    <PageWrapper>
      <Header role="navigation">
        <MenuLink href="/posts" style={{ textAlign: 'right' }}>
          Posts
        </MenuLink>
        <HomeLink href="/">
          <img src={logo} alt="logo" />
        </HomeLink>
        <MenuLink href={cv && cv.fileUrl} target="_blank">
          CV
        </MenuLink>

        <Hamburger onClick={() => setShowMobileMenu(!showMobileMenu)} />
      </Header>
      <MobileMenu show={showMobileMenu}>
        <MenuLink href="/posts" show="true">
          Posts
        </MenuLink>
        <MenuLink href="/cv" show="true">
          CV
        </MenuLink>
      </MobileMenu>

      {children}

      <Footer />
    </PageWrapper>
  )
}
