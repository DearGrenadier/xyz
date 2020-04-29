import React from 'react'
import styled from 'styled-components'

import PageWrapper from 'components/PageWrapper'
import avatar from 'images/avatar.png'
import device from 'config/size'

const Content = styled('div')`
  margin-top: 52px;
  margin-bottom: 32px;

  @media ${device.mobile} {
    margin-top: 32px;
  }
`

const Avatar = styled('img')`
  border: 8px solid #77e577;
  border-radius: 12px;
  float: left;
  width: 180px;
  height: 180px;
  margin-right: 20px;
  margin-bottom: 20px;

  :hover {
    border: 12px solid #000;
  }
`

const Title = styled('p')`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 26px;
  color: #77e577;
  text-indent: 4px;
  margin-top: 24px;
  text-align: right;

  @media ${device.mobile} {
    text-indent: 0;
    text-align: left;
  }
`

const Paragraph = styled('p')`
  font-family: 'Montserrat';
  font-size: 20px;
  text-indent: 40px;
  text-align: justify;

  @media ${device.mobile} {
    text-indent: 12px;
  }
`

export default () => (
  <PageWrapper>
    <Content>
      <Avatar src={avatar} alt="Avatar" />
      <Title>
        WHOAMI
      </Title>
      <Paragraph>
        I am Dima. For more than 5 years I have been making modern web applications and solving tasks using a variety of approaches and tools from the web technologies
        <span role="img" aria-label="world"> 🌐 </span>
        world.
        I specialize in Ruby and JavaScript development along with data handling and storing solutions.
      </Paragraph>
      <Paragraph>
        Being a lover of reliability, I am passionate about testing and vulnerability fixing and do not consider that as a boring or tedious activity.
        I do not consider myseld as genius software developer, but I really like to build projects and implement fresh ideas.
      </Paragraph>
      <Title>
        WORK APPROCHES
      </Title>
      <Paragraph>
        I love to work in international teams in an agile environment, where everyone is focusing on collaboration and delivering value.
        I thrive in a fun and relaxed atmosphere, created by people who really love what they do.
        At this moment I prefer only remote work type, where I act like an individual entrepreneur at Minsk, Belarus
        <span role="img" aria-label="BY"> 🇧🇾 </span>
        (UTC+3).
      </Paragraph>
      <Title>
        INTERESTS IN TECH
      </Title>
      <Paragraph>
        Sometimes I like to look at functional programming world, specifically play with Elixir. Basically, I do not like to stop learning
        <span role="img" aria-label="books">📚</span>
        and I am always open to new things.
      </Paragraph>
      <Title>
        SITE PURPOSE
      </Title>
      <Paragraph>
        The purpose of this site is experience sharing as well as knowledge saving.
        I hope that some of my materials might save time and help either me or the site visitors during our working challenges solving or tasks complition.
        Also I am going to develop my writing skill here and getting new connections and job opportunities. Feel free to contact with me
        <span role="img" aria-label="smile"> 😉</span>
        .
      </Paragraph>
    </Content>
  </PageWrapper>
)
