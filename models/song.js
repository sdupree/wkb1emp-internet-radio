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

songSchema.statics.createOrUpdate = function(song, userId) {
  console.log(song);
  console.log(userId);
  if((! song.createdBy) && (! song._id)) {
    // New song; add fields.
    song.createdBy = userId;
    song._id = new mongoose.mongo.ObjectID();
  } else if(song.createdBy != userId) {
    // Assure existing song was created by user.
    return false;
  }

  return this.findOneAndUpdate(
    // query obj
    {_id: song._id},
    // update obj
    {_id: song._id,
      title: song.title,
      artist: song.artist,
      duration: song.duration,
      album: song.album,
      releaseYear: song.releaseYear,
      createdBy: userId
    },
    // options obj
    // upsert option creates the doc if it doesn't exist!
    // new option will make sure the updated doc is returned
    {upsert: true, new: true}
  );
};

songSchema.virtual('durationDisplay').get(function() {
  return Math.floor(parseInt(this.duration) / 60) + ':' + parseInt(this.duration) % 60;
});


module.exports = mongoose.model('Song', songSchema);
