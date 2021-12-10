const { User, Thought } = require('../models');

const friendController = {
  addNewFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: params.friendId } },
      { new: true }
    )
    .then(dbUserData => {
      if(!dbUserData) {
        res.status(404).json({ message: 'No such user to add this friend.' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.status(500).json({ err: err.message }));
  },

  removeFriend({ params }, res) {
    User.findOneAndDelete({ _id: params.friendId})
      .then(deletedFriend => {
        if (!deletedFriend) {
          res.status(404).json({ message: 'No friend found with this ID found in friend list.' });
          return;
        }
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { friends: params.friendId } },
          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user in our list of registered users with this ID.' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
};

module.exports = friendController;