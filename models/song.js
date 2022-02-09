const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
  title: {type: String, required: true},
  artist: {type: Schema.Types.ObjectId, ref: 'Artist', required: true},
  length: {type: Number, required: true},
  album: {type: String},
  releaseYear: {type: Number, default: 1982},
  createdBy: {type: Schema.Types.ObjectId, ref: 'User', required: true}
}, {
  timestamps: true
});

module.exports = mongoose.model('Song', songSchema);
