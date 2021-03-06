const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: 'Reactions may not be posted anonymously. Please give your name.'
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // get: (createdAtVal) => dateFormat(createdAtVal)
  }
},
  {
    toJSON: {
      getters: true
    }
  }
);

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
    // get: (createdAtVal) => dateFormat(createdAtVal)
  },
  username: {
    type: String,
    required: 'You must identify yourself to add a thought.'
  },
  reactions: [ReactionSchema]
},
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;