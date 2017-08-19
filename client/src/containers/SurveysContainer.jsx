import React, { Component } from 'react'
import axios from 'axios'
import { SurveysListManager, SearchSurveys } from '../components'
import { Grid, Button, Divider } from 'semantic-ui-react'
import { Link } from 'react-router'

export default class SurveysContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      surveys: [],
      selectedSurvey: {},
      searchBar: ''
    }

    this.setSearchBar = this.setSearchBar.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.deleteSurvey = this.deleteSurvey.bind(this)
  }

  componentDidMount() {
    this.getSurveys()
  }

  getSurveys() {
    axios
      .get('http://localhost:7000/surveys')
      .then((response) => response.data)
      .then((surveys) => this.setState({ surveys }))
  }

  deleteSurvey(id) {
    axios
      .delete(`http://localhost:7000/surveys/${id}`)
      .then((response) => response.data)
      .then((response) => {
        this.setState({
          surveys: this.state.surveys.filter((survey) => survey._id !== id)
        })
        console.log(response.message)
      })
  }

  setSearchBar(event) {
    this.setState({
      searchBar: event.target.value.toLowerCase()
    })
  }

  toggleModal(index) {
    this.setState({ selectedSurvey: this.state.surveys[index] })
    $('#survey-modal').modal()
  }

  render() {
    const { surveys, searchBar } = this.state

    return (
      <Grid columns="1" centered stackable relaxed>
        <Grid.Row columns="1">
          <Grid.Column width="16">
            <SearchSurveys setSearchBar={this.setSearchBar} />
          </Grid.Column>
        </Grid.Row>

        <Divider />

        <Grid.Row columns="1">
          <Grid.Column width="16">
            <SurveysListManager
              surveys={surveys}
              searchBar={searchBar}
              toggleModal={this.toggleModal}
              deleteSurvey={this.deleteSurvey}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="1">
          <Grid.Column width="16">
            <Button
              as={Link}
              to="/surveys/add"
              color="green"
              floated="left"
              primary
            >
              Create a new Survey!
            </Button>
          </Grid.Column>
        </Grid.Row>

        <Divider />
      </Grid>
    )
  }
}
