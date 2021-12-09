const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  addNewUser,
  updateUser,
  removeUser
} = require('../../controllers/user-controller');

router
  .route('/')
  .get(getAllUsers)
  .post(addNewUser);

router
.route('/:id')  
.get(getUserById)
.put(updateUser)
.delete(removeUser);


module.exports = router;