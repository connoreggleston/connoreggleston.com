import React from 'react';
import styled from 'styled-components'
import headshot from './assets/headshot.jpeg'
import heroImage from './assets/hero-cropped.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const BREAKPOINT_MEDIUM = '768px';
const BREAKPOINT_LARGE = '1280px';

const App = () => (
  <Container>
    <Content>
      <Headshot />
      <Title>Connor Eggleston</Title>
      <div>
        <a href='http://github.com/connoreggleston'>
          <StyledFontAwesomeIcon icon={faGithub} size='lg' margin='2rem' />
        </a>
        <a href='http://linkedin.com/in/connoreggleston'>
          <StyledFontAwesomeIcon icon={faLinkedinIn} size='lg' />
        </a>
      </div>
    </Content>
  </Container>
)

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: ${props => props.margin || 0};
  background: rgba(200, 200, 200, 0.6);
  padding: 1rem;
  border-radius: 50%;
  color: #111;
  @media (max-width: ${BREAKPOINT_MEDIUM}) {
    background: none;
    border: 1px solid black;
  }
`

const Headshot = styled.img.attrs(props => ({
  src: headshot
}))`
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.3), 0 0 4px 0 rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  margin-bottom: 2rem;
  @media (min-width: ${BREAKPOINT_MEDIUM}) {
    display: none;
  }
`

const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${BREAKPOINT_MEDIUM}) {
    width: 100%;
  }
`

const Container = styled.div`
  /* background: #282c34; */
  height: 100vh;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  @media (max-width: ${BREAKPOINT_MEDIUM}) {
    background-image: none;
  }
`

const Title = styled.div`
  color: white;
  font-size: 4rem;
  margin-bottom: 2rem;
  @media (max-width: ${BREAKPOINT_LARGE}) {
    font-size: 3rem;
  }
  @media (max-width: ${BREAKPOINT_MEDIUM}) {
    font-size: 2rem;
    color: #282c34;
  }
`

export default App;
