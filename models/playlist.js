const Schema = require('mongoose').Schema;

const playlistSchema = new Schema({
  song: {type: Schema.Types.ObjectId, ref: 'Song', required: true},
  requester: {type: Schema.Types.ObjectId, ref: 'User', required: true},
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

playlistSchema.virtual('requestedAt').get(function() {
  return this.createdAt;
});

module.exports = playlistSchema;