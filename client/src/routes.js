import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { Home, Welcome, About, Contact } from './components'
import { SurveysContainer, CreateSurveyContainer, TakeSurveyContainer } from './containers'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Home}>
      <IndexRoute component={Welcome} />
      <Route path='/surveys' component={SurveysContainer} />
      <Route path='/surveys/add' component={CreateSurveyContainer} />
      <Route path='/surveys/:id' component={TakeSurveyContainer} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
    </Route>
  </Router>
)

export default routes
