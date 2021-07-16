import mongoose from 'mongoose'

export { Flight }

const Schema = mongoose.Schema

const flightSchema = new Schema(
  {
    airline: {type: String, enum: ['American', 'Southwest', 'United'] },
    airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'] },
    flightNo: {type: Number, min: 10, max: 9999},
    departs: Date,
  },
  { timestamps: true }
)

// releaseYear: {
//   type: Number,
//   default: function() {
//     return new Date().getFullYear()
//   },
//   min: 1927,
// },

const Flight = mongoose.model('Flight', flightSchema)
