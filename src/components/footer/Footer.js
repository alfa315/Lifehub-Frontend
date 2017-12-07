import React from 'react'
import { Grid, List, Segment, Container, Header } from 'semantic-ui-react'

const Footer = (props) => {
  return(
    <Segment inverted vertical style={{ padding: '1em 0em' }}>
      <Container className='footer-text'>
        <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
      </Container>
    </Segment>
  )
}

export default Footer
