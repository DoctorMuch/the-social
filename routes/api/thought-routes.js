const router = require('express').Router();
const {
  addNewThought,
  getAllThoughts,
  getThoughtById,
  updateThought,
  removeThought
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

router
  .route('/:userId/:thoughtId')
  .put(updateThought)
  .delete(removeThought)



module.exports = router;