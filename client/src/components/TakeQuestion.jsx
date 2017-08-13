import React from 'react'
import { Divider, Container, Header, Input, Form } from 'semantic-ui-react'

const TakeQuestion = props => {
  const { question: { head, type }, index } = props

  const handleChange = (event, data) => {
    console.log(data)
  }

  return (
    <Container>
      {
        (index) ? <Divider /> : ''
      }
      <Form.Group>
        <Form.Field width='16'>
          <Header size='medium' content={`Q${index + 1}: ${head}?`} />
          <Input placeholder={type} onChange={handleChange} />
        </Form.Field>
      </Form.Group>
    </Container>
  )
}

export default TakeQuestion
