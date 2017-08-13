import React, { PureComponent } from 'react'
import { Container, Header } from 'semantic-ui-react'

export default class Welcome extends PureComponent {
  render () {
    return (
      <Container textAlign='center' text>
        <Header as='h1'>JavaScript Everywhere</Header>
        <p className='lead'>This Archive is made with Node.js and React. The two communicate throught async HTTP requests handled by Redux-saga... Yes we love Redux here!</p>
      </Container>
    )
  }
}
