import React from 'react'
import { Container, Card } from 'semantic-ui-react'
import Survey from './Survey'

const SurveysListManager = props => {
  const { surveys, searchBar, toggleModal, deleteSurvey } = props

  const surveysList = surveys
    .filter(survey => survey.title.toLowerCase().includes(searchBar))
    .map((survey, i) => (
      <Survey
        survey={survey}
        index={i}
        key={i}
        toggleModal={toggleModal}
        deleteGame={deleteSurvey}
      />
    ))

  return (
    <Container >
      <Card.Group itemsPerRow='3' stackable >
        { surveysList }
      </Card.Group>
    </Container>
  )
}

export default SurveysListManager
