const mongoose = require("mongoose");

// ideally we want the name of our planet in MongoDB to follow the same naming convention that we use in our client in the front end. in the front end we use: {planet.kepler_name}
const planetsSchema = new mongoose.Schema({
  keplerName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Planet", planetsSchema);
