import React, { Component } from 'react'
import axios from 'axios'
import dateformat from 'dateformat'
import { TakeQuestion } from '../components'
import { Container, Grid, Segment, Header, Form } from 'semantic-ui-react'

export default class TakeSurveyContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true,
      // answerSubmit: {
      //   date
      // }
      // ...
    }

    this.deleteSurvey = this.deleteSurvey.bind(this)
    this.toggleLoading = this.toggleLoading.bind(this)
  }

  componentDidMount () {
    this.getSurvey(this.props.params.id)
  }

  getSurvey (id) {
    axios.get(`http://localhost:7000/surveys/${id}`)
      .then((response) => response.data)
      .then((survey) => {
        this.setState({ ...survey, isLoading: false })
        console.log(survey)
      })
  }

  deleteSurvey (id) {
    axios.delete(`http://localhost:7000/surveys/${id}`)
      .then((response) => response.data)
      .then((response) => {
        this.setState({
          surveys: this.state.surveys.filter((survey) => survey._id !== id)
        })
        console.log(response.message)
      })
  }

  toggleLoading () {
    this.setState({isLoading: !this.state.isLoading})
  }

  render () {
    const {
      title = '\'Survey title...\'',
      createDate = new Date(),
      owner = '<Anonymous>',
      description,
      questions
    } = this.state

    return (
      <Grid.Column width='16'>
        <Segment
          padded
          loading={this.state.isLoading}
        >
          <Grid relaxed stackable>
            <Grid.Row columns='1'>
              <Grid.Column width='16'>
                <Header as='h1'>
                  <Header.Content>
                    <Container textAlign='center'>
                      {title}
                    </Container>
                  </Header.Content>
                  <Header.Subheader>
                    {`Owner: ${owner} | Date: ${dateformat(createDate, 'mmm dd, yyyy')}`}
                  </Header.Subheader>
                </Header>
                <Container text>
                  <p>{description}</p>
                </Container>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Form>
                  {
                    (this.state.isLoading)
                      ? 'We are fetching the data for you now...'
                      : questions.map((question, index) => (
                        <TakeQuestion key={index} question={question} index={index} />
                      ))
                  }
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    )
  }
}
