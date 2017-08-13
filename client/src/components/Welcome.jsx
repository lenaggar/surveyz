import React, { PureComponent } from 'react'
import { Container, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router'

export default class Welcome extends PureComponent {
  render () {
    return (
      <Container textAlign='center' text>
        <Header as='h1'>Welcome</Header>
        <p className='lead'>Click on browse to start your journey into the wiki of games that made history.</p>
        <p className='lead'>
          <Link className='btn btn-lg' to='/surveys'><Button positive>Browse!</Button></Link>
        </p>
      </Container>
    )
  }
}
