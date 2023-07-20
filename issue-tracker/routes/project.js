const express = require('express');
const router = express.Router();
const projectController = require('../controller/project_controller');

router.post('/create', projectController.create);
router.get('/:id', projectController.project);
router.post('/:id', projectController.createIssue);

module.exports = router;