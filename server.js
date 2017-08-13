import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import morgan from 'morgan'
import dotenv from 'dotenv'

// import Survey from './app/models/survey'
import { getSurveys, getSurvey, postSurvey, deleteSurvey, postNewQuestion, postRespond } from './app/routes/Survey'

const app = express()
const port = process.env.PORT || 7000

dotenv.config({ path: 'variables.env' })

const options = {
  server: {
    socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 },
    reconnectTries: Number.MAX_VALUE
  },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
}
mongoose.Promise = global.Promise

mongoose.connect(process.env.DATABASE, options)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

// bodyParser & morgan moddleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

// static assets middleware
app.use(express.static(path.join(__dirname, 'client/dist')))

// enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.route('/surveys')
  .get(getSurveys)
  .post(postSurvey)

app.route('/surveys/new-question')
  .post(postNewQuestion)

app.route('/surveys/answers')
  .post(postRespond)

app.route('/surveys/:id')
  .get(getSurvey)
  .delete(deleteSurvey)

app.route('*')
  .get((req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'client/dist') })
  })

app.listen(port)

console.log(` ~ listening on port ${port}...`)
