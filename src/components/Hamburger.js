import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import device from 'config/size'

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
  ${({ collapsed }) => (collapsed ? css`width: 40px;` : css`width: 32px;`)}
  ${({ collapsed }) => !collapsed && css`margin-bottom: 4px;`}
  ${({ collapsed }) => collapsed && css`position: absolute;`}

  :first-child {
    ${({ collapsed }) => !collapsed && css`margin-top: 11px;`}
    ${({ collapsed }) => collapsed && css`top: 19px;`}
    ${({ collapsed }) => collapsed && css`transform: rotate(45deg);`}
  }

  :nth-child(2) {
    ${({ collapsed }) => collapsed && css`display: none;`}
  }

  :last-child {
    ${({ collapsed }) => collapsed && css`top: 19px;`}
    ${({ collapsed }) => collapsed && css`transform: rotate(-45deg);`}
  }
`


export default ({ onClick }) => {
  const [collapsed, setCollapsed] = useState(false)

  const handleClick = (event) => {
    setCollapsed(!collapsed)
    onClick(event)
  }

  return (
    <Hamburger onClick={handleClick}>
      <Stroke collapsed={collapsed} />
      <Stroke collapsed={collapsed} />
      <Stroke collapsed={collapsed} />
    </Hamburger>
  )
}
