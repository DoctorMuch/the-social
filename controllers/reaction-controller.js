const { User, Thought } = require('../models');

const reactionController = {
  addNewReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true }
    )
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id.' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json({ err: err.message }));
  }
};

module.exports = reactionController;