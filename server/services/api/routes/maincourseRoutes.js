const router = require('express').Router()
const controller = require('../controller/maincourseController')

// router for maincourse
router.get('/', controller.getAllMaincourse);
router.get('/:id', controller.getMaincourseById);
router.delete('/:id', controller.deleteMaincourseById);

module.exports = router; 