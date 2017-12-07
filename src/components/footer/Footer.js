import React from 'react'
import { Segment, Container, Button } from 'semantic-ui-react'

const Footer = (props) => {
  return(
    <Segment inverted vertical style={{ padding: '1em 0em' }}>
      <Container className='footer-text'>
        <p>Thank you for viewing LIFEHUB!</p>
        <a href="https://www.linkedin.com/in/al-artesona-744757142/" target="_blank"><Button circular color='linkedin' icon='linkedin' /></a>
        <a href="https://www.facebook.com/" target="_blank"><Button circular color='facebook' icon='facebook' /></a>
        <a href="https://twitter.com/" target="_blank"><Button circular color='twitter' icon='twitter' /></a>
        <a href="https://plus.google.com" target="_blank"><Button circular color='google plus' icon='google plus' /></a>
      </Container>
    </Segment>
  )
}

export default Footer
