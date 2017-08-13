import mongoose from 'mongoose'
const Schema = mongoose.Schema

const respondSchema = new Schema(
  {
    name: String,
    respondDate: { type: Date, default: Date.now },
    answers: [
      {
        value: { type: mongoose.Schema.Types.Mixed, required: true }
      }
    ]
  }
)

export default mongoose.model('SurveyRespond', respondSchema)
