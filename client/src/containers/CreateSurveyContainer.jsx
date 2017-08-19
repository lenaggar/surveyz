import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import axios from 'axios'
import { SurveyForm } from '../components'
import { Container } from 'semantic-ui-react'

export default class CreateSurveyContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newSurvey: {}
    }

    this.submit = this.submit.bind(this)
    this.setSurvey = this.setSurvey.bind(this)
  }

  submit() {
    const newSurvey = Object.assign({}, this.state.newSurvey)

    axios
      .post('http://localhost:7000/surveys', {
        headers: { 'Content-Type': 'application/json' },
        data: newSurvey
      })
      .then((response) => response.data)
      .then((response) => {
        console.log(response.message)
        hashHistory.push('/surveys')
      })
  }

  setSurvey() {
    const newSurvey = {
      title: document.getElementById('title').value,
      owner: document.getElementById('owner').value
    }
    this.setState({ newSurvey })
  }

  render() {
    return (
      <Container text>
        <SurveyForm submit={this.submit} setSurvey={this.setSurvey} />
      </Container>
    )
  }
}
