import React, { PureComponent } from 'react'
import { Card } from 'semantic-ui-react'
import dateformat from 'dateformat'
import { Link } from 'react-router'

export default class Survey extends PureComponent {
  render () {
    const { survey: { _id, title, owner, date, description }, toggleModal, deleteGame } = this.props

    const getRandomColor = () => {
      const color = 'red orange yellow olive green teal blue violet purple pink brown grey black'.split(' ')
      const index = Math.round(Math.random() * color.length)
      return color[index]
    }

    return (
      <Card
        fluid
        centered
        as={Link}
        to={`/surveys/${_id}`}
        color={getRandomColor()}
        href='#card-example-link-card'
        header={title}
        meta={`${owner || 'Anonymous'} - ${dateformat(date, 'mmm dd, yyyy')}`}
        description={description || ''}
      />
    )
  }
}
