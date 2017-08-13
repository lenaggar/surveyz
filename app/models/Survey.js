import mongoose from 'mongoose'
const Schema = mongoose.Schema

const surveySchema = new Schema(
  {
    title: { type: String, required: true },
    createDate: { type: Date, default: Date.now },
    owner: String,
    description: String,
    questions: [
      {
        head: { type: String, required: true },
        type: { type: String, required: true }
      }
    ],
    answers: [
      {
        name: { type: String, required: true },
        responseDate: { type: Date, default: Date.now },
        answers: [
          {
            value: mongoose.Schema.Types.Mixed
          }
        ]
      }
    ]
  }
)

export default mongoose.model('Survey', surveySchema)
