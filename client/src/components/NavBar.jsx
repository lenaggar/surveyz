import React, { Component } from 'react'
import { Link } from 'react-router'
import { Menu, Header } from 'semantic-ui-react'

export default class NavBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeItem: 'home'
    }

    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick (e, { name }) {
    this.setState({ activeItem: name })
  }

  render () {
    const { activeItem } = this.state

    return (
      <Menu size='huge' fluid>
        <Menu.Item header as={Link} to='/' name='home' onClick={this.handleItemClick}>
          <Header as='h3'>SurveysZ</Header>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            as={Link}
            to='/'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to='/surveys'
            name='surveys'
            active={activeItem === 'surveys'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to='/about'
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to='/contact'
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}
