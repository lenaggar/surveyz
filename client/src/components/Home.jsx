import React, { Component } from 'react'
import { Grid, Container } from 'semantic-ui-react'
import NavBar from './NavBar'

export default class Home extends Component {
  render () {
    return (
      <Grid container>
        <Grid.Row>
          <NavBar />
        </Grid.Row>
        <Grid.Row>
          {this.props.children}
        </Grid.Row>
        <Grid.Row>
          <Container textAlign='center'>
            <footer className='text-center'>
              <p>© 2017 lenaggar</p>
            </footer>
          </Container>
        </Grid.Row>
      </Grid>
    )
  }
}
