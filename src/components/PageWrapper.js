import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import logo from 'images/logo.svg'
import device from 'config/size'
import Footer from 'components/Footer'


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

const HomeLink = styled('a')`
  margin: 0 24px;

  @media ${device.mobile} {
    margin: 0;
  }
`

const MenuLink = styled('a')`
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

const Hamburger = styled('div')`
  display: none;

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50px;
    width: 50px;
    border-radius: 5px;
    border: 4px solid #000;
    background: #77e577;
    position: relative;
  }
`

const Stroke = styled('span')`
  display: block;
  border-radius: 2px;
  background: #000;
  height: 4px;
  ${({ showMobileMenu }) => (showMobileMenu ? css`width: 40px;` : css`width: 32px;`)}
  ${({ showMobileMenu }) => !showMobileMenu && css`margin-bottom: 4px;`}
  ${({ showMobileMenu }) => showMobileMenu && css`position: absolute;`}

  :first-child {
    ${({ showMobileMenu }) => !showMobileMenu && css`margin-top: 11px;`}
    ${({ showMobileMenu }) => showMobileMenu && css`top: 19px;`}
    ${({ showMobileMenu }) => showMobileMenu && css`transform: rotate(45deg);`}
  }

  :nth-child(2) {
    ${({ showMobileMenu }) => showMobileMenu && css`display: none;`}
  }

  :last-child {
    ${({ showMobileMenu }) => showMobileMenu && css`top: 19px;`}
    ${({ showMobileMenu }) => showMobileMenu && css`transform: rotate(-45deg);`}
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

  return (
    <PageWrapper>
      <Header role="navigation">
        <MenuLink href="/posts" style={{ textAlign: 'right' }}>
          Posts
        </MenuLink>
        <HomeLink href="/">
          <img src={logo} alt="logo" />
        </HomeLink>
        <MenuLink href="/cv">
          CV
        </MenuLink>

        <Hamburger onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <Stroke showMobileMenu={showMobileMenu} />
          <Stroke showMobileMenu={showMobileMenu} />
          <Stroke showMobileMenu={showMobileMenu} />
        </Hamburger>
      </Header>
      <MobileMenu show={showMobileMenu}>
        <MenuLink href="/posts" show>
          Posts
        </MenuLink>
        <MenuLink href="/cv" show>
          CV
        </MenuLink>
      </MobileMenu>

      {children}

      <Footer />
    </PageWrapper>
  )
}
