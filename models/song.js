const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
  title: {type: String, required: true},
  artist: {type: String, required: true},
  // artist: {type: Schema.Types.ObjectId, ref: 'Artist', required: true},
  duration: {type: Number, required: true},
  album: {type: String},
  releaseYear: {type: Number, default: 1982},
  createdBy: {type: Schema.Types.ObjectId, ref: 'User', required: true}
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

songSchema.virtual('durationDisplay').get(function() {
  return Math.floor(parseInt(this.duration) / 60) + ':' + parseInt(this.duration) % 60;
});


module.exports = mongoose.model('Song', songSchema);
