const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  addNewUser
} = require('../../controllers/user-controller');

router
  .route('/')
  .get(getAllUsers)
  .post(addNewUser);

router
.route('/:id')  
.get(getUserById)


module.exports = router;