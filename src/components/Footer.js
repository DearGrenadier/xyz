import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faHackerrank } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


const Footer = styled('footer')`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 32px;
  width: 100%;
  display: flex;
  justify-content: center;

  svg {
    margin-right: 8px;
  }
`

const links = {
  'mailto:dmitry.nazarchuk.work@gmail.com': faEnvelope,
  'https://www.linkedin.com/in/dimanazarchuk/': faLinkedin,
  'https://github.com/DearGrenadier': faGithub,
  'https://www.hackerrank.com/HALFAMAZING': faHackerrank
}

export default () => (
  <Footer>
    {Object.entries(links).map(
      ([link, icon]) => (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={icon} size="2x" />
        </a>
      )
    )}
  </Footer>
)
