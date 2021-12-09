const router = require('express').Router();
const {
  addNewThought,
  getAllThoughts
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThoughts);

router
  .route('/:userId')
  .post(addNewThought);

module.exports = router;