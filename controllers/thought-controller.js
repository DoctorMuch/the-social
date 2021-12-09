const { User, Thought } = require('../models');

const thoughtController = {
  addNewThought({ params, body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User associated with that ID in our records.' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err: err.message });
      });
  },

  getAllThoughts(req, res) {
    Thought.find({})
      .sort({ _id: -1 })
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.status(500).json({ err: err.message });
      })
  },
}

module.exports = thoughtController;