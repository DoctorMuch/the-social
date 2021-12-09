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
  }
};

module.exports = friendController;