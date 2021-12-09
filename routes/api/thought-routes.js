const router = require('express').Router();
const {
  addNewThought,
  getAllThoughts,
  getThoughtById
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThoughts)

router
  .route('/:thoughtId')
  .get(getThoughtById)

router
  .route('/:userId')
  .post(addNewThought);



module.exports = router;