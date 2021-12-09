const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  addNewUser,
  updateUser,
  removeUser
} = require('../../controllers/user-controller');

const {
  addNewFriend,
  // removeFriend
} = require('../../controllers/friend-controller');

router
  .route('/')
  .get(getAllUsers)
  .post(addNewUser);

router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(removeUser);

router
  .route('/:userId/friends/:friendId')
  .post(addNewFriend)
  // .delete(removeFriend);


module.exports = router;