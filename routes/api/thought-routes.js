const router = require('express').Router();
const {
  addNewThought,
  getAllThoughts,
  getThoughtById,
  updateThought,
  removeThought
} = require('../../controllers/thought-controller');

const { addNewReaction, removeReaction } = require('../../controllers/reaction-controller');

router
  .route('/')
  .get(getAllThoughts)
  .post(addNewThought);

router
  .route('/:thoughtId')
  .get(getThoughtById)

// router
//   .route('/:userId')
  

router
  .route('/:userId/:thoughtId')
  .put(updateThought)
  .delete(removeThought)

router
  .route('/:thoughtId/reactions')
  .post(addNewReaction)

  router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction)


module.exports = router;