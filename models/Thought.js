const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal)
  },
  username: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  // reactions: [ReactionSchema]
},
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;