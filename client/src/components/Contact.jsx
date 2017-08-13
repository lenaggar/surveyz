import React, { PureComponent } from 'react'
import { Container, Header } from 'semantic-ui-react'

export default class Welcome extends PureComponent {
  render () {
    return (
      <Container textAlign='center' text>
        <Header as='h1'>Any Questions?</Header>
        <p className='lead'>Don't hesitate to contact me: naggar218@gmail.com</p>
      </Container>
    )
  }
}
