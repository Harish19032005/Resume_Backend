const express = require('express');
const router = express.Router();
const controller = require('../controllers/resumeController');

router.get('/', controller.getAllResumes);
router.get('/:id', controller.getResume);
router.post('/', controller.createResume);
router.put('/:id', controller.updateResume);
router.delete('/:id', controller.deleteResume);

module.exports = router;
