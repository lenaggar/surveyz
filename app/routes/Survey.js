import Survey from '../models/Survey'

const getSurveys = (req, res) => {
  Survey.find(null, null, { sort: { createDate: 1 } }, (err, surveys) => {
    if (err) res.send(err)

    res.json(surveys)
  })
}

const getSurvey = (req, res) => {
  const { id } = req.params

  Survey.findById(id, (err, survey) => {
    if (err) res.send(err)

    res.json(survey)
  })
}

const postSurvey = (req, res) => {
  let survey = Object.assign(new Survey(), req.body)

  survey.save(err => {
    if (err) res.send(err)

    res.json({ message: 'Survey created.' })
  })
}

const postNewQuestion = (req, res) => {
  Survey.findByIdAndUpdate(
    req.body.id,
    { $push: { 'questions': req.body.question } },
    { new: true },
    (err, survey) => {
      if (err) res.send(err)

      res.json({
        message: 'question successfully added',
        newSurvey: survey
      })
    }
  )
}

const postRespond = (req, res) => {
  Survey.findByIdAndUpdate(
    req.body.id,
    { $push: { 'answers': req.body.response } },
    { new: true },
    (err, survey) => {
      if (err) res.send(err)

      res.json({
        message: 'Your answers successfully submitted',
        newSurvey: survey
      })
    }
  )
}

const deleteSurvey = (req, res) => {
  const { id } = req.params

  Survey.remove({ _id: id }, err => {
    if (err) res.send(err)

    res.json({ message: 'Survey successfully deleted' })
  })
}

export { getSurveys, getSurvey, postSurvey, deleteSurvey, postNewQuestion, postRespond }
