const mongoose = require("mongoose");

// create a new schema and pass in the definition of the schema as an object.
const launchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    required: true,
  },
  launchDate: {
    type: Date,
    required: true,
  },
  target: {
    type: String,
  },
  customers: [String],
  upcoming: {
    type: Boolean,
    required: true,
  },
  success: {
    type: Boolean,
    required: true,
    default: true,
  },
});
// We need to connect the schema (map to) a collection; we do this by using Models. We create a model by calling mongoose.model(), first argument is the name of our collection and 2nd argument is the schema. Assigns launchesSchema assign to Launches colletion.
// the 1st argument should always be the singular name of the collection that the model represents. Mongoose will then take what you pass in, lowercase it, make it plural and talk to the collection with that lowercase plural name.
//  connects  launchesSchema with the "launches" collection. This is because MongoDb collections should always be plural nouns. they represent potentially many launch documents.

module.exports = mongoose.model("Launch", launchesSchema);
