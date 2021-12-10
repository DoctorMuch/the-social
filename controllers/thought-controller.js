const { User, Thought } = require('../models');

const thoughtController = {
  addNewThought({ body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
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

  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.thoughtId })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'Cannot locate a thought by that ID.' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      body,
      { new: true }
      )
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'Cannot find a thought by this ID to update.' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({ err: err.message });
      });
  },

  removeThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
      .then(deletedThought => {
        if (!deletedThought) {
          res.status(404).json({ message: 'No thought by that ID in our records.' });
          return;
        }
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { thoughts: params.thoughtId } },
          { new: true }
        );
      })
      .then(dbUserData => {
        if(!dbUserData) {
          res.status(404).json({ message: 'No user with this ID found to remove a thought.' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({ err: err.message });
      });
  }
}

module.exports = thoughtController;