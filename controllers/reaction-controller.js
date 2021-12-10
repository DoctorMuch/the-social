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
  },

  removeReaction({ params }, res) {
    Thought.findOneAndDelete({ _id: params.reactionId })
      .then(deletedReaction => {
        if (!deletedReaction) {
          res.status(404).json({ message: 'No reaction found to delete!' });
          return;
        }
        return Thought.findOneAndUpdate(
          { _id: params.thoughtId },
          { $pull: { reactions: params.reactionId } },
          { new: true }
        );
      })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'There is no thought by this ID in our records.' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => console.log(err));
  }
};

module.exports = reactionController;