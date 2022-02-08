const Schema = require('mongoose').Schema;

const artistSchema = new Schema({
  name: {type: String, required: true},
  genre: {type: String},
  biography: {type: String}
}, {
  timestamps: true
});

module.exports = artistSchema;