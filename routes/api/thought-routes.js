const router = require('express').Router();
const {
  addNewThought,
  getAllThoughts,
  getThoughtById,
  updateThought,
  removeThought
} = require('../../controllers/thought-controller');

const { addNewReaction } = require('../../controllers/reaction-controller');

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

router
  .route('/:thoughtId/reactions')
  .post(addNewReaction)
  .delete()


module.exports = router;